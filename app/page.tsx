import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#004AAD]">GMSA Imobiliária</h1>
      <p className="text-center text-lg mb-10">Confira nossos empreendimentos em Diadema</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { nome: "D'mais", imagem: "/imoveis/dmais.jpg" },
          { nome: "Elleva", imagem: "/imoveis/elleva.jpg" },
          { nome: "Green Park", imagem: "/imoveis/greenpark.jpg" },
          { nome: "Palazzo", imagem: "/imoveis/palazzo.jpg" },
          { nome: "Topázio", imagem: "/imoveis/topazio.jpg" },
          { nome: "Unik", imagem: "/imoveis/unik.jpg" },
          { nome: "Vivere", imagem: "/imoveis/vivere.jpg" },
        ].map((imovel, index) => (
          <div key={index} className="border rounded-xl shadow-md overflow-hidden">
            <Image
              src={imovel.imagem}
              alt={imovel.nome}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{imovel.nome}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
