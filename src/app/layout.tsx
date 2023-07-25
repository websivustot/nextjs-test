import TheHeader from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TheFooter from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " bg-slate-900 flex h-full"}>
        <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
          <TheHeader />
          <main id="content" role="main">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <TheFooter />
        </div>
      </body>
    </html>
  );
}
