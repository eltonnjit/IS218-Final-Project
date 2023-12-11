import Firstsection from "@/components/layout/Firstsection";
import Footer from "@/components/layout/Footer";
import Secondsection from "@/components/layout/Secondsection";
import Thirdsection from "@/components/layout/Thirdsection";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const email = event.target.email.value;
    const email = "ahn8@njit.edu"
  
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
   console.log("This is mailchimp===>",response);
  };
  useEffect(()=>{
    handleSubmit();
  },[])
 

  
  return (
    <>
      {/* <Header /> */}
      <Head>
        <title>Baller Beasts!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Footer />
    </>
  );
}
