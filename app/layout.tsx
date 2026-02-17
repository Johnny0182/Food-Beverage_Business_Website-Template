import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grim Grounds Coffee',
  description: 'Premium gothic coffee shop single-page template for Grim Grounds Coffee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#f3f1ed] antialiased">{children}</body>
    </html>
  );
}
