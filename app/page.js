const S = {
  page: {
    maxWidth: 760,
    margin: '0 auto',
    padding: '48px 24px 80px',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: '#d6e6f5',
    lineHeight: 1.65,
  },
  h1: { color: '#00f5ff', fontSize: 28, marginBottom: 4 },
  sub: { color: '#7fa6c2', fontSize: 14, marginBottom: 36 },
  h2: { color: '#00f5ff', fontSize: 20, marginTop: 36, marginBottom: 10 },
  h3: { color: '#c084fc', fontSize: 16, marginTop: 24, marginBottom: 8 },
  p: { margin: '10px 0' },
  ul: { margin: '10px 0', paddingLeft: 22 },
  a: { color: '#54e0ff' },
  divider: { border: 'none', borderTop: '1px solid #1d3a55', margin: '56px 0' },
};

export default function PrivacyPolicy() {
  return (
    <main style={S.page}>
      {/* ─────────────────────────── ENGLISH ─────────────────────────── */}
      <h1 style={S.h1}>Privacy Policy</h1>
      <p style={S.sub}>
        Neon Logistics: City Grid · Effective date: June 12, 2026
      </p>

      <p style={S.p}>
        This privacy policy describes how the mobile game{' '}
        <strong>Neon Logistics: City Grid</strong> (&ldquo;the App&rdquo;),
        developed by Artem Sosnovsky (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
        handles information when you use the App.
      </p>

      <h2 style={S.h2}>What we collect</h2>
      <p style={S.p}>
        The App does not require an account and does not ask for your name,
        email address, or any other personal details. Your game progress is
        stored locally on your device only.
      </p>
      <p style={S.p}>
        The App uses two third-party services provided by Google LLC, which
        collect limited data automatically:
      </p>

      <h3 style={S.h3}>Google AdMob (advertising)</h3>
      <ul style={S.ul}>
        <li>
          Device identifiers for advertising (IDFA — only if you allow
          tracking via the iOS App Tracking Transparency prompt), IP address,
          and ad interaction data (impressions, clicks, rewarded-video
          completions).
        </li>
        <li>
          If you decline the tracking prompt, ads are still shown but are
          non-personalized.
        </li>
        <li>
          See{' '}
          <a style={S.a} href="https://policies.google.com/privacy">
            Google&rsquo;s Privacy Policy
          </a>{' '}
          and{' '}
          <a
            style={S.a}
            href="https://support.google.com/admob/answer/6128543"
          >
            how Google uses advertising data
          </a>
          .
        </li>
      </ul>

      <h3 style={S.h3}>Google Firebase Analytics (usage analytics)</h3>
      <ul style={S.ul}>
        <li>
          Anonymous usage data: app opens, session length, gameplay progress
          events (for example, reaching a goal tier or completing the
          tutorial), device model, OS version, and country derived from IP
          address.
        </li>
        <li>
          This data is aggregated and used solely to understand how the game
          is played and to improve it. It is not used to identify you.
        </li>
        <li>
          See{' '}
          <a
            style={S.a}
            href="https://firebase.google.com/support/privacy"
          >
            Firebase Privacy and Security
          </a>
          .
        </li>
      </ul>

      <h2 style={S.h2}>How the data is used</h2>
      <ul style={S.ul}>
        <li>To show ads that fund the free game (AdMob).</li>
        <li>To measure aggregate gameplay and improve game balance (Firebase).</li>
        <li>We do not sell your data and we do not collect it ourselves — it is processed by Google under their policies.</li>
      </ul>

      <h2 style={S.h2}>Your choices</h2>
      <ul style={S.ul}>
        <li>
          <strong>Tracking:</strong> you can allow or deny tracking when iOS
          shows the App Tracking Transparency prompt, and change it any time
          in iOS Settings → Privacy &amp; Security → Tracking.
        </li>
        <li>
          <strong>Personalized ads:</strong> manage at{' '}
          <a style={S.a} href="https://adssettings.google.com">
            Google Ads Settings
          </a>
          .
        </li>
        <li>
          <strong>Local data:</strong> game progress can be erased at any time
          via the in-game Settings → Reset Progress, or by deleting the App.
        </li>
      </ul>

      <h2 style={S.h2}>Children</h2>
      <p style={S.p}>
        The App is not directed at children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2 style={S.h2}>Changes</h2>
      <p style={S.p}>
        If this policy changes, the updated version will be published at this
        URL with a new effective date.
      </p>

      <h2 style={S.h2}>Contact</h2>
      <p style={S.p}>
        Questions about this policy: <strong>arssnvsk@gmail.com</strong>
      </p>

      <hr style={S.divider} />

      {/* ─────────────────────────── РУССКИЙ ─────────────────────────── */}
      <h1 style={S.h1}>Политика конфиденциальности</h1>
      <p style={S.sub}>
        Neon Logistics: City Grid · Дата вступления в силу: 12 июня 2026
      </p>

      <p style={S.p}>
        Эта политика описывает, как мобильная игра{' '}
        <strong>Neon Logistics: City Grid</strong> («Приложение»),
        разработанная Артёмом Сосновским («мы»), обращается с информацией при
        использовании Приложения.
      </p>

      <h2 style={S.h2}>Что мы собираем</h2>
      <p style={S.p}>
        Приложению не нужен аккаунт: мы не запрашиваем имя, почту или другие
        личные данные. Игровой прогресс хранится только локально на вашем
        устройстве.
      </p>
      <p style={S.p}>
        Приложение использует два сторонних сервиса Google LLC, которые
        автоматически собирают ограниченные данные:
      </p>

      <h3 style={S.h3}>Google AdMob (реклама)</h3>
      <ul style={S.ul}>
        <li>
          Рекламные идентификаторы устройства (IDFA — только если вы разрешили
          отслеживание в системном диалоге iOS), IP-адрес и данные о
          взаимодействии с рекламой (показы, клики, досмотры роликов).
        </li>
        <li>
          Если вы отклонили запрос на отслеживание, реклама показывается, но
          без персонализации.
        </li>
        <li>
          См.{' '}
          <a style={S.a} href="https://policies.google.com/privacy">
            Политику конфиденциальности Google
          </a>
          .
        </li>
      </ul>

      <h3 style={S.h3}>Google Firebase Analytics (аналитика)</h3>
      <ul style={S.ul}>
        <li>
          Анонимные данные об использовании: запуски, длительность сессий,
          игровые события (например, достижение цели или завершение
          обучения), модель устройства, версия ОС, страна по IP-адресу.
        </li>
        <li>
          Данные агрегированы и используются только для улучшения игры; они
          не позволяют идентифицировать вас.
        </li>
      </ul>

      <h2 style={S.h2}>Ваш выбор</h2>
      <ul style={S.ul}>
        <li>
          <strong>Отслеживание:</strong> управляется в системном диалоге iOS и
          в Настройках iOS → Конфиденциальность и безопасность → Отслеживание.
        </li>
        <li>
          <strong>Локальные данные:</strong> прогресс можно стереть в игре
          (Настройки → Сбросить прогресс) или удалив Приложение.
        </li>
      </ul>

      <h2 style={S.h2}>Дети</h2>
      <p style={S.p}>
        Приложение не предназначено для детей младше 13 лет; мы сознательно не
        собираем их личные данные.
      </p>

      <h2 style={S.h2}>Контакт</h2>
      <p style={S.p}>
        Вопросы по политике: <strong>arssnvsk@gmail.com</strong>
      </p>
    </main>
  );
}
