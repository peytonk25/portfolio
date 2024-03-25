import React from "react"

import styles from "./styles.module.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


export default class Contact extends React.Component {

    render () {
        return (
            <div className={styles.background}>
                <div className={styles.header}>
                        Contact Me!
                    </div>
            <div id="contact" className={styles.container}>
                    
                    <FontAwesomeIcon icon={faEnvelope} className={styles.iconE} onClick={() => window.location = 'mailto:peytonk25@gmail.com'}/>
                    
                    <a href="https://www.linkedin.com/in/peyton-kellner/" target="_blank" rel="noreferrer" className={styles.iconL}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>

                    <a href="https://github.com/peytonk25" target="_blank" rel="noreferrer" className={styles.iconG}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                
            </div>
            </div>
        )
    }

}