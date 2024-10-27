/**
 * @copyright 2024 AlanMaldonado
 * @license Apache-2.0
 */

import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Hero from "./components/hero";
import Review from "./components/review";
import Skill from "./components/skills";
import Work from "./components/work";
import "./index.css";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up");

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-200 bottom",
                    end: "bottom 80%",
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            });
        });
    });
    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    );
};

export default App;
