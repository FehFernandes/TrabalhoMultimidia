import { useState } from 'react';
import { Heart, Scale, WormIcon as Virus, Dumbbell } from 'lucide-react';

export default function Cuidados() {
  const [activeTab, setActiveTab] = useState('weight');

  type TabContent = {
    [key: string]: {
      icon: JSX.Element;
      title: string;
      content: string;
    };
  };

  const tabContent: TabContent = {
    weight: {
      icon: <Scale className="w-14 h-14 text-blue-500" />,
      title: 'Controle de Peso',
      content:
        'O excesso de peso é um dos principais fatores que impactam a saúde do coração, pois coloca uma carga adicional nas artérias, aumentando a pressão sanguínea e dificultando o trabalho do órgão. Essa sobrecarga pode levar ao desenvolvimento de hipertensão, aumento dos níveis de colesterol e maior predisposição a doenças cardiovasculares, como infarto e insuficiência cardíaca. ',
    },
    exercise: {
      icon: <Dumbbell className="w-14 h-14 text-green-500" />,
      title: 'Exercícios Físicos',
      content:
        'Dois estudos renomados, o InterHeart e InterStroke, que analisaram mais de 30 mil indivíduos em 52 países para avaliar os fatores de risco de ataques cardíacos e derrames trouxeram resultados claros: 90% dos riscos relacionados a esses problemas podem ser evitados por meio de ações preventivas, como a prática regular de atividade física e a adoção de hábitos alimentares saudáveis.',
    },
    pandemic: {
      icon: <Virus className="w-14 h-14 text-red-500" />,
      title: 'Desafios da Pandemia',
      content:
        'A pandemia de COVID-19 trouxe uma série de desafios para a saúde cardiovascular, exacerbando condições pré-existentes e criando novas preocupações. Especialistas ressaltam que, além do impacto direto do vírus sobre o sistema cardiovascular, a pandemia agravou problemas como hipertensão, diabetes e obesidade, fatores de risco bem conhecidos para doenças cardíacas.',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-200 pt-32 p-20 ">
        <div>
          <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-md">
            Cuidados com a saúde e exercícios físicos
          </h1>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Navegação */}
            <div className="flex border-b">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-4 px-6 text-lg font-semibold focus:outline-none transition-colors duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Conteúdo */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                {tabContent[activeTab].icon}
                <h2 className="text-2xl font-extrabold ml-4 text-gray-800">
                  {tabContent[activeTab].title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">
                {tabContent[activeTab].content}
              </p>
            </div>
          </div>
        </div>

        {/* Seção adicional */}
        <div className="mt-12 bg-gradient-to-r from-pink-100 to-red-200 rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-14 h-14 text-red-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">
              Cuide do seu coração
            </h2>
          </div>
          <p className="text-center text-gray-700 leading-relaxed">
            Lembre-se: a prevenção é a melhor forma de cuidar da saúde do seu
            coração. Mantenha uma dieta equilibrada, pratique exercícios
            regularmente e faça check-ups periódicos com seu médico.
          </p>
        </div>
      </div>
    );
}
