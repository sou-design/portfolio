"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
const experiences = [
  {
    year: '05/2024 - 09/2024',
    title: 'Drivr.online - Stagiaire C# Unity',
    description: "Développement d’une solution d’automatisation des tests fonctionnels basée sur une application de réalité virtuelle visant à simuler les situations critiques et dangereuses lors de la conduite."
  },
  { year: '01/2024 - 04/2024', title: 'Erinyes - C++ | Unreal Engine Game Developer', description: 'Développement des mécaniques de gameplay du jeu avec Unreal Engine 5 en utilisant les languages C++ / Blueprint.' },
  { year: '03/2023 - 07/2023', title: 'KB Systems - Développeur Full Stack', description: 'Developpement de fonctionnalités Backend d’un ERP (C#, .NET core et .NET, SQL Server), ainsi que les fonctionnalités Frontend (Blazor, MudBlazor et Syncfusion).' },
  { year: '03/2020 - 09/2020', title: 'Azimut Business Solutions - Stagiaire Android studio | Java', description: "Développement d'une solution pour la gestion d'inventaires, incluant l'exportation des données en formats variés, comme Excel, et la création de rapports visuels sous forme de diagrammes pour une analyse efficace des données." },
];

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full -z-20 p-8 bg-gray-900" id="experiences">
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white h-full w-1 border-l border-white"></div> */}
        <div className="flex flex-col space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              {/* Bullet Point */}
              {/*  */}
              {/* Content */}
              <div className="ml-8 pl-8 border-l-2 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-300">{exp.year}</h3>
                <h4 className="text-md font-bold text-white">{exp.title}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Encryption;
