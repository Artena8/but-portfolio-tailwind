import React, { useState } from "react";
import { sendEmail } from "../../services/MailServices";

export const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        const success = await sendEmail(email, message);
        if (success) {
            setIsModalOpen(false);
        } else {
        }
        setIsSending(false);
    };

    return (
        <div className="flex relative z-20 items-center overflow-hidden mt-10 h-screen">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="md:w-2/3 lg:w-3/5 flex flex-col relative z-20">
                    <h1 className="uppercase text-6xl sm:text-8xl text-(--primary-500) flex flex-col leading-none">
                        Héléna
                        <span className="text-5xl sm:text-7xl">Chevalier</span>
                    </h1>
                    <p className="text-sm sm:text-base mt-4">
                        Bonjour, je m’appelle <b>Héléna Chevalier</b>, 20 ans, étudiante en <b>3ème année en BUT Informatique</b> à l’IUT Gustave-Eiffel.
                        Passionnée par l’informatique, je suis en alternance à la <b>CNAV</b> en tant que développeuse <b>C#</b>.
                    </p>
                    <div className="flex mt-8">
                        <a
                            href="/pdf/CV_Helena_Chevalier.pdf"
                            className="uppercase py-2 px-4 rounded-lg bg-(--primary-500) text-white text-md mr-4 hover:bg-(--primary-700)"
                        >
                            Voir mon CV
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-(--primary-500) text-(--primary-500) text-md hover:border-(--primary-700) hover:text-(--primary-700)"
                        >
                            Contactez-moi
                        </button>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/3 lg:w-2/5 relative">
                    <img
                        src="/img/me.png"
                        alt="Héléna Chevalier"
                        className="max-w-xs md:max-w-sm m-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="text-xl font-semibold text-gray-900">Contactez-moi</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:bg-gray-200 rounded-lg p-2"
                            >
                                &times;
                            </button>
                        </div>
                        <form className="mt-4 space-y-4" onSubmit={handleSendEmail}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Votre email</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Votre message..."
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-(--primary-500) text-white py-2 rounded-lg hover:bg-(--primary-700)"
                                disabled={isSending}
                            >
                                {isSending ? "Envoi en cours..." : "Envoyer"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
