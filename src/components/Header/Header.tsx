import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                        <motion.div
                            whileHover={{ scale: 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <Link to="#Moi" className="hover:font-black">A Propos</Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <Link to="#Skills" className="hover:font-black">Compétences</Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <Link to="#Projets" className="hover:font-black">Projets</Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, textDecoration: "underline", textUnderlineOffset: "5px" }}
                            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <Link to="#Formations" className="hover:font-black">Formations</Link>
                        </motion.div>
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
                        <Link to="#Moi" className="block" onClick={() => setIsMenuOpen(false)}>A Propos</Link>
                        <Link to="#Skills" className="block" onClick={() => setIsMenuOpen(false)}>Compétences</Link>
                        <Link to="#Projets" className="block" onClick={() => setIsMenuOpen(false)}>Projets</Link>
                        <Link to="#Formations" className="block" onClick={() => setIsMenuOpen(false)}>Formations</Link>
                    </nav>
                )}
            </header>
    );
};
