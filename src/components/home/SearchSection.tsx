import { Search } from "lucide-react";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export function SearchSection({ searchQuery, setSearchQuery }: SearchSectionProps) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden">
        {/* Ícone de lupa */}
        <div className="pl-4 text-gray-400">
          <Search size={20} />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Buscar petshop, serviço ou localização..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
        />

        {/* Botão */}
        <button className="text-white bg-yellow-500 px-6 py-3 font-medium hover:bg-yellow-700 transition rounded-full">
          Buscar
        </button>
      </div>
    </div>
  );
}