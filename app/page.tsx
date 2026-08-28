import Image from "next/image";

/*
 * ГЛАВНЫЙ ФАЙЛ СОДЕРЖИМОГО САЙТА
 * --------------------------------
 * Здесь находятся почти все тексты, карточки проектов и пути к файлам.
 * JSX очень похож на HTML: видимый текст можно менять прямо между тегами.
 *
 * Пример:
 *   <h3>Старое название</h3>
 * заменить на:
 *   <h3>Новое название</h3>
 *
 * Файлы изображений, видео и PDF лежат в папке public/.
 * Путь "/work/photo.webp" означает файл public/work/photo.webp.
 */

// СПИСОК ИНСТРУМЕНТОВ в блоке «Инструменты» ближе к концу страницы.
const tools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "PowerPoint",
  "Kling",
  "Veo",
  "Nano Banana",
];

// ТРИ КАРТОЧКИ НАПРАВЛЕНИЙ сразу под первым экраном.
const services = [
  {
    number: "01",
    title: "Презентации и digital",
    text: "Структура, визуальная логика и оформление материалов, которые помогают объяснить продукт или идею.",
  },
  {
    number: "02",
    title: "AI-контент",
    text: "Концепции, генерация визуалов и роликов, сборка цельной истории из разных AI-инструментов.",
  },
  {
    number: "03",
    title: "Видео и монтаж",
    text: "Сценарий, раскадровка, монтаж, титры, звук и подготовка контента под разные площадки.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ШАПКА С ИМЕНЕМ И ОСНОВНОЙ НАВИГАЦИЕЙ. */}
      <header className="site-header">
        <a className="logo" href="#top" aria-label="В начало">
          Анна Борзых
        </a>
        <nav aria-label="Основная навигация">
          <a href="#works">Работы</a>
          <a href="#about">Обо мне</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      {/* ПЕРВЫЙ ЭКРАН: должность, главный заголовок, описание и кнопка. */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Content designer / Creative marketing specialist</p>
          <h1>
            Создаю визуальные коммуникации на пересечении дизайна, контента и
            технологий
          </h1>
          <p className="hero-lead">
            Презентации и digital-материалы, AI-контент, видео и монтаж — от идеи
            до готового визуального результата.
          </p>
          <a className="primary-button" href="#works">
            Смотреть работы <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="hero-collage" aria-hidden="true">
          <div className="shape shape-plum" />
          <div className="shape shape-mint" />
          <div className="shape shape-lilac" />
          <div className="film-frame">
            <div className="film-holes" />
            <div className="film-content">
              <span className="spark">✦</span>
              <span className="film-label">visual story</span>
            </div>
          </div>
          <div className="note-card">
            <span>Aa</span>
            <div className="note-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="play-card">
            <span>▶</span>
            <i />
            <i />
            <i />
          </div>
          <div className="cursor-mark">↗</div>
          <div className="doodle doodle-one">✳</div>
          <div className="doodle doodle-two">⌁</div>
        </div>
      </section>

      {/* КАРТОЧКИ НАПРАВЛЕНИЙ берут тексты из массива services в начале файла. */}
      <section className="service-grid" aria-label="Основные направления">
        {services.map((service) => (
          <a className="service-card" href="#works" key={service.number}>
            <div className="service-top">
              <span>{service.number}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </a>
        ))}
      </section>

      {/* ВИДЕОКЕЙСЫ. Новый проект можно добавить, скопировав целый <article>...</article>. */}
      <section className="section works" id="works">
        <div className="section-heading">
          <p className="eyebrow">Избранные работы</p>
          <h2>Проекты, где дизайн работает вместе с контентом</h2>
          <p>
            В подборке — презентации, AI-видео и визуальные проекты для digital
            и строительной отрасли.
          </p>
        </div>

        <div className="case-grid">
          <article className="case-card case-featured merch-case">
            {/* FASHION-КЕЙС: видео и четыре изображения находятся в public/work/merch/. */}
            <div className="merch-media">
              <div className="merch-video-wrap">
                <video
                  className="merch-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/work/merch/fashion-poster.jpg"
                  aria-label="Fashion-ролик с авторским принтом на одежде"
                >
                  <source src="/work/merch/fashion-film.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
                <span className="case-tag">Fashion film · 00:33</span>
              </div>

              <div className="merch-gallery" aria-label="Разработка и нанесение принта">
                <figure className="merch-shot merch-shot-original">
                  <Image
                    src="/work/merch/print-original.webp"
                    alt="Авторский принт с графическим изображением тигра"
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 46vw, 22vw"
                  />
                  <figcaption>Авторский принт</figcaption>
                </figure>
                <figure className="merch-shot merch-shot-hoodie">
                  <Image
                    src="/work/merch/hoodie-mockup.webp"
                    alt="Принт, адаптированный для нанесения на худи"
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 46vw, 22vw"
                  />
                  <figcaption>Худи</figcaption>
                </figure>
                <figure className="merch-shot">
                  <Image
                    src="/work/merch/longsleeve-close.webp"
                    alt="Крупный план авторской графики на лонгсливе"
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 46vw, 22vw"
                  />
                  <figcaption>Адаптация графики</figcaption>
                </figure>
                <figure className="merch-shot">
                  <Image
                    src="/work/merch/longsleeve-full.webp"
                    alt="Mockup"
                    fill
                    unoptimized
                    sizes="(max-width: 800px) 46vw, 22vw"
                  />
                  <figcaption>Носитель</figcaption>
                </figure>
              </div>
            </div>

            <div className="case-copy merch-copy">
              <div>
                <p className="case-index">01 / Принт · AI-контент · Видео</p>
                <h3>Fashion-кейс: от авторского принта до ролика</h3>
              </div>
              <p>
                Разработала принт и сама адаптировала его под одежду: от
                исходной графики и визуализации на носителях до финального
                fashion-ролика.
              </p>
              <ul aria-label="Роль в проекте">
                <li>Авторский принт</li>
                <li>Адаптация на носители</li>
                <li>AI-визуализация</li>
                <li>Монтаж</li>
              </ul>
            </div>
          </article>

          <article className="case-card case-featured video-portfolio-case">
            {/* ДВА AI-ВИДЕОКЕЙСА вместо статичной раскадровки. */}
            <div className="video-showcase-grid">
              <figure className="video-project">
                <video
                  className="portfolio-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/work/video/construction-conductor-poster.jpg"
                  aria-label="AI-ролик Дирижёр строительства"
                >
                  <source
                    src="/work/video/construction-conductor.mp4"
                    type="video/mp4"
                  />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
                <figcaption>
                  <span>01 · AI-видео</span>
                  <strong>Дирижёр строительства</strong>
                  <p>
                    Визуальная метафора цифрового управления стройкой: масштаб,
                    динамика и AR-слой поверх реального объекта.
                  </p>
                </figcaption>
              </figure>

              <figure className="video-project">
                <video
                  className="portfolio-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/work/video/mira-ar-scenario-poster.jpg"
                  aria-label="Сценарный ролик о работе с MIRA и AR на стройплощадке"
                >
                  <source
                    src="/work/video/mira-ar-scenario.mp4"
                    type="video/mp4"
                  />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
                <figcaption>
                  <span>02 · Сценарный ролик</span>
                  <strong>MIRA: AR на стройплощадке</strong>
                  <p>
                    История о переходе от кабинета к реальному объекту и работе
                    с проектом через дополненную реальность.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="case-copy">
              <div>
                <p className="case-index">02 / AI-контент · Видео · Строительство</p>
                <h3>Цифровые технологии как визуальная история</h3>
              </div>
              <p>
                Два ролика о строительных продуктах: от разработки сценария и
                генерации кадров до монтажа и цельной визуальной драматургии.
              </p>
              <ul aria-label="Роль в проектах">
                <li>Сценарий и раскадровка</li>
                <li>AI-генерация</li>
                <li>Монтаж и постпродакшн</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* ПРЕЗЕНТАЦИИ. У каждой карточки есть два превью и ссылка на PDF в public/decks/. */}
      <section className="section presentation-showcase" id="presentations">
        <div className="presentation-heading">
          <div>
            <p className="eyebrow">Презентации и digital</p>
            <h2>Слайды, которые ведут зрителя от идеи к результату</h2>
          </div>
          <p>
            Реальные работы из портфолио: исследовательская логика, визуальная
            система, продуктовые экраны и финальные носители.
          </p>
        </div>

        <div className="presentation-grid">
          <article className="deck-case deck-case-featured">
            <div className="deck-preview deck-preview-dark">
              <div className="slide slide-main">
                <Image
                  src="/work/presentations/vk-cover.webp"
                  alt="Титульный слайд презентации о корпоративном AI-мерче"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 58vw"
                />
              </div>
              <div className="slide slide-secondary">
                <Image
                  src="/work/presentations/vk-apparel.webp"
                  alt="Слайд с визуализацией одежды и аксессуаров VK AI"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 60vw, 30vw"
                />
              </div>
              <span className="deck-count">19 слайдов</span>
            </div>
            <div className="deck-copy">
              <p className="case-index">01 / Концепция · Дизайн · AI</p>
              <h3>Корпоративный мерч как интерфейс доверия</h3>
              <p>
                Презентация для VK AI: от статистики и референсов до цельной
                визуальной системы и коллекции носителей.
              </p>
              <div className="deck-skills">
                <span>Исследование</span>
                <span>Сторителлинг</span>
                <span>Визуализация мерча</span>
              </div>
              <a
                className="deck-link"
                href="/decks/vk-ai-merch.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Смотреть презентацию <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="deck-case deck-case-wide">
            <div className="deck-preview deck-preview-bridge">
              <div className="slide slide-main">
                <Image
                  src="/work/presentations/bridge-cover.webp"
                  alt="Обложка презентации концепции надземного пешеходного моста в районе Москва-Сити"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 48vw"
                />
              </div>
              <div className="slide slide-secondary">
                <Image
                  src="/work/presentations/bridge-commercial.webp"
                  alt="Слайд о коммерческом потенциале пешеходного моста"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 60vw, 26vw"
                />
              </div>
              <span className="deck-count">8 слайдов</span>
            </div>
            <div className="deck-copy">
              <p className="case-index">02 / Концепция · Дизайн </p>
              <h3>Пешеходный мост для Москва-Сити</h3>
              <p>
                Визуальный сценарий концепт-проекта: проблема, параметры
                конструкции, этапы реализации и коммерческий потенциал.
              </p>
              <div className="deck-skills">
                <span>Презентационный дизайн</span>
                <span>Сторителлинг</span>
                <span>AI-визуализация</span>
              </div>
              <a
                className="deck-link"
                href="/decks/moscow-city-bridge.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Смотреть презентацию <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="deck-case">
            <div className="deck-preview deck-preview-lilac">
              <div className="slide slide-main">
                <Image
                  src="/work/presentations/mindcare-product.webp"
                  alt="Слайд презентации с интерфейсами приложения MindCare"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 42vw"
                />
              </div>
              <div className="slide slide-secondary">
                <Image
                  src="/work/presentations/mindcare-survey.webp"
                  alt="Слайд с результатами пользовательского опроса MindCare"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 60vw, 24vw"
                />
              </div>
              <span className="deck-count">13 слайдов</span>
            </div>
            <div className="deck-copy">
              <p className="case-index">03 / Концепция · Дизайн · UI/UX ·  </p>
              <h3>MindCare — от исследования к прототипу</h3>
              <p>
                Исследование аудитории, конкурентный анализ и презентация
                цифрового продукта в единой визуальной истории.
              </p>
              <div className="deck-skills">
                <span>UX-исследование</span>
                <span>Figma</span>
                <span>Прототип</span>
              </div>
              <a
                className="deck-link"
                href="/decks/mindcare.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Смотреть презентацию <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="deck-case">
            <div className="deck-preview deck-preview-mint">
              <div className="slide slide-main">
                <Image
                  src="/work/presentations/brandbook-cover.webp"
                  alt="Обложка брендбука ProHome"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 42vw"
                />
              </div>
              <div className="slide slide-secondary">
                <Image
                  src="/work/presentations/brandbook-photo.webp"
                  alt="Слайд брендбука с правилами фотостиля"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 60vw, 24vw"
                />
              </div>
              <span className="deck-count">33 страницы</span>
            </div>
            <div className="deck-copy">
              <p className="case-index">04 / Brand guideline</p>
              <h3>ProHome — брендбук и система носителей</h3>
              <p>
                Айдентика, палитра, типографика, паттерны и правила применения
                бренда в digital и печатных материалах.
              </p>
              <div className="deck-skills">
                <span>Айдентика</span>
                <span>Гайдлайн</span>
                <span>Носители</span>
              </div>
              <a
                className="deck-link"
                href="/decks/prohome-brandbook.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Смотреть презентацию <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="deck-case deck-case-wide">
            <div className="deck-preview deck-preview-career">
              <div className="slide slide-main">
                <Image
                  src="/work/presentations/career-cover.webp"
                  alt="Титульный слайд презентации сервиса Career Manager"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 48vw"
                />
              </div>
              <div className="slide slide-secondary">
                <Image
                  src="/work/presentations/career-mockup.webp"
                  alt="Слайд с макетом сервиса Career Manager"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 60vw, 26vw"
                />
              </div>
              <span className="deck-count">12 слайдов</span>
            </div>
            <div className="deck-copy">
              <p className="case-index">05 / Product concept</p>
              <h3>Career Manager — сервис развития портфолио</h3>
              <p>
                Концепция смежного продукта для Behance: проблема, аудитория,
                ценность, модель разработки и визуальный макет сервиса.
              </p>
              <div className="deck-skills">
                <span>Продуктовая идея</span>
                <span>Аналитика</span>
                <span>Макет</span>
              </div>
              <a
                className="deck-link"
                href="/decks/career-manager.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Смотреть презентацию <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ОБО МНЕ И ОПЫТ. Здесь сейчас оставлены заглушки компании и периода работы. */}
      <section className="section about" id="about">
        <div className="about-intro">
          <p className="eyebrow">Обо мне</p>
          <h2>Дизайнер, который умеет не только «сделать красиво»</h2>
        </div>
        <div className="about-grid">
          <figure className="about-photo-card">
            <Image
              src="/work/about/anna-borzykh.webp"
              alt="Анна Борзых — Content Designer"
              fill
              unoptimized
              sizes="(max-width: 800px) 100vw, 28vw"
            />
          </figure>
          <div className="about-card about-main">
            <p>
              Я — контент-дизайнер с профильным образованием в области
              графического дизайна и прикладной информатики. Создаю визуальный
              контент, который помогает объяснять продукты, поддерживать
              маркетинг и собирать цельную коммуникацию из текста, графики,
              видео и AI-инструментов.
            </p>
            <div className="education">
              <span>Образование</span>
              <strong>Бакалавриат</strong>
              <p>Графический дизайн в прикладной информатике</p>
            </div>
          </div>
          <div className="about-card experience-card">
            <span className="card-label">Опыт работы</span>
            <h3>Content Designer / Graphic Designer</h3>
            <p>МетроТрансМост · 02.2026 — н.в.</p>
            <ul>
              <li>Визуальный и видеоконтент</li>
              <li>Презентации и digital-материалы</li>
              <li>AI-видео и генеративная графика</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ИНСТРУМЕНТЫ: названия редактируются в массиве tools в начале файла. */}
      <section className="section toolkit">
        <p className="eyebrow">Инструменты</p>
        <div className="tool-list">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      {/* КОНТАКТЫ: замени три заглушки и имя в строке копирайта. */}
      <footer className="section footer" id="contacts">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2>Давайте сделаем что-нибудь сильное</h2>
        </div>
        <div className="contact-list">
          <p>
            <span>Telegram</span>
            <strong>@ann_brz</strong>
          </p>
          <p>
            <span>Email</span>
            <strong>annaborzykh@mail.ru</strong>
          </p>
          <p>
            <span>HeadHunter</span>
            <strong>
              <a
                href="https://hh.ru/resume/7764d7abff08f8f3d90039ed1f516777534741?hhtmFrom=main"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ссылка на резюме
              </a>
</strong>
          </p>
        </div>
        <p className="footer-note">
          © 2026 Анна Борзых · Content Designer / Creative Marketing Specialist
        </p>
      </footer>
    </main>
  );
}
