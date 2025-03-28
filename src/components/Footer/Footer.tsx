import React, { useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import networks from './networks.json';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    
    return (
        <footer className="bg-(--primary-500) text-white py-8">
            <div className="flex justify-center mb-6">
                <motion.a
                    href="#"
                    className="text-xl"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }} // RESSORT TYPE
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
                                <div className="text-gray-300">{link.username}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            <p className="text-center text-sm mt-8 text-gray-300 border-t-1 pt-2 tw-border-solid">
                Copyright © {currentYear} - Héléna Chevalier - Tous droits réservés 
                <p><Link   to="/" className="underline" onClick={(e) => {
                e.preventDefault();
                window.location.replace("https://artena8.github.io/but-portfolio-tailwind/");}}>
                <span>Page Principale</span></Link> - <Link to="/mentions-legales" className="underline"><span>Mentions Légales</span></Link></p>
            </p>
        </footer>
    );
};
