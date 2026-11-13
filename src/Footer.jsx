import ThemeContext from './ThemeContext';
import React, { useContext } from 'react';

export default function Footer () {
    const {theme} = useContext(ThemeContext);

    if (theme == 'dark') return 'Have a great time with the dark theme';
    else return 'Enjoy the light theme';

    return(
        <p>{theme}</p>
    )

    // The lesson's answer
    // const lightThemeText = 'Thank you for visiting! Enjoy the light theme';
    // const darkThemeText = 'Thank you for visiting! Have a great time with the dark theme';

    // const text = theme === 'light' ? lightThemeText : darkThemeText;

    // return(
    //     <div>
    //         {text}
    //     </div>
    // )
}