import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Asadujjaman Mahfuz Portfolio",
  description: "Asadujjaman Mahfuz Portfolio",
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
      <body className={`antialiased`}>
        <AntdRegistry>
          <Toaster />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
