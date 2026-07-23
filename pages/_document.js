import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/appicondating.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased bg-[#0E0F1E] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
