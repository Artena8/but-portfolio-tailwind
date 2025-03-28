import { Footer } from "../../components";

export const MentionsLegales = () => {
    return (
        <div className="background">
            <div id="MentionsLegales" className="py-10 h-auto">
                <div className="flex justify-center items-center gap-4 mb-8 mt-8">
                    <h2 className="text-3xl font-semibold text-center">Mentions Légales</h2>
                </div>
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Identité de l'éditeur</h1>
                    <p className="text-gray-600 mb-2"><strong>Nom :</strong> Héléna Chevalier</p>
                    <p className="text-gray-600 mb-2"><strong>Statut :</strong> Étudiante en BUT Informatique à l'Université Gustave Eiffel</p>
                    <p className="text-gray-600 mb-2"><strong>Adresse :</strong> Université Gustave Eiffel, 77420 Champs-sur-Marne, France</p>

                    <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Hébergement</h1>
                    <p className="text-gray-600 mb-2"><strong>Hébergeur :</strong> GitHub Pages</p>
                    <p className="text-gray-600 mb-2"><strong>Adresse de l'hébergeur :</strong> GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA</p>
                    <p className="text-gray-600 mb-2"><strong>Site Web :</strong> <a href="https://pages.github.com/" className="text-blue-500 hover:underline">https://pages.github.com/</a></p>

                    <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Propriété intellectuelle</h1>
                    <p className="text-gray-600 mb-2">Le contenu de ce portfolio, incluant les textes, images, logos, et autres éléments visuels, sont la propriété de Héléna Chevalier, sauf mention contraire.</p>
                    <p className="text-gray-600 mb-2">Les icônes proviennent de <a className="underline" href="https://heroicons.com/" target="_blank">Heroicons</a> et <a className="underline" href="https://icons8.com/icons" target="_blank">Icons8</a>.</p>

                    <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Protection des données personnelles</h1>
                    <p className="text-gray-600 mb-2">Ce site ne collecte aucune donnée personnelle, à l'exception des informations fournies par l'utilisateur via le formulaire de contact. Ces informations ne sont pas sauvegardées dans une base de données et ne sont utilisées que dans le cadre de la réponse aux demandes de contact.</p>
                    <p className="text-gray-600 mb-2">Aucune donnée personnelle n'est partagée avec des tiers, et aucune donnée n'est utilisée à des fins commerciales.</p>

                    <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Formulaire de contact</h1>
                    <p className="text-gray-600 mb-2">Les informations recueillies dans le formulaire de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont pas stockées ou conservées une fois le message envoyé.</p>

                    <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Responsabilité</h1>
                    <p className="text-gray-600 mb-2">Le contenu de ce site est fourni à titre informatif et ne saurait engager la responsabilité de son éditeur en cas d'erreur ou d'omission. Les liens vers d'autres sites externes sont fournis à titre de convenance, et l'éditeur ne peut être tenu responsable du contenu des sites externes.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};
