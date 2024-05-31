import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andrew Brewer',
  description: 'Full Stack Software Engineer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className + ' flex flex-col items-center justify-between'
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
