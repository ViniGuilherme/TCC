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

        <input
          type="text"
          placeholder="Buscar petshop, serviço ou localização..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
        />

        <button  className="bg-yellow-500 text-white font-semibold px-8 py-2 rounded-full hover:bg-yellow-600 transition ml-2">
          Buscar
        </button>
      </div>
    </div>
  );
}