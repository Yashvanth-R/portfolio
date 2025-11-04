import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Portfolio By Yashvanth",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={jetbrainsMono.variable}>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Analytics />
        </body>
    </html>
  );
}
