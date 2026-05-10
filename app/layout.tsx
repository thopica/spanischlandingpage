import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const META_PIXEL_ID = "838735575945300";
const SITE_URL = "https://onlinespanischlernen.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Spanisch lernen Zürich | Spanisch online lernen (Schweiz) | Cristina",
  description:
    "Spanisch lernen in Zürich oder Spanisch online lernen in der Schweiz: 1:1 Privatunterricht mit Muttersprachlerin Cristina. Flexibel, persönlich, CHF 60/Lektion. Erste Probestunde gratis.",
  keywords: [
    "Spanisch lernen Zürich",
    "Spanisch online lernen",
    "Online Spanisch lernen Schweiz",
    "Spanisch online lernen Schweiz",
    "Spanischkurs online Schweiz",
    "Privatunterricht Spanisch",
    "Spanisch Muttersprachlerin",
    "SVEB Spanisch",
    "Spanisch Einzelunterricht",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Spanisch lernen Zürich & Spanisch online lernen Schweiz",
    description:
      "1:1 Privatunterricht in Zürich und online in der ganzen Schweiz. Flexibel, persönlich, CHF 60/Lektion. Erste Lektion gratis.",
    url: SITE_URL,
    siteName: "Spanisch mit Cristina",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cristina gibt Spanischunterricht, persönliche Lehrerin in Zürich und online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanisch lernen Zürich & Spanisch online lernen Schweiz",
    description:
      "1:1 Privatunterricht in Zürich und online in der ganzen Schweiz. Flexibel, persönlich, CHF 60/Lektion.",
    images: ["/images/og-image.jpg"],
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
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
