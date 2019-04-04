import React from 'react'
import Link from 'gatsby-link'
import navStyles from './nav.module.css'

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            responsive: false
        }
    this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
            this.setState(prevState => {
                return {
                    menu: !prevState.menu
                }
            })
    }

    render() {
        return (
            <nav  className={navStyles.navbar}>
                {/* Desktop */}
                <ul className={navStyles.list}>
                    <button className={navStyles.button}><Link to="/about" className={navStyles.link}>About</Link></button>
                    <button className={navStyles.button}><Link to="/about" className={navStyles.link}>Services</Link></button>
                    <button className={navStyles.button}><Link to="/about" className={navStyles.link}>Calendar</Link></button>
                    <button className={navStyles.button}><Link to="/blog" className={navStyles.link}>Blog</Link></button>
                </ul>
                {/* Mobile */}
                <span className={navStyles.icon} 
                    onClick={this.toggleClass}
                >
                    &#9776;
                </span>
                <ul 
                    className={navStyles.responsiveList}
                    style={this.state.menu ? { display: 'grid' } : { display: 'none' } }
                >
                    <button className={navStyles.button}><Link to="/about" className={navStyles.link}>About</Link></button>
                    <button className={navStyles.button}><Link to="/about" className={navStyles.link}>Services</Link></button>
                    <button className={navStyles.button}><Link to="/about" className={navStyles.link}>Calendar</Link></button>
                    <button className={navStyles.button}><Link to="/blog"  className={navStyles.link}>Blog</Link></button>
                </ul>   
            </nav>
        )
    }
}   

export default Navbar