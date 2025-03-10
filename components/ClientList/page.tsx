import Image from "next/image";

type Client = {
  name: string;
  image: string;
};

const clients: Client[] = [
  {
    name: "Belden Banco Ltd.",
    image: "/belden-banco.png",
  },
  {
    name: "Digital Miguel",
    image: "/miguel-dig.png",
  },
  {
    name: "Valores Perle",
    image: "/valores-perle.png",
  },
];

const ClientList = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-left">

        
        <h2 className="text-4xl font-bold">Lista de clientes</h2>
        <p className="text-gray-600 mt-4 max-w-2xl ">
          Desde que empezamos, hemos prestado un servicio de confianza a
          nuestros clientes. Hemos tenido el honor de ser la empresa elegida por
          las siguientes sociedades:
        </p>

        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="relative group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-black text-white text-lg font-semibold p-3 text-center">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientList;
