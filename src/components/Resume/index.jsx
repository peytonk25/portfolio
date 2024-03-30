import React from "react"

import pdf from "../../Peyton_Kellner.pdf";

import styles from "./styles.module.css"



export default class Resume extends React.Component {

    render () {
        return (
            <div className={styles.container} id="resume">
                <iframe title="my_resume" src={pdf} className={styles.PDF} />
            </div>
        )
    }

}