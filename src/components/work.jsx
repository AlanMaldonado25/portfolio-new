/**
 * @copyright 2024 AlanMaldonado
 * @license Apache-2.0
 */

import PortfolioCard from "./portfolio-card";

const works = [
    {
        imgSrc: "/images/wikiF1.jpeg",
        title: "Wiki F1",
        tags: ["HTML", "CSS"],
        projectLink: "https://wiki-formula1.netlify.app/",
    },
    {
        imgSrc: "/images/wiki-cine.jpeg",
        title: "Wiki cine",
        tags: ["HTML", "CSS", "Javascript"],
        projectLink: "https://wikicine.netlify.app/",
    },
    {
        imgSrc: "/images/pc-zone.jpeg",
        title: "Pc Zone",
        tags: ["React JS", "Firebase"],
        projectLink: "https://pc-zone.netlify.app/",
    },
    {
        imgSrc: "/images/Eat-app.png",
        title: "Real state website",
        tags: ["React Native", "Firebase"],
        projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
];

const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Proyectos de mi portafolio
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <PortfolioCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
