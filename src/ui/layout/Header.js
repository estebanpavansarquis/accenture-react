import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log(this)
        return (
            <header>
                <h1>SPA</h1>
                <nav>
                {this.props.links.map(e=><a key={e} href="#">{e}</a>)}
                </nav>
            </header>
        )
    }
}
