export default function Circulacao() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white backdrop-blur-md rounded-xl shadow-2xl p-8">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
                    Sistemas de Órgãos: Circulação Sanguínea
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    O coração faz parte do sistema cardiovascular, que inclui os vasos sanguíneos 
                    (artérias, veias e capilares). Juntos, eles garantem a circulação contínua de sangue, 
                    que transporta oxigênio e nutrientes para os tecidos e remove o dióxido de carbono e 
                    outros resíduos.
                </p>
                <h2 className="text-2xl font-semibold mt-6 text-purple-800">
                    O papel vital do sistema cardiovascular:
                </h2>
                <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700">
                    <li>
                        <span className="font-bold text-blue-600"> Transporte de oxigênio e nutrientes: <br /></span> 
                        O sangue oxigenado é bombeado do coração para todos os tecidos do corpo.
                    </li>
                    <li>
                        <span className="font-bold text-blue-600">Regulação da temperatura corporal: <br /></span> 
                        Mantém a homeostase.
                    </li>
                    <li>
                        <span className="font-bold text-blue-600">Proteção imunológica:<br /></span> 
                        O sangue transporta células de defesa para combater infecções.
                    </li>
                </ul>
                <div className="mt-8 text-center">
                    <span className="text-sm text-gray-600 italic">
                        &quot;O sistema cardiovascular é a base da vida, garantindo energia e proteção para todo o corpo.&quot;
                    </span>
                </div>
            </div>
        </div>
    );
}
