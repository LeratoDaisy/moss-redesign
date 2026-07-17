import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Moss & Associates Attorneys",
  description:
    "Professional legal representation in Road Accident Fund, Medical Negligence and Personal Injury matters.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}