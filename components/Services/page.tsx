
import Image from "next/image";

type Service = {
  id:number
  title:string,
  description:string
}
const services: Service[] = [
  {
    id: 1,
    title: "Borrador de la renta",
    description: "Te hacemos la declaración de la renta"
    },
  {id: 2,title: "Paquete de inicio",
    description: "Construimos modelos financieros para presentar a los inversores"
    },
  {id: 3,title: "Gestión de patrimonio",
    description: "Proporcionamos servicios de asesoramiento de inversión bien pensados"
    }
]

const Services = () => {
  return (
    <div className="bg-black text-white flex justify-center">
      {/* Main Container with Max Width */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row  gap-50 px-6">
      {/* <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-50 px-6"> */}
        
        {/* Left Section: Title & Image (40%) */}
        <div className="md:w-2/5 w-full text-left">
          <h2 className="text-5xl font-bold leading-tight">
            Nuestros <br /> servicios
          </h2>
          <div className="mt-4">
            <Image
              src="/pen.png"
              alt="Pen on Paper"
              width={500}  
              height={300} // Increased height
              className="rounded-lg w-full max-w-lg"
            />
          </div>
          
        </div>

        {/* Right Section: Services List (60%) */}
        <div className="md:w-3/5 w-full flex flex-col gap-12 ">
        {services.map((service,index) => (
          <div key={index} className="relative group">
          <h3 className="text-gray-400 text-3xl font-semibold">
          {service.id < 10 ? `0${service.id}` : service.id} <span className="text-white">{service.title}</span>
          </h3>
          <p className="text-gray-300 text-sm">
            {service.description}
          </p>
        </div>          
        ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
