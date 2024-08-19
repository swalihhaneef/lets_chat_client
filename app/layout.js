import { Inter } from "next/font/google";
// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import "@/styles/commonStyles.css"
import "@/styles/HomeStyle.css"
import "@/styles/bootstrap.css"
import "@/styles/bootstrap.min.css"
import "@/styles/icons.min-1.css"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-XXXXX"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
