import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import networks from './networks.json';

export const Footer: React.FC = () => {
    const [socialLinks, setSocialLinks] = useState(networks.socialLinks);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-(--primary-800) text-white py-8">
            {/* Fleche */}
            <div className="flex justify-center mb-6">
                <a href="#" className="text-xl hover:text-primary-500">
                    <ArrowUpIcon className="w-8 h-8 text-white hover:text-primary-500 transition-colors duration-300" />
                </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex justify-center space-x-8">
                {socialLinks.map((link, index) => (
                    <div key={index} className="group hover:scale-105 transition-transform duration-300">
                        <a
                            href={link.url}
                            className="flex items-center space-x-3"
                            target="_blank"
                            rel="noopener noreferrer"
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

            {/* Copyright */}
            <p className="text-center text-sm mt-8 text-gray-400 border-t-1 pt-2">
                Copyright © {currentYear} - Héléna Chevalier - Tous droits réservés
            </p>
        </footer>
    );
};
