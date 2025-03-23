import React, { useState } from 'react';
import jsonData from './skills.json';
import { JsonData } from '.';

export const Skills: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div id="Skills" className="Skills py-10">
      <div className="flex justify-center items-center gap-4 mb-8 mt-8">
        <h2 className="text-3xl font-semibold text-center">Mes compétences</h2>
      </div>

      <div className="container mx-auto px-2">
        <h3 className="text-2xl font-medium mb-6">
            Mes Langages & Outils

            <label className={`inline-flex items-center justify-between mx-4 px-2 cursor-pointer transition-colors
                text-(--secondary-600)  border-2  rounded-lg 
                ${hovered === "all" ? "bg-(--primary-500) border-(--primary-500) text-white" : 
                "hover:text-(--secondary-700) hover:border-(--secondary-700) bg-(--secondary-200) border-(--secondary-600)"}
            `}>                           
                <input 
                    type="checkbox" 
                    id="react-option" 
                    className="hidden peer"
                    checked={hovered === "all"}
                    onChange={() => setHovered(hovered === "all" ? null : "all")}
                />
                <div className="block">
                    <div className="w-full text-sm">
                        Afficher l'ensemble des degrés de maîtrise
                    </div>
                </div>
            </label>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(jsonData).map((key) => {
            const section = jsonData[key as keyof JsonData];
            return (
              <div key={key} className="p-6 rounded-lg shadow-md border border-(--primary-500) bg-(--secondary-100)">
                <div className="flex items-center mb-4">
                  <img
                    src={section.icon}
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
                  {section.competences.map((competence, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                      onMouseEnter={() => hovered !== "all" && setHovered(competence.competence)}
                      onMouseLeave={() => hovered !== "all" && setHovered(null)}
                    >
                      <p className='w-3/5'>{competence.competence}</p>
                      <div className={`relative w-2/5 h-2 rounded-full`}>
                        <div
                          className="bg-(--primary-500) text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-500 ease-in-out"
                          style={{
                            width: hovered === competence.competence || hovered === "all" ? `${competence.pourcentage}%` : '0%',
                            opacity: hovered === competence.competence || hovered === "all" ? 1 : 0,
                          }}
                        >
                          {competence.pourcentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
