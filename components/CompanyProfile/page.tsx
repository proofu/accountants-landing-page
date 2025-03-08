import Image from "next/image";

const CompanyProfile = () => {
  return (
    <div className="flex items-center  bg-black text-white p-10">
      <div className="w-1/2">
        <Image 
          src="/building.png" 
          alt="Company Building" 
          width={600} 
          height={400} 
          className="object-cover"
        />
      </div>      
      <div className="w-1/2 pl-10">
        <h2 className="text-7xl font-bold">Perfil de la empresa</h2>
        <p className="mt-4 text-lg">
          Fundada en 1992, Contabilidad Surcos es una firma de servicio completo que ofrece soluciones de contabilidad asequibles para particulares y empresas locales e internacionales.
        </p>
        <button className="mt-6 bg-gray-600 text-white py-2 px-4 rounded flex items-center">
          Saber más <span className="ml-2">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
