import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-(--primary-800) text-white py-4 z-50 ">
        <div className="container mx-auto flex justify-between items-center px-6">
            <h3 className="text-xl">CHEVALIER HELENA</h3>
            
            <nav className="hidden md:flex space-x-6">
            <a href="#Moi" className="hover:font-black">A Propos</a>
            <a href="#Skills" className="hover:font-black">Compétences</a>
            <a href="#Projets" className="hover:font-black">Projets</a>
            <a href="#Formations" className="hover:font-black">Formations</a>
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
            <nav className="md:hidden bg-(--primary-800) py-4 px-6 space-y-2">
            <a href="#Moi" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>A Propos</a>
            <a href="#Skills" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>Compétences</a>
            <a href="#Projets" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>Projets</a>
            <a href="#Formations" className="block" onClick={() => setIsMenuOpen(!isMenuOpen)}>Formations</a>
            </nav>
        )}
        </header>
    );
};