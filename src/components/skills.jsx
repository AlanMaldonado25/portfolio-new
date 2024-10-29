/**
 * @copyright 2024 AlanMaldonado
 * @license Apache-2.0
 */

import SkillCard from "./skill-card";

const skillItem = [
    {
        imgSrc: "/images/html-1.svg",
        label: "HTML",
        desc: "Estructura web",
    },
    {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "Interfaz de usuario",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interacción",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Framework",
    },
    {
        imgSrc: "/images/react-native-1.svg",
        label: "React Native",
        desc: "Framework",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "Interfaz de usuario",
    },
    {
        imgSrc: "/images/figma.svg",
        label: "Figma",
        desc: "Herramienta de diseño",
    },
    {
        imgSrc: "/images/git-icon.svg",
        label: "Git",
        desc: "Control de versiones",
    },
    {
        imgSrc: "/images/next-js.svg",
        label: "Next Js",
        desc: "Framework",
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Herramientas que utilizo
                </h2>
                <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Descubre las poderosas herramientas y tecnologías que
                    utilizo para crear sitios web y aplicaciones excepcionales y
                    de alto rendimiento.
                </p>

                <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map((skill, index) => (
                        <SkillCard
                            key={index}
                            imgSrc={skill.imgSrc}
                            label={skill.label}
                            desc={skill.desc}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
