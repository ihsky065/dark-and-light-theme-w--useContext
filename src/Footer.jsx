import ThemeContext from './ThemeContext';
import React, { useContext } from 'react';

export default function Footer () {
    const theme = useContext(ThemeContext);

    if (theme == 'dark') return 'Have a great time with the dark theme';
    else return 'Enjoy the light theme';
}