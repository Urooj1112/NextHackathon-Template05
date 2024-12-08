import Image from "next/image";
import Footer from "@/components/Footer1";
import SecondHeader from "@/components/SecondHeader";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Lodo";
import BestProduct from "@/components/BestProducts.tsx";
import FloatingPage from "@/components/FloatingPage";
export default function Home() {
  return (
    <div>
   <NavBar/>
    <SecondHeader/>
    <FloatingPage/>
    <BestProduct/>
    <Logo/>
 
    
    <Footer/>
    </div>
  );
}
