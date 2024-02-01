import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Nav from "./component/nav";

export const metadata = {
  title: "Archie Lai",
  description: "Archie Lai's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="content">
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>{children}</AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
