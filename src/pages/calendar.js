import React from 'react';
import Layout from '../components/layout';
import transition from './page-transitions.module.css'


export default () => (
    <Layout>
        <div className={transition.all}>
            <h1>Our calendar...</h1>
        </div> 
    </Layout>
)