import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="id, en" className={`${inter.variable} ${poppins.variable}`}>
      {children}
    </html>
  );
};

export default RootLayout;
