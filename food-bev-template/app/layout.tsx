import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Grim Grounds Coffee',
  description: 'Gothic coffee house landing page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <a
          className="site-quote-popup"
          href="https://www.codecompas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to go back to the www.CodeCompas.com website and request a quote
        </a>
      </body>
    </html>
  );
}