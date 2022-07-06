import React from 'react';
import Link from 'next/link';
// style
import { Icons, Line } from './style';
// icons
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsFillCameraVideoFill } from 'react-icons/bs';
import { SiShutterstock } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
// animation
import { motion } from 'framer-motion';

export default function SocialIcons({ click }) {
  return (
    <Icons
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      click={click}
    >
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1, duration: 1 }}
      >
        <Link href="https://www.pond5.com/artist/yosilon?tab=footage">
          <a target="_blank">
            <BsFillCameraVideoFill />
          </a>
        </Link>
      </motion.div>
      {/* <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1, duration: 1 }}
      >
        <Link href="https://github.com/yosefus?tab=repositories">
          <a target="_blank">
            <AiFillGithub />
          </a>
        </Link>
      </motion.div> */}
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1.2, duration: 1 }}
      >
        <Link href="https://www.shutterstock.com/g/yosefus_flavius">
          <a target="_blank">
            <SiShutterstock />
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1.4, duration: 1 }}
      >
        <Link href="https://www.facebook.com/yosefus.flavius.1">
          <a target="_blank">
            <BsFacebook />
          </a>
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', delay: 1.6, duration: 1 }}
      >
        <Link href="https://www.linkedin.com/in/yosef-yahav-612694215/">
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
      </motion.div>
      <Line click={click} />
    </Icons>
  );
}
