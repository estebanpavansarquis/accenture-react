import React, { Component } from 'react'
import { connect } from "react-redux" 

class Header extends Component {
    render() {
        return (
            <header>
                <h1>SPA</h1>
                <nav>
                {this.props.links.map(e=>
                    <a key={e} href="#">{e}</a>
                )}
                </nav>
            </header>
        )
    }
}

export default connect(store=>({
    links : store.links
}),null)(Header)
