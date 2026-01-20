import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import { ThemeProviders } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site-config";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  keywords: [
    "website redesign",
    "conversion focused web design",
    "service business website",
    "premium web agency",
    "nextjs redesign",
  ],
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    type: "website",
    url: "http://localhost:3000",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
