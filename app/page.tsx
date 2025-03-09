import ClientList from "@/components/ClientList/page";
import CompanyProfile from "@/components/CompanyProfile/page";
import ContactSection from "@/components/ContactSection/page";
import PresentationBanner from "@/components/PresentationBanner/page";
import Quote from "@/components/Quote/page";
import Services from "@/components/Services/page";


export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div >
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      <main >
       <PresentationBanner/>
       <div className="h-[100px] w-full bg-black"></div>       
       <CompanyProfile/>
       <div className="h-[100px] w-full bg-black"></div>       
       <Services/>
       <div className="h-[100px] w-full bg-black"></div>       
        <ClientList/>             
       <div className="h-[100px] w-full bg-[#141414]"></div>       
       <div className="h-[100px] w-full bg-[#141414]"></div>       
        <Quote/>
       <div className="h-[100px] w-full bg-[#141414]"></div>       
       <div className="h-[100px] w-full bg-[#141414]"></div>       
        <ContactSection/>
      </main>
    </div>
  );
}
