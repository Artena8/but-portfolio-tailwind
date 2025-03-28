import React, { useState } from "react";
import { sendEmail } from "../../services/MailServices";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isSending, setIsSending] = useState<boolean>(false);

    const handleSendEmail = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setIsSending(true);
        const success = await sendEmail(email, message);
        if (success) {
            setIsModalOpen(false);
        }
        setIsSending(false);
    };

    return (
        <div id="Moi" className="flex flex-col relative z-20 items-center overflow-hidden min-h-screen m-auto">
            <div className="container mx-auto px-6 relative flex flex-row min-h-screen">
                <div className="w-full flex flex-row m-auto">
                    <div className="md:w-2/3 lg:w-3/5 flex flex-col relative z-20 w-full">
                        <h1 className="pr-5 text-4xl md:text-6xl lg:text-8xl font-bold uppercase text-(--primary-400) flex flex-col">
                            Héléna Chevalier
                        </h1>
                        <div className="animate-typing max-w-max overflow-hidden whitespace-nowrap border-r-4 border-r-(--primary-600) tw-border-solid pr-5 text-2xl md:text-6xl lg:text-7l font-bold uppercase text-(--primary-600) flex flex-col">
                            Développeuse
                        </div>

                        <p className="text-sm sm:text-base mt-4">
                            Bonjour, je m’appelle <b>Héléna Chevalier</b>, 20 ans, étudiante en <b>3ème année en BUT Informatique</b> à l’IUT Gustave-Eiffel.
                            Passionnée par l’informatique, je suis en alternance à la <b>CNAV</b> en tant que développeuse <b>C#</b>.
                        </p>
                        <div className="flex mt-8">
                            <a
                                href="./pdf/CV_Helena_Chevalier.pdf"
                                className="uppercase py-2 px-4 rounded-lg bg-(--primary-500) text-white text-md mr-4 hover:bg-primary-700"
                            >
                                Voir mon CV
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer uppercase py-2 px-4 rounded-lg bg-transparent tw-border-solid border-2 border-(--primary-500) text-(--primary-500) text-md hover:border-(--primary-700) hover:text-(--primary-700)"
                            >
                                Contactez-moi
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/3 lg:w-2/5 relative">
                        <motion.img
                            src="./img/me.png"
                            alt="Héléna Chevalier"
                            width={"500px"}
                            height={"500px"}
                            className="max-w-xs md:max-w-sm m-auto rounded-lg shadow-lg moiImage"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            onMouseOver={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = './img/meirl2.jpeg';
                            }}
                            onMouseOut={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = './img/me.png';
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="-mt-48 mt-custom flex justify-center w-full z-1">
            <motion.div
                className="text-xl hover:text-primary-500"
                whileHover={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <Link to="#Skills">
                    <ChevronDoubleDownIcon className="w-8 h-8 scale-150 text-secondary-500 transition-colors duration-300" />
                </Link>
            </motion.div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/60 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 fixed top-1/16"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-between border-b tw-border-solid pb-3">
                            <div>
                                <h3 className="text-xl font-semibold text-(--primary-500)">Contactez-moi !</h3>
                                <p>N'hésitez pas à m'envoyer un message par ce formulaire ou via mes réseaux sociaux</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:bg-gray-200 rounded-lg p-2"
                                aria-label="Fermer le formulaire"
                                aria-hidden="true"
                            >
                                &times;
                            </button>
                        </div>
                        <form className="mt-4 space-y-4" onSubmit={handleSendEmail}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Votre email pour que je vous recontacte :
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full border border-gray-300 tw-border-solid rounded-lg p-2"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Votre message : </label>
                                <textarea
                                    className="mt-1 block w-full border border-gray-300 tw-border-solid rounded-lg p-2"
                                    required
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-(--primary-500) text-white py-2 rounded-lg hover:bg-(--primary-700) cursor-pointer"
                                    disabled={isSending}
                                >
                                    {isSending ? "Envoi en cours..." : "Envoyer"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};
