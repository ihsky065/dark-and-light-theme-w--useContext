import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function Form () {
    return(
        <Panel title='Welcome'>
            <Button>Sign Up</Button>
            <Button>Login</Button>
        </Panel>
    );
}

function Panel({title, children, theme}) {
    const className = 'panel-' + theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({children, theme}) {
    const className = 'button-' + theme;
    return(
        <button className={className}>
            {children}
        </button>
    )
}