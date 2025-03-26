import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-1 rounded-2xl left-1/2 navfx transform -translate-x-1/2 w-full lg:w-4/5 bg-(--primary-500) text-white py-4 z-50 m-auto">
        <div className="container mx-auto flex justify-between items-center px-6">
            <h3 className="text-xl flex items-center gap-2">
            <img src="./HC.svg" width={"32px"} alt="Logo" />
            CHEVALIER HELENA
            </h3>
            
            <nav className="hidden md:flex space-x-6 uppercase headerfont">
                <motion.a
                    href="#Moi"
                    className="hover:font-black"
                    whileHover={{ scale : 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                    transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    A Propos
                </motion.a>
                <motion.a
                    href="#Skills"
                    className="hover:font-black"
                    whileHover={{ scale : 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                    transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    Compétences
                </motion.a>
                <motion.a
                    href="#Projets"
                    className="hover:font-black"
                    whileHover={{ scale : 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                    transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    Projets
                </motion.a>
                <motion.a
                    href="#Formations"
                    className="hover:font-black"
                    whileHover={{ scale : 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                    transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    Formations
                </motion.a>
            </nav>
            
            <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            ☰
            </button>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
            <nav className="md:hidden bg-(--primary-500) py-4 px-6 space-y-2 uppercase headerfont">
            <a href="#Moi" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>A Propos</a>
            <a href="#Skills" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>Compétences</a>
            <a href="#Projets" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>Projets</a>
            <a href="#Formations" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>Formations</a>
            </nav>
        )}
        </header>
    );
};