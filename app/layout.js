import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const poppins = Poppins({ 
  weight: '400',
  subsets: ["latin"], 
});

export const metadata = {
  title: "Curso gratis",
  description: "Disponible para todos curso gratis de inglés basico, no importa tu nivel de inglés enlistate ahora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
