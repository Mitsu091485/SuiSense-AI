import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'SuiSense-AI',
  description: 'A Next.js application for SuiSense-AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}