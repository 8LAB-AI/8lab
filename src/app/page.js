import Image from "next/image";
import Home from "@/components/Home";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Learn from "@/components/Learn";
import Apply from "@/components/Apply";
import About from "@/components/About";
import Head from "next/head";
import CRTEffect from "@/components/Overlay";

export default function App() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            <style>{`
            `}</style>
      </Head>
      
      <main className="relative text-white font-andalemo">
      <CRTEffect></CRTEffect>
      {/* <Header/> */}
      <Home/>
      <Info/>
      <About/>
      <Apply/>

    </main>
    
    </>
    
  );
}
