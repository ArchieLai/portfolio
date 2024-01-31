import "./globals.css";
import Link from "next/link";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata = {
  title: "Archie Lai",
  description: "Archie Lai's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="menu">
          <Link className="logo" href="/">AL</Link>
          <div className="link-container" >
            <Link className="link" href="/about">About</Link>
            <Link className="link" href="/works">Works</Link>
          </div>
        </div>
        <div className="content">
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>{children}</AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
