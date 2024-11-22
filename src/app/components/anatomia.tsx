import { FaHeartbeat } from "react-icons/fa";

export default function Anatomia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-200 pt-16 pb-10 sm:p-5 sm:pt-16 sm:pb-5 ">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-indigo-800 mb-8 sm:mb-12 drop-shadow-lg">
          <FaHeartbeat className="inline-block text-pink-600 mb-2" size={40} />{" "}
          Anatomia do coração
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card: Coração */}
          <div className="lg:w-1/3 bg-white rounded-xl shadow-xl overflow-hidden transition-transform">
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-pink-600 mb-4">
                O Coração
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O coração humano é composto por quatro câmaras: dois átrios
                (superiores) e dois ventrículos (inferiores). Ele está situado
                na cavidade torácica, entre os pulmões, e é responsável pelo
                bombeamento contínuo de sangue para o corpo.
              </p>
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Principais estruturas:
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <span className="font-medium text-indigo-600">
                    Átrio direito e esquerdo:
                  </span>{" "}
                  Recebem o sangue do corpo e dos pulmões.
                </li>
                <li>
                  <span className="font-medium text-indigo-600">
                    Ventrículo direito e esquerdo:
                  </span>{" "}
                  Bombeiam o sangue para os pulmões e para o resto do corpo.
                </li>
                <li>
                  <span className="font-medium text-indigo-600">
                    Válvulas cardíacas:
                  </span>{" "}
                  Asseguram que o sangue flua em uma única direção.
                </li>
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                O funcionamento do coração é coordenado por impulsos elétricos
                que mantêm o ritmo adequado de batimentos.
              </p>
            </div>
          </div>

          {/* Card: Modelo 3D */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition-transform">
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-pink-600">
                Modelo 3D do coração
              </h2>
            </div>
            <div className="flex-grow p-6">
              <iframe
                title="3D Animated Realistic Human Heart - V2.0"
                src="https://sketchfab.com/models/168b474fba564f688048212e99b4159d/embed"
                className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-t-xl"
                allow="autoplay; fullscreen; vr"
              ></iframe>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Modelo:</span>{" "}
                <a
                  href="https://sketchfab.com/3d-models/3d-animated-realistic-human-heart-v20-168b474fba564f688048212e99b4159d"
                  target="_blank"
                  rel="nofollow"
                  className="text-indigo-600 hover:underline"
                >
                  3D Animated Realistic Human Heart - V2.0
                </a>{" "}
                por{" "}
                <a
                  href="https://sketchfab.com/docjana"
                  target="_blank"
                  rel="nofollow"
                  className="text-indigo-600 hover:underline"
                >
                  Anatomy by Doctor Jana
                </a>{" "}
                no{" "}
                <a
                  href="https://sketchfab.com"
                  target="_blank"
                  rel="nofollow"
                  className="text-indigo-600 hover:underline"
                >
                  Sketchfab
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
