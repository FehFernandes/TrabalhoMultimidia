export default function Circulacao() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-500 p-6 flex items-center justify-center ">
        <div className="max-w-4xl w-full p-11 rounded-lg shadow-lg bg-white bg-opacity-35 backdrop-blur-lg font-sans">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-900">
            Sistemas de Órgãos: Circulação Sanguínea
          </h1>
          <p className="text-lg leading-relaxed text-black">
            O coração faz parte do sistema cardiovascular, que inclui os vasos sanguíneos
            (artérias, veias e capilares). Juntos, eles garantem a circulação contínua de
            sangue, que transporta oxigênio e nutrientes para os tecidos e remove o dióxido
            de carbono e outros resíduos.
          </p>
          <h2 className="text-2xl font-semibold mt-6 text-purple-900">
            O papel vital do sistema cardiovascular:
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-black">
            <li>
              <span className="font-bold text-blue-900">
                Transporte de oxigênio e nutrientes: <br />
              </span>
              O sangue oxigenado é bombeado do coração para todos os tecidos do corpo.
            </li>
            <li>
              <span className="font-bold text-blue-900">
                Regulação da temperatura corporal: <br />
              </span>
              Mantém a homeostase.
            </li>
            <li>
              <span className="font-bold text-blue-900">
                Proteção imunológica:<br />
              </span>
              O sangue transporta células de defesa para combater infecções.
            </li>
          </ul>
          <div className="mt-8 text-center">
            <span className="text-sm text-gray-900 italic">
            "A circulação sanguínea é o fluxo vital que alimenta os órgãos, sustenta a energia e promove a saúde em todo o corpo."
            </span>
          </div>
        </div>
      </div>
    );
  }
  