import React from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"
import {Link} from "react-scroll"
import {NavbarComponent} from "./types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Specify weight
//import "@fontsource/poppins/400-italic.css";


const NavBar: NavbarComponent = function() {

    const [isDesktop, setDesktop] = useState(false);

    const [showNav, setNavBar] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 950) {
        setDesktop(true);
        } else {
        setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 950) {
            setDesktop(true);
            } else {
            setDesktop(false);
            }
        };
        window.addEventListener('resize', updateMedia);
            return () => window.removeEventListener('resize', updateMedia);
        }, []);
   

        const handleNav = () => {
            setNavBar(!showNav)
        }

        return (
            <>
            {isDesktop ?
            <div className={styles.container}>
                
                <div className={styles.header_container}>
                    <div className={styles.Name}>
                        Peyton Kellner
                    </div>
                    <Link to={"about"} smooth duration={500} className={styles.headerA} >
                        About Me
                    </Link>
                    {/*<Link to={"projects"} smooth duration={500} className={styles.headerP} >
                        Projects
                    </Link>
                    */}
                    <Link to={"resume"} smooth duration={500} className={styles.headerR}>
                        Resume
                    </Link>
                    <Link to={"contact"} smooth duration={500} className={styles.headerC}>
                        Contact
                    </Link>
                </div>
            </div>
            :
            <div className={styles.container_mobile}>
                <div className={styles.Name_mobile}>
                        Peyton Kellner
                </div>
                <div className={styles.Bars} onClick={handleNav}>
                    <FontAwesomeIcon icon={faBars} className={styles.icon} />
                    
                </div>
                {!showNav ?
                    <></>
                    :
                    <div className={styles.sidebar}>
                        <Link to={"about"} smooth duration={500} className={styles.headerA_mobile} >
                            About Me
                        </Link>
                        <Link to={"resume"} smooth duration={500} className={styles.headerR_mobile}>
                            Resume
                        </Link>
                        <Link to={"contact"} smooth duration={500} className={styles.headerC_mobile}>
                            Contact
                        </Link>
                    </div>
                    }

            </div>
            }
            </>
        )
    
}

export default NavBar;