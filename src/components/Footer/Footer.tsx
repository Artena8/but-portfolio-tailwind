import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer>
        <div className="fleche">
            <a href="#">↑</a>
        </div>
        <div className="social-links">
            <div className="animation">
            <a
                href="https://github.com/Artena8/"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
            >
                <div>
                <div className="social-name">GitHub</div>
                <div className="social-pseudo">@Artena8</div>
                </div>
                <img src="img/icones8/github.png" alt="Github" />
            </a>
            </div>
            <div className="animation">
            <a
                href="https://www.linkedin.com/in/h%C3%A9l%C3%A9na-chevalier-720085236/"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
            >
                <div>
                <div className="social-name">Linkedin</div>
                <div className="social-pseudo">@helena-Chevalier</div>
                </div>
                <img src="img/icones8/linkedin.png" alt="Linkedin" />
            </a>
            </div>
            <div className="animation">
            <a
                href="https://www.instagram.com/hellyow8/"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
            >
                <div>
                <div className="social-name">Instagram</div>
                <div className="social-pseudo">@hellyow8</div>
                </div>
                <img src="img/icones8/instagram.png" alt="Instagram" />
            </a>
            </div>
        </div>

        <p className="droits">Copyright © 2023 - Héléna Chevalier - Tous droits réservés</p>
        </footer>
    );
};

