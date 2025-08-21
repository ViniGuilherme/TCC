import { Search } from "lucide-react";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchSection({ searchQuery, setSearchQuery }: SearchSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            O que você precisa?
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por serviço ou petshop..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Agendar
        </button>
      </div>
    </div>
  );
}
