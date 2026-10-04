"use client";

import { useEffect, useRef, useState } from "react";

type SlideGalleryProps = {
  slug: string;
  title: string;
  count: number;
};

export default function SlideGallery({ slug, title, count }: SlideGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const slide = `/slides/${slug}/${String(index + 1).padStart(2, "0")}.webp`;

  function close() {
    dialogRef.current?.close();
  }

  function show() {
    setIndex(0);
    dialogRef.current?.showModal();
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") setIndex((current) => Math.min(current + 1, count - 1));
      if (event.key === "ArrowLeft") setIndex((current) => Math.max(current - 1, 0));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, count]);

  return (
    <>
      <button className="deck-link" type="button" onClick={show}>
        Смотреть слайды <span aria-hidden="true">↗</span>
      </button>
      <dialog
        className="slide-gallery"
        ref={dialogRef}
        aria-label={`Галерея: ${title}`}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {open && (
          <div className="slide-gallery-inner">
            <header className="slide-gallery-header">
              <strong>{title}</strong>
              <button type="button" className="slide-gallery-close" onClick={close} aria-label="Закрыть галерею">
                ×
              </button>
            </header>
            <div
              className="slide-gallery-stage"
              onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const delta = event.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(delta) > 40) {
                  setIndex((current) => Math.max(0, Math.min(count - 1, current + (delta < 0 ? 1 : -1))));
                }
                touchStartX.current = null;
              }}
            >
              <img src={slide} alt={`${title} — слайд ${index + 1} из ${count}`} />
            </div>
            <nav className="slide-gallery-controls" aria-label="Навигация по слайдам">
              <button type="button" onClick={() => setIndex((current) => current - 1)} disabled={index === 0} aria-label="Предыдущий слайд">←</button>
              <span aria-live="polite">{index + 1} / {count}</span>
              <input
                type="range"
                min="1"
                max={count}
                value={index + 1}
                onChange={(event) => setIndex(Number(event.target.value) - 1)}
                aria-label="Номер слайда"
              />
              <button type="button" onClick={() => setIndex((current) => current + 1)} disabled={index === count - 1} aria-label="Следующий слайд">→</button>
              <a href={slide} target="_blank" rel="noreferrer" aria-label="Открыть текущий слайд в полном размере">Открыть крупно ↗</a>
            </nav>
          </div>
        )}
      </dialog>
    </>
  );
}
