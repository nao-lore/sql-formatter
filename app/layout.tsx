import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "SQL Formatter - Format & Beautify SQL Online | sql-formatter",
  description:
    "Free online SQL formatter and beautifier. Format, indent, and syntax-highlight your SQL queries instantly. Supports SELECT, INSERT, UPDATE, DELETE, and more.",
  keywords: [
    "sql formatter",
    "sql beautifier",
    "format sql online",
    "sql pretty print",
    "sql indent",
    "sql formatting tool",
  ],
  authors: [{ name: "sql-formatter" }],
  openGraph: {
    title: "SQL Formatter - Format & Beautify SQL Online",
    description:
      "Free online SQL formatter. Beautify, indent, and syntax-highlight SQL queries instantly.",
    url: "https://sql-formatter.vercel.app",
    siteName: "sql-formatter",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Formatter - Format & Beautify SQL Online",
    description:
      "Free online SQL formatter. Beautify, indent, and syntax-highlight SQL queries instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sql-formatter.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "SQL Formatter",
              description:
                "Free online SQL formatter and beautifier. Format, indent, and syntax-highlight your SQL queries instantly.",
              url: "https://sql-formatter.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "SQL formatting and beautification",
                "Syntax highlighting",
                "Keyword case conversion",
                "Configurable indentation",
                "SQL minification",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
