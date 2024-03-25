import React from "react"
import {Link} from 'react-scroll';


import styles from './styles.module.css'

//Sections

import About from '../../components/About'
import Project from '../../components/Project'
import Resume from '../../components/Resume'
import Contact from '../../components/Contact'

export default class Homepage extends React.Component {

    render () {
        return (
            <div className={styles.txt_background}>
                <div>
                    <About />
                </div>
                {/*<div>
                    <Project />
                </div>
                */}
                <div>
                    <Resume />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        )
    }

}