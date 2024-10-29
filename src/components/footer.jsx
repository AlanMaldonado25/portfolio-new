import { ButtonPrimary } from "./button";

/**
 * @copyright 2024 AlanMaldonado
 * @license Apache-2.0
 */
const sitemap = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Contact me",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/AlanMaldonado25",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/alan-maldonado-coder/",
    },
    {
        label: "Twitter X",
        href: "https://x.com/Alanmaldonado22",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/alanmaldo22/",
    },
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Envíame un email
                        </h2>
                        <ButtonPrimary
                            href={"mailto:alan.maldonado.dev@gmail.com"}
                            label="Enviar correo"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Menu</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className=" block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2 ">Mis redes</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className=" block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-16 reveal-up ">
                    <a href="/" className="reveal-up">
                        <img
                            src="/public/images/logo-remove-bg.webp"
                            height={120}
                            width={120}
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024{" "}
                        <span className="text-zinc-200">AlanMaldonado</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
