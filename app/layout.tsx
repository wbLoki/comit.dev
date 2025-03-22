import Script from "next/script";
import "../styles/globals.css";
import Providers from "./Providers";
export const metadata = {
  title: "Comit",

  description:
    "An AI-powered tool for generating meaningful commit messages and providing coding assistance",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="dark" lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SXB4QC7DBJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SXB4QC7DBJ');
          `}
        </Script>
      </head>
      <body className="dark:bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
