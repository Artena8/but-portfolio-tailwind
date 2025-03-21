import React, { useState } from 'react';
import jsonData from './skills.json';

export const Skills: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div id="Skills" className="Skills py-10">
      <h2 className="text-3xl font-semibold text-center mb-8 mt-8">Mes compétences</h2>
      <p className="text-lg text-center my-4">
        Lorsque vous <span className='text-pink-800 font-bold text-xl'>survolez une compétence</span>, son degré de maîtrise (pourcentage) apparaît sur la barre de progression.
      </p>

      <div className="container mx-auto px-2">
        <h3 className="text-2xl font-medium mb-6">Mes Langages & Outils</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(jsonData).map((key) => {
            const section = jsonData[key];
            return (
              <div key={key} className="p-6 rounded-lg shadow-md border border-(--primary-500)">
                <div className="flex items-center mb-4">
                  <img
                    src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a1401d9558a3184287_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="48"
                    height="48"
                    alt="logo"
                    className="mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">{section.titre}</h4>
                    <p className="text-sm text-gray-500">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {section.competences.map((competence: { competence: string; pourcentage: number }, index: React.Key | null | undefined) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                      onMouseEnter={() => setHovered(competence.competence)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <p className='w-3/5'>{competence.competence}</p>
                      <div className="relative w-2/5 h-2 rounded-full">
                        <div className="w-full rounded-full">
                          <div className="bg-(--primary-500) text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-500 ease-in-out"                           
                            style={{
                              width: hovered === competence.competence ? `${competence.pourcentage}%` : '0%',
                              opacity: hovered === competence.competence ? 1 : 0,
                            }}> 
                            {competence.pourcentage}% 
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-6">On dit de moi que je suis ...</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Responsable", "Créative", "Organisée"].map((qualite, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a1401d9558a3184287_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="48"
                  height="48"
                  alt="icon"
                  className="mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">{qualite}</h4>
                  <p className="text-sm text-gray-500">Une petite description ici...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};