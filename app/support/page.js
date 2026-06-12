export const metadata = {
  title: 'Support — Neon Logistics: City Grid',
  description: 'Support and contact for the Neon Logistics: City Grid mobile game.',
};

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
  p: { margin: '10px 0' },
  ul: { margin: '10px 0', paddingLeft: 22 },
  a: { color: '#54e0ff' },
};

export default function Support() {
  return (
    <main style={S.page}>
      <h1 style={S.h1}>Support</h1>
      <p style={S.sub}>Neon Logistics: City Grid</p>

      <h2 style={S.h2}>Contact</h2>
      <p style={S.p}>
        Questions, bug reports, or feedback — email us at{' '}
        <a style={S.a} href="mailto:arssnvsk@gmail.com">
          arssnvsk@gmail.com
        </a>
        . We usually reply within a couple of days.
      </p>

      <h2 style={S.h2}>Common questions</h2>
      <ul style={S.ul}>
        <li>
          <strong>How do I reset my progress?</strong> In-game: Menu →
          ⚠ Reset Progress (tap twice to confirm).
        </li>
        <li>
          <strong>Is my progress synced to the cloud?</strong> No — progress
          is stored locally on your device.
        </li>
        <li>
          <strong>Why don&rsquo;t rewarded ads load sometimes?</strong> Ad
          availability depends on your region and network; try again later.
        </li>
      </ul>

      <h2 style={S.h2}>Privacy</h2>
      <p style={S.p}>
        See our <a style={S.a} href="/">Privacy Policy</a>.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid #1d3a55', margin: '40px 0' }} />

      <h2 style={S.h2}>Поддержка (RU)</h2>
      <p style={S.p}>
        Вопросы, баги, предложения:{' '}
        <a style={S.a} href="mailto:arssnvsk@gmail.com">
          arssnvsk@gmail.com
        </a>
        . Сброс прогресса: в игре Меню → ⚠ Сбросить прогресс (двойное
        нажатие). Прогресс хранится локально на устройстве.
      </p>
    </main>
  );
}
