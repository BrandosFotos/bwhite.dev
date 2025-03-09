'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import ThemeSwitcher from '@/components/ui/ThemeSwitch';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('');

    useEffect(() => {
        // Get current theme from document attribute
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(currentTheme);

        // Listen for theme changes
        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
            setTheme(newTheme);
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className={`flex flex-wrap items-center justify-between p-6 transition-all duration-300`}>
            {/* Logo */}
            <div className='mr-6 flex flex-shrink-0 items-center'>
                <svg
                    className='mr-2 h-8 w-8 fill-current'
                    width='54'
                    height='54'
                    viewBox='0 0 54 54'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
                </svg>
                <span className='text-xl font-semibold tracking-tight'>Bwhite.Dev</span>
            </div>

            {/* Mobile Menu Button */}
            <div className='block lg:hidden'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='flex items-center rounded border px-3 py-2 hover:border-white hover:text-white'>
                    <svg className='h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>

                {/* Dropdown Menu (Visible when isOpen is true) */}
                {isOpen && (
                    <div
                        className={`absolute right-0 z-50 mt-2 w-48 rounded-lg border shadow-2xl ${theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white' : ''} ${theme === 'forest' ? 'border-green-800 bg-[#365937] text-[#d4e157]' : ''} ${theme === 'light' ? 'border-gray-300 bg-gray-100 text-black' : ''}`}>
                        <Link href='/about' className='hover:bg-opacity-70 block px-4 py-2'>
                            About Me
                        </Link>
                        <Link href='/contact' className='hover:bg-opacity-70 block px-4 py-2'>
                            Contact Me
                        </Link>
                        <Link href='/projects' className='hover:bg-opacity-70 block px-4 py-2'>
                            Projects
                        </Link>
                    </div>
                )}
            </div>

            {/* Desktop Menu */}
            <div className='hidden flex-grow items-center justify-center lg:flex'>
                <Link href='/about' className='mx-4 hover:opacity-70'>
                    About Me
                </Link>
                <Link href='/contact' className='mx-4 hover:opacity-70'>
                    Contact Me
                </Link>
                <Link href='/projects' className='mx-4 hover:opacity-70'>
                    Projects
                </Link>
                <ThemeSwitcher />
            </div>

            {/* Support Button */}
            <div className='hidden lg:block'>
                <a href='https://ko-fi.com/BrandosFotos' target='_blank' rel='noopener noreferrer'>
                    <button className='rounded bg-gradient-to-r from-[#4b2e2e] to-[#c4a484] px-4 py-2 font-bold text-white backdrop-blur-md transition-colors'>
                        Support Me on Ko-Fi
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Header;
