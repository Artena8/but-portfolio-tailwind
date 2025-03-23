import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import networks from './networks.json';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-(--primary-800) text-white py-8">
            <div className="flex justify-center mb-6">
                <motion.a
                    href="#"
                    className="text-xl hover:text-primary-500"
                    whileHover={{ y: -5 }} // hover vers le haut
                    transition={{ type: "spring", stiffness: 300 }} // RESORT TYPE
                >
                    <ArrowUpIcon className="w-8 h-8 text-white transition-colors duration-300" />
                </motion.a>
            </div>

            <div className="flex justify-center space-x-8">
                {networks.socialLinks.map((link, index) => (
                    <div key={index} className="group hover:scale-105 transition-transform duration-300">
                        <a
                            href={link.url}
                            className="flex items-center space-x-3"
                            target="_blank"
                            title={link.name}
                        >
                            <img
                                src={link.icon}
                                alt={link.alt}
                                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="text-sm">
                                <div className="font-semibold">{link.name}</div>
                                <div className="text-gray-400">{link.username}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            <p className="text-center text-sm mt-8 text-gray-400 border-t-1 pt-2">
                Copyright © {currentYear} - Héléna Chevalier - Tous droits réservés
                <p>Crédits des icônes à <a className="underline" href="https://heroicons.com/" target="_blank">Heroicons</a> et <a className="underline" href="https://icons8.com/icons" target="_blank">Icons8</a></p>
            </p>
        </footer>
    );
};
