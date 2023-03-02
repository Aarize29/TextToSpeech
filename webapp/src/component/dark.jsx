import React, { useState, useEffect } from 'react';
import './index.css';
import { MdDarkMode } from 'react-icons/md';


const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function Dark() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <main>
            <nav>
                <div className="nav-center">

                    <button className="btn" onClick={toggleTheme}>
                        <MdDarkMode />
                    </button>
                </div>
            </nav>

        </main>
    );
}

export default Dark;
