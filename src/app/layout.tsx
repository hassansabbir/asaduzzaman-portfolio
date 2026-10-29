import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Md. Asadujjaman Mahfuz | UX/UI Designer Portfolio",
  description:
    "Portfolio of Md. Asadujjaman Mahfuz - UX/UI Designer crafting intuitive, human-centered digital experiences and scalable design systems.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Asadujjaman Mahfuz",
    "Portfolio",
    "Asaduzzaman Mahfuz",
    "UI/UX",
    "Web Design",
    "Mobile App Design",
    "Game Design",
    "3D",
    "Animation",
    "Graphic Design",
    "Professional Back-Office Service",
    "UI/UX Design",
    "3D Animation",
    "Graphic Design",
    "Senior UI/UX Designer",
    "Senior 3D Animation Designer",
    "Senior Graphic Designer",
    "Senior Professional Back-Office Service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
      </head>
      <body className={`antialiased`}>
        <AntdRegistry>
          <Toaster />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
