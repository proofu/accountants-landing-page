
// import Image from "next/image";

// const Services = () => {
//   return (
//     <div className="bg-black">
//     {/* <div className="flex flex-col md:flex-row place-items-start  bg-black text-white px-10 w-2/3 mx-auto "> */}
//     <div className="flex size-full place-items-center  bg-black text-white px-10 ">

//       {/* Space between sections */}
//       {/* <div className="w-full h-[6px] md:w-50 md:h-auto"></div> */}

//       {/* Left Section: Title & Image */}
//       <div className=" text-left">
//         <h2 className="text-4xl font-bold leading-tight">
//           Nuestros <br /> servicios
//         </h2>
//         <div className="mt-2">
//           <Image
//             src="/pen.png"
//             alt="Pen on Paper"
//             width={400}
//             height={200}
//             className="rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Space between sections */}
//       <div className="w-full h-[6px] md:w-30 md:h-auto"></div>

//       {/* Right Section: Services List (Aligned to the right) */}
//       <div className="w-2/3 flex flex-col gap-12 text-left">
//         <div>
//           <h3 className="text-gray-400 text-3xl font-semibold">
//             01 <span className="text-white">Borrador de la renta</span>
//           </h3>
//           <p className="text-gray-300 text-sm">
//             Te hacemos la declaración de la renta
//           </p>
//         </div>
//         <div>
//           <h3 className="text-gray-400 text-3xl font-semibold">
//             02 <span className="text-white">Paquete de inicio</span>
//           </h3>
//           <p className="text-gray-300 text-sm">
//             Construimos modelos financieros para presentar a los inversores
//           </p>
//         </div>
//         <div>
//           <h3 className="text-gray-400 text-3xl font-semibold">
//             03 <span className="text-white">Gestión de patrimonio</span>
//           </h3>
//           <p className="text-gray-300 text-sm">
//             Proporcionamos servicios de asesoramiento de inversión bien pensados
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Services;


import Image from "next/image";

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
          <div>
            <h3 className="text-gray-400 text-3xl font-semibold">
              01 <span className="text-white">Borrador de la renta</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Te hacemos la declaración de la renta
            </p>
          </div>
          <div>
            <h3 className="text-gray-400 text-3xl font-semibold">
              02 <span className="text-white">Paquete de inicio</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Construimos modelos financieros para presentar a los inversores
            </p>
          </div>
          <div>
            <h3 className="text-gray-400 text-3xl font-semibold">
              03 <span className="text-white">Gestión de patrimonio</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Proporcionamos servicios de asesoramiento de inversión bien pensados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
