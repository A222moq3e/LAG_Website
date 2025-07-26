import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LAG",
  description: "Connecting psychological traits with gaming culture",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const currentLocale = locale || "en";
  const isRTL = currentLocale === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
