import React, { useContext, useState } from 'react';
import { LanguageContext } from './../../pages/_app';

import Image from 'next/image';
import { Box, Text } from './style';

// icons
import { BsGithub, BsFillBootstrapFill, BsFiletypeSql, } from 'react-icons/bs';
import { FaLess } from 'react-icons/fa';
import { TbBrandThreejs } from 'react-icons/tb';
import { MdAnimation } from 'react-icons/md';
import { AiFillHtml5, AiOutlineGlobal } from 'react-icons/ai';
import { DiCss3, DiReact, DiSass, DiJavascript1 } from 'react-icons/di';
import { SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiMui, SiTypescript, SiApollographql, SiTailwindcss, SiPrisma } from 'react-icons/si';

const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
};

const icons = {
  html: <AiFillHtml5 />,
  css: <DiCss3 />,
  react: <DiReact />,
  next: <SiNextdotjs />,
  node: <SiNodedotjs />,
  mongo: <SiMongodb />,
  express: <SiExpress />,
  sass: <DiSass />,
  animation: <MdAnimation />,
  js: <DiJavascript1 />,
  bootstrap: <BsFillBootstrapFill />,
  less: <FaLess />,
  material: <SiMui />,
  graphql: <SiApollographql />,
  ts: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  sql: <BsFiletypeSql />,
  prisma: <SiPrisma />,
  three: <TbBrandThreejs />,
};

export default function WorkCard({ workItem }) {
  const [lang] = useContext(LanguageContext),
    [showOverlay, setShowOverlay] = useState(false);

  const { title, description, note } = workItem[lang],
    { tec, img_path, git_link, web_link } = workItem;

  return (
    <Box
      onClick={() => setShowOverlay(!showOverlay)}
      variants={item}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >

      <Text
        initial={{ y: -200, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ type: 'keyframes', duration: 1 }}>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>{note}</p>
        <Image src={img_path} layout='fill' objectFit='cover' alt={title} />
        <div className="tec-box">
          {tec.map((item, i) => (
            <span key={`key${i}`}>{icons[item]}</span>
          ))}
        </div>
      </Text>
      <span className='action'>
        {git_link && (
          <a onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" href={git_link}>
            <BsGithub />
          </a>
        )}
       {web_link && <a onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" href={web_link}>
          <AiOutlineGlobal />
        </a>}
      </span>
    </Box>
  );
}
