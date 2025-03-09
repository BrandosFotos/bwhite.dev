import React from 'react';

import SubHero from '@/components/ui/SubHero';

const Example: React.FC = () => {
    return (
        <div>
            {/* We get the font from the Google Fonts API and introduce the hero section. */}
            <main className='{Fredoka.variable} row-start-2 flex flex-col items-center gap-8'>
                {/* Hero Section */}
                <h1 className='{styles.text} text-5xl'>&lt;Bwhite.dev&gt;</h1>

                {/* This is where i built the svg for my Logo:
              https://danmarshall.github.io/google-font-to-svg-path/ */}

                {/* Unordered list, to keep items organized */}
                <ul className='list-inside text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left'>
                    <SubHero />
                </ul>

                {/* Button to scoll user to Projects Section */}
                <div className='flex flex-col items-center gap-4 sm:flex-row'>
                    <a
                        className='flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Projects
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Example;
