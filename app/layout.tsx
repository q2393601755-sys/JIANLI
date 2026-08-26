import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundMusic from "@/components/layout/BackgroundMusic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "章程 CHENG ZHANG | AI视觉创作者",
    template: "%s | 章程 CHENG ZHANG",
  },
  description:
    "章程（CHENG ZHANG）AI视觉创作者作品集 — AI短片、商业视觉、AI工作流。从建筑空间设计到AI驱动的内容创作。",
  keywords: [
    "章程",
    "CHENG ZHANG",
    "AI视觉创作者",
    "AI Visual Creator",
    "AIGC",
    "AI视频创作",
    "AI内容创作",
    "新媒体运营",
    "AI Agent",
    "AI Video Creator",
    "Content Strategy",
  ],
  authors: [{ name: "章程 CHENG ZHANG" }],
  creator: "章程 CHENG ZHANG",
  metadataBase: new URL("https://chengzhang.art"),
  openGraph: {
    title: "章程 CHENG ZHANG | AI视觉创作者",
    description:
      "从建筑空间设计到AI驱动的内容创作 — AI视觉创作者作品集",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    siteName: "章程 CHENG ZHANG",
    images: [{ url: "/images/og/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "章程 CHENG ZHANG | AI视觉创作者",
    images: ["/images/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const langScript = `
(function() {
  try {
    var lang = localStorage.getItem('lang');
    if (lang === 'en') {
      document.documentElement.lang = 'en';
    } else {
      document.documentElement.lang = 'zh-CN';
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSC.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="bg-ink text-snow font-body antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackgroundMusic />
        </LanguageProvider>
      </body>
    </html>
  );
}
