'use client';

import React from 'react';

// Import motion from framer-motion
import { Chip } from '@heroui/chip';

import { motion } from 'framer-motion';

export type EducationType = {
    schoolName: string;
    subHeader: string;
    duration: string;
    desc: string;
    grade?: string;
    descBullets?: string[];
    location: string;
};

export const educationInfo: EducationType[] = [
    {
        schoolName: 'Tennessee College of Applied Technology',
        subHeader: 'Certification in Electrical Engineering',
        duration: 'May 2018 - May 2019',
        desc: '',
        grade: 'Grade A , GPA: 3.60',
        descBullets: [], // Array of Strings
        location: 'Online'
    },
    {
        schoolName: 'Pellissippi State Community College',
        subHeader: 'Associate of Applied Science in Computer Science',
        duration: 'September 2023 - September 2025',
        desc: '',
        grade: 'Grade A , GPA: 3.71',
        descBullets: [], // Array of Strings
        location: 'Online'
    },
    {
        schoolName: 'University of Tenneessee Chattanooga',
        subHeader: 'Pursuit of Bachelor of Science in Computer Science',
        duration: 'Enrolling in 2026',
        desc: '',
        grade: '',
        descBullets: [], // Array of Strings
        location: 'Online'
    }
];

function Education() {
    return (
        <section className='py-5 pb-20 backdrop-blur-sm lg:py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='mb-6 text-center text-4xl font-bold tracking-wide'>Education</h1>
                <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {educationInfo.map((education, index) => (
                        <motion.li
                            key={index}
                            className='rounded-lg border border-gray-700 bg-[var(--secondary-background)] p-5 shadow-lg transition duration-300 hover:shadow-xl'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-xl font-semibold'>{education.schoolName}</h3>
                            </div>

                            <h4 className='mt-1'>{education.subHeader}</h4>

                            <p className='mt-2 text-sm'>
                                <span className='font-semibold'>Duration:</span> {education.duration}
                            </p>

                            {education.grade && (
                                <div className='mt-2 flex gap-4 font-bold'>
                                    <Chip color='success'>Grade: {education.grade}</Chip>
                                </div>
                            )}

                            {education.desc && <p className='mt-3 text-gray-300'>{education.desc}</p>}
                            {education.descBullets && education.descBullets.length > 0 && (
                                <ul className='mt-2 list-disc pl-6 text-gray-300'>
                                    {education.descBullets.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Education;
