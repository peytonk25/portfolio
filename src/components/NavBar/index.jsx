import React from "react";
import styles from "./styles.module.css"
import {Link} from "react-scroll"


import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Specify weight
//import "@fontsource/poppins/400-italic.css";


export default class NavBar extends React.Component {

   

    render () {
        return (
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
        )
    }
}