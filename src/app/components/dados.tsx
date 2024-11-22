import { Heart, Activity, AlertCircle, Shield } from 'lucide-react'

export default function Dados() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-purple-900">Dados Importantes sobre Saúde Cardíaca</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Frequência cardíaca média</h2>
            </div>
            <p className="text-gray-600">O coração de um adulto bate entre 60 e 100 vezes por minuto, dependendo da atividade e do estado de saúde.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Volume de sangue bombeado</h2>
            </div>
            <p className="text-gray-600">Um coração saudável bombeia aproximadamente 5 a 6 litros de sangue por minuto.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Doenças cardiovasculares</h2>
            </div>
            <p className="text-gray-600">São a principal causa de morte no mundo, responsáveis por cerca de 17,9 milhões de mortes por ano, segundo a OMS.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Prevenção</h2>
            </div>
            <p className="text-gray-600">Exercícios regulares, dieta saudável e evitar o tabagismo podem reduzir significativamente o risco de doenças cardíacas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

