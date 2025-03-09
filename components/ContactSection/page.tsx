import Image from "next/image";

type Contact = {
    name:string,
    details:string
}

const contacts: Contact[] = [
  {
    name: "Dirección",
    details: "Calle Barcelona, 1, 28049 Lérida",
  },
  {
    name: "Teléfono",
    details: "923 456 789",
  },
  {
    name: "Correo electrónico",
    details: "hola@unsitiogenial.es",
  },
];

export default function ContactSection() {
  return (
    <div className="bg-[#141414] text-white px-10 py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Text + Image */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Trabajemos juntos.</h2>
          <Image
            src="/trabajemos.png" // Make sure to put the image in /public
            alt="Handshake"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right: Contact Info */}
        <div className="md:w-1/2 md:pl-12 mt-10 md:mt-0 pt-28">
        {contacts.map((contact,index) => (  
             <div key={index} className="mb-6"> 
             <h3 className="text-lg font-semibold text-gray-400">{contact.name}</h3>
             <p className="text-lg">{contact.details}</p>
           </div>      
        )                 
        )}
        </div>
      </div>
    </div>
  );
}
