import { useState } from "react";
import { SearchSection } from "../components/home/SearchSection";
import { RecommendedSection } from "../components/home/RecommendedSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { Footer } from "../components/home/Footer";
import type { Petshop } from "../types/petshop";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const recommendedPetshops: Petshop[] = [
    {
      id: 1,
      name: "Pet Spa Premium",
      rating: 4.9,
      reviews: 127,
      location: "Centro",
      services: ["Banho", "Tosa", "Spa"],
      image:
        "https://images.unsplash.com/photo-1601758228041-3caa53d83420?w=400&h=300&fit=crop",
      price: "A partir de R$ 45",
      distance: "0.8 km",
    },
    {
      id: 2,
      name: "Cão & Cia",
      rating: 4.8,
      reviews: 89,
      location: "Jardim",
      services: ["Banho", "Tosa", "Veterinário"],
      image:
        "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=400&h=300&fit=crop",
      price: "A partir de R$ 35",
      distance: "1.2 km",
    },
    {
      id: 3,
      name: "Pet Care Express",
      rating: 4.7,
      reviews: 156,
      location: "Vila Nova",
      services: ["Banho", "Tosa", "Hospedagem"],
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop",
      price: "A partir de R$ 40",
      distance: "1.5 km",
    },
    {
      id: 4,
      name: "Amigo Fiel",
      rating: 4.6,
      reviews: 203,
      location: "Bairro",
      services: ["Banho", "Tosa", "Adestramento"],
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      price: "A partir de R$ 38",
      distance: "2.1 km",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header amarelo */}
      <header  className="flex justify-between items-center px-8 py-4 bg-yellow-400">
  <h1 className="text-xl font-bold">
    <span className="text-white">Pet</span>
    <span className="text-black">Grooming</span>
  </h1>
        <nav className="flex gap-6 text-sm text-gray-800 font-medium">
          <a href="#">Para Empresas</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
        <div className="flex gap-3">
          <button className="text-gray-700 font-medium">Login</button>
          <button className="bg-white text-yellow-500 font-bold px-4 py-1 rounded-full">
            Cadastre-se
          </button>
        </div>
      </header>

      {/* Hero cinza escuro + barra de pesquisa do código original */}
      <section className="bg-gray-700 text-center text-white py-14 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Encontre os melhores serviços para o seu pet
        </h2>
        <p className="text-lg mb-8">
          Descubra, compare e agende banho, tosa e outros cuidados com os
          melhores profissionais da sua região.
        </p>

        {/* Mantendo seu SearchSection original */}
        <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </section>

      {/* Seções */}
      <main className="container mx-auto px-4 py-12">
        <RecommendedSection recommendedPetshops={recommendedPetshops} />
        <HowItWorksSection />
      </main>

      <Footer />
    </div>
  );
}