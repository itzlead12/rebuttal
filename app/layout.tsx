import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rebuttal — Win the disputes you should win.",
  description:
    "Rebuttal is an AI dispute copilot that helps PayPal sellers gather evidence, evaluate disputes, draft responses and recover revenue.",
  keywords: [
    "PayPal disputes",
    "dispute management",
    "chargeback recovery",
    "e-commerce protection",
    "fintech SaaS",
    "seller defense copilot",
    "PayPal Seller Protection",
  ],
  authors: [{ name: "Rebuttal" }],
  creator: "Rebuttal",
  publisher: "Rebuttal",
  metadataBase: new URL("https://rebuttal.onrender.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Rebuttal — Win the disputes you should win.",
    description:
      "Rebuttal gathers your evidence, evaluates your case, drafts the response, and helps you submit it — so you can spend less time fighting disputes and more time running your business.",
    url: "https://rebuttal.onrender.com",
    siteName: "Rebuttal",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rebuttal - AI Dispute Copilot for PayPal Sellers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebuttal — Win the disputes you should win.",
    description:
      "AI dispute copilot for PayPal sellers. Gather evidence, evaluate likelihood, draft responses, and retain revenue.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FAFAFC] dark:bg-[#0A0B14] text-[#0F1020] dark:text-[#F8FAFC] min-h-screen flex flex-col selection:bg-[#F3EEFF] dark:selection:bg-violet-950 selection:text-[#6D28D9] dark:selection:text-violet-300 transition-colors">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
