/**
 * @copyright 2024 AlanMaldonado
 * @license Apache-2.0
 */

const About = () => {
    const aboutItems = [
        {
            label: "Year of experience",
            number: 1,
        },
    ];
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Desarrollador Front End con experiencia en el desarrollo
                        de interfaces atractivas, intuitivas y responsivas,
                        utilizando tecnologías como HTML, CSS, JavaScript,
                        TypeScript y frameworks modernos como React.js, Next.js
                        y React Native. Aporto un enfoque orientado al diseño
                        UX/UI, garantizando experiencias de usuario optimizadas.
                    </p>
                    <div className="flex flex-wrap items-center justify-between md:gap-7">
                        {aboutItems.map((item, index) => (
                            <div key={index}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">
                                        {item.number}
                                    </span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">
                                        +
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-400">
                                    {item.label}
                                </p>
                            </div>
                        ))}

                        <img
                            src="/images/logo-remove-bg.webp"
                            height={110}
                            width={110}
                            alt="Logotipo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
