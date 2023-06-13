import React from 'react'

function Header({ onDarkModeClick, button }){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {button ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}


export default Header 