'use client'

import Image from 'next/image';
import Coracao from '@/app/3minutes.gif';

export default function Introducao() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-pink-600 text-white"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center p-32 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-lg"
      >
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl font-extrabold mb-6">Introdução: a importância do coração</h1>
          <p className="mb-6 leading-relaxed">
            O coração é um dos órgãos mais essenciais para a vida humana, responsável por bombear sangue para todo o corpo. Esse órgão muscular mantém o funcionamento adequado de todos os sistemas do corpo ao garantir que o sangue, oxigênio e nutrientes cheguem a cada célula. Cuidar da saúde cardiovascular é fundamental, pois doenças cardíacas estão entre as principais causas de morte no mundo. A conscientização sobre a importância do coração e a adoção de hábitos saudáveis podem prevenir diversas complicações.
          </p>
        </div>
        <div
          className="mt-6 md:mt-0 md:ml-16"
        >
          <Image src={Coracao} alt="GIF de exemplo" width={250} height={250} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
