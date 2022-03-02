import React, { Component } from 'react'
import "../css/Header.css"
import meme from "../imgs/meme.png"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="headImg" src={meme} alt="meme logo" />
                <h1 className="heading">Meme Generator</h1>
                <div className="headingContent">
                    <h3 className="subh1">Just fun</h3>
                    <h3 className="subh2">@100Sambha</h3>
                </div>
            </div>
        )
    }
}

export default Header