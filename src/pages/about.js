import React from 'react'
import Layout from '../components/layout'
import transition from './page-transitions.module.css'

const About = () => {
    return (
        <Layout>
            <div className={transition.all}>
                <h1>About us...</h1>
            </div>      
        </Layout>
    )
}

export default About