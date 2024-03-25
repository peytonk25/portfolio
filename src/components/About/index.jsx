import React from "react"

import styles from "./styles.module.css"
import photo from '../../Headshot.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"


export default class About extends React.Component {

    render () {
        return (
            <div id="about" className={styles.container}>
                <div className={styles.photo_container}>
                    <img src={photo} alt="peyton_kellner" className={styles.photo}></img>
                </div>
                <div className={styles.text_container}>
                
                    <div className={styles.bio}>
                        Full Stack Software Engineer
                    </div>
                    <div className={styles.bio2}>
                        Based in the United States
                    </div>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faReact} className={styles.react}/>
                        <FontAwesomeIcon icon={faHtml5} className={styles.html}/>
                        <FontAwesomeIcon icon={faPython} className={styles.py}/>
                        <FontAwesomeIcon icon={faJs} className={styles.js}/>
                    </div>
                </div>
            </div>
        )
    }

}