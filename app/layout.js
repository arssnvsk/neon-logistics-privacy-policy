export const metadata = {
  title: 'Privacy Policy — Neon Logistics: City Grid',
  description: 'Privacy policy for the Neon Logistics: City Grid mobile game.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#060c18' }}>{children}</body>
    </html>
  );
}
