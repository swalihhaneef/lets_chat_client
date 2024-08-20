import { Inter } from "next/font/google";
// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import "@/styles/commonStyles.css"
import "@/styles/HomeStyle.css"
import "@/styles/bootstrap.css"
import "@/styles/bootstrap.min.css"
import "@/styles/icons.min-1.css"
import "@/styles/glightbox.min-1.css"
import "@/styles/bootstrap.min2.css"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
