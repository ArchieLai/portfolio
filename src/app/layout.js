import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Archie Lai",
  description: "Archie Lai's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="menu">
          <div className="logo">AL</div>
          <div className="link-container" >
            <Link className="link" href="/about">About</Link>
            <Link className="link" href="/">Works</Link>
          </div>
        </div>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
