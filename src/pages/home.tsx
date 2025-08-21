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
      image: "https://images.unsplash.com/photo-1601758228041-3caa53d83420?w=400&h=300&fit=crop",
      price: "A partir de R$ 45",
      distance: "0.8 km"
    },
    {
      id: 2,
      name: "Cão & Cia",
      rating: 4.8,
      reviews: 89,
      location: "Jardim",
      services: ["Banho", "Tosa", "Veterinário"],
      image: "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=400&h=300&fit=crop",
      price: "A partir de R$ 35",
      distance: "1.2 km"
    },
    {
      id: 3,
      name: "Pet Care Express",
      rating: 4.7,
      reviews: 156,
      location: "Vila Nova",
      services: ["Banho", "Tosa", "Hospedagem"],
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop",
      price: "A partir de R$ 40",
      distance: "1.5 km"
    },
    {
      id: 4,
      name: "Amigo Fiel",
      rating: 4.6,
      reviews: 203,
      location: "Bairro",
      services: ["Banho", "Tosa", "Adestramento"],
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      price: "A partir de R$ 38",
      distance: "2.1 km"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">PetBook</h1>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">Agende cuidados para seu pet</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">Entrar</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Encontre o petshop ideal para seu pet
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agende banho, tosa, veterinário e muito mais com facilidade
          </p>
        </div>

        <SearchSection 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <RecommendedSection recommendedPetshops={recommendedPetshops} />

        <HowItWorksSection />
      </main>

      <Footer />
    </div>
  );
}