'use client';

import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import useSectionInView from '@/hooks/useSectionInView';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28   max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/IMG_0549.jpg'
              alt='person'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl '
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {' '}
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-7 mt-1 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello & Welcome! I&apos;m Ihar</span> a
        highly motivated <span className='font-bold'>software engineer</span>{' '}
        with a year of valuable experience.{' '}
        <span className='font-bold'>Building </span>websites & apps is not just
        a job for me, <span className='italic'>it&apos;s a passion</span>.
        Currently I&apos;m focus on JavaScript, Rust &{' '}
        <span className='underline '>Express.js</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition
          '
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105
          transition cursor-pointer border borderBlack dark:bg-white/10'
          href='/Ihar_Bahamaz_CV.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] active:scale-105 hover:text-gray-950
          transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/iharbahamaz/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/IharBahamaz'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
