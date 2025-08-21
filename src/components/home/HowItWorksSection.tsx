import { Search, MapPin, Calendar, Heart } from "lucide-react";

export function HowItWorksSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Como funciona?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Busque o serviço</h4>
          <p className="text-gray-600 text-sm">Digite o que você precisa para seu pet</p>
        </div>

        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Escolha o local</h4>
          <p className="text-gray-600 text-sm">Selecione o petshop mais próximo</p>
        </div>

        <div className="text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Agende o horário</h4>
          <p className="text-gray-600 text-sm">Escolha o dia e horário ideal</p>
        </div>

        <div className="text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-orange-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Pronto!</h4>
          <p className="text-gray-600 text-sm">Seu pet receberá os melhores cuidados</p>
        </div>
      </div>
    </div>
  );
}
