import Image from "next/image";
import "@fontsource/aileron";


const AccountingBanner = () => {
  return (
    <div className="relative w-screen h-[600px] flex items-center justify-start bg-black text-white overflow-hidden font-aileron pl-20">
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/calculator.png" 
          alt="Accounting Banner" 
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative text-left z-10"> 
      <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={50} 
          height={50} 
          className=" mb-40"
        />       
        <h1 className="text-7xl font-bold">Contables</h1>
        <h1 className="text-7xl font-bold">La Calculadora</h1>
        <p className="text-lg mt-2">Experiencia. Compromiso. Valor.</p>
      </div>
    </div>
  );
};

export default AccountingBanner;
