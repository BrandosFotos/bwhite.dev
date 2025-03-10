'use client';

import { useEffect, useState } from 'react';

import styles from '@/components/ui/FramerStyles/Theme.module.scss';

import { MagicTabSelect } from 'react-magic-motion';

const themes = [
    { name: 'Light', value: 'light', icon: '/light.svg' },
    { name: 'Dark', value: 'dark', icon: '/dark.svg' },
    { name: 'Femme', value: 'pink', icon: '/flower.svg' },
    { name: 'Forest', value: 'forest', icon: '/tree.svg' },
    { name: 'Ocean', value: 'ocean', icon: '/waves.svg' }
];

const ThemeSwitch = () => {
    const [activeTheme, setActiveTheme] = useState(themes[0]);
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const currentTheme = activeTheme.value === 'system' ? systemTheme : activeTheme.value;

        document.documentElement.setAttribute('data-theme', currentTheme);

        // Dynamically set CSS variables based on selected theme
        document.documentElement.style.setProperty(
            '--background-color-light',
            currentTheme === 'light'
                ? '#ffffff'
                : currentTheme === 'dark'
                  ? '#181818'
                  : currentTheme === 'pink'
                    ? '#f1c6d2'
                    : currentTheme === 'forest'
                      ? '#2f4f4f'
                      : '#66a3cc'
        );
        document.documentElement.style.setProperty(
            '--text-color-light',
            currentTheme === 'light'
                ? '#000000'
                : currentTheme === 'dark'
                  ? '#ffffff'
                  : currentTheme === 'pink'
                    ? '#d70070'
                    : currentTheme === 'forest'
                      ? '#b6d7a8'
                      : '#ffffff'
        );
    }, [activeTheme]);

    const handleClick = (theme: { name: string; value: string; icon: string }, index: number) => {
        setActiveTheme(theme);
        setHoveredIndex(index);
    };

    return (
        <div className={styles.pillTabsContainer}>
            {themes.map((theme, index) => (
                <button
                    key={theme.value}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => handleClick(theme, index)}
                    className={styles.pillTab}>
                    {hoveredIndex === index && (
                        <MagicTabSelect id='pillTabs' transition={{ type: 'spring', bounce: 0.35 }}>
                            <span className={styles.indicator} />
                        </MagicTabSelect>
                    )}
                    <span>
                        <img src={theme.icon} width={20} alt={theme.name} />
                    </span>
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitch;
