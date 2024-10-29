/**
 * @copyright 2024 AlanMaldonado
 * @license Apache-2.0
 */

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
        activeBox.current.style.width =
            lastActiveLink.current.offsetWidth + "px";
        activeBox.current.style.height =
            lastActiveLink.current.offsetHeight + "px";
    };
    useEffect(initActiveBox, []);
    window.addEventListener("resize", initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target;
        activeBox.current.style.top = event.target.offsetTop + "px";
        activeBox.current.style.left = event.target.offsetLeft + "px";
        activeBox.current.style.width = event.target.offsetWidth + "px";
        activeBox.current.style.height = event.target.offsetHeight + "px";
    };

    const navItems = [
        {
            label: "Home",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink,
        },
        {
            label: "Sobre mi",
            link: "#about",
            className: "nav-link",
        },
        {
            label: "Proyectos",
            link: "#work",
            className: "nav-link",
        },
        {
            label: "Contact",
            link: "#contact",
            className: "nav-link md:hidden",
        },
    ];
    return (
        <nav className={" navbar " + (navOpen ? "active" : "")}>
            {navItems.map((item) => (
                <a
                    key={item.label}
                    ref={item.ref}
                    href={item.link}
                    className={item.className}
                    onClick={activeCurrentLink}
                >
                    {item.label}
                </a>
            ))}
            <div ref={activeBox} className="active-box"></div>
        </nav>
    );
};
Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
