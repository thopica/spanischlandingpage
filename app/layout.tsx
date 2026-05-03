import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const META_PIXEL_ID = "838735575945300";
const SITE_URL = "https://onlinespanischlernen.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Spanisch lernen in Zürich & online — Privatunterricht mit Muttersprachlerin Cristina",
  description:
    "Persönlicher Spanischunterricht mit Cristina, ausgebildete Muttersprachlerin aus Ecuador. 60 Minuten pro Lektion, flexibel online aus der ganzen Schweiz oder vor Ort in Zürich. Erste Probelektion gratis.",
  keywords: [
    "Spanisch lernen Zürich",
    "Spanischkurs online Schweiz",
    "Privatunterricht Spanisch",
    "Spanisch Muttersprachlerin",
    "SVEB Spanisch",
    "Spanisch Einzelunterricht",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Spanisch lernen mit Cristina — online & in Zürich",
    description:
      "Persönlich, flexibel, mit Freude. 60 Min pro Lektion. Erste Lektion gratis.",
    url: SITE_URL,
    siteName: "Spanisch mit Cristina",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/cristina.jpg",
        width: 1280,
        height: 800,
        alt: "Cristina – Spanisch-Lehrerin und Muttersprachlerin aus Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanisch lernen mit Cristina — online & in Zürich",
    description: "Persönlich, flexibel, mit Freude. Erste Lektion gratis.",
    images: ["/images/cristina.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBF7F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
