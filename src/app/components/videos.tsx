"use client"

import { useState } from 'react'
import { Heart, Play, Info } from 'lucide-react'

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState('yyng6-fBQ8M')

  const videos = [
    {
      id: 'yyng6-fBQ8M',
      title: 'Vídeo sobre importância do cardio para a saúde do coração',
      description: 'Aprenda sobre os fatores que afetam a saúde do seu coração e como mantê-lo saudável.',
    },
    {
      id: 'PI933_UjcAs',
      title: 'Video sobre importância do coração no corpo humano',
      description: 'Importância do coração no corpo humano.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-purple-800">
          Vídeos Educativos sobre Saúde Cardíaca
        </h1>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 transition-transform transform">
          <div className="p-6">
            <h2 className="flex items-center text-2xl font-semibold text-purple-700 mb-2">
              <Heart className="w-6 h-6 mr-2 text-pink-500" />
              Vídeos em Destaque
            </h2>
            <p className="text-gray-600 mb-4">Nesses vídeos, os médicos Dr. Paulo Muzy e Dr. Paulo Nogueira falam a importância da saúde do coração</p>
          </div>
          <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className={`p-4 text-center font-semibold rounded-lg transition-colors duration-300 ease-in-out transform ${
                  activeVideo === video.id
                    ? 'bg-purple-600 text-white  shadow-xl'
                    : 'bg-gray-100 text-purple-600 hover:bg-purple-100'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}`}
              title="Vídeo em destaque"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
        </div>


          {videos.map((video) => (
            <div
              key={video.id}
              className={`bg-white rounded-xl shadow-lg p-6 transition-all transform ${
                activeVideo === video.id ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <Play className="w-4 h-4 mr-2" />
                Assistir no YouTube
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
