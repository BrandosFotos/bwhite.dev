import Education from '@/components/Education';
import Hero from '@/components/Hero';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

export default function Home() {
    return (
        <div
            className='grid min-h-screen grid-rows-[auto_1fr_auto] gap-16 p-8 pb-20'
            style={{ fontFamily: 'var(--font-geist-sans)' }}>
            <Header />

            <main>
                <Hero />
                {/* <Education /> */}
                <ThemeSwitch />
            </main>

            <Footer />
        </div>
    );
}
