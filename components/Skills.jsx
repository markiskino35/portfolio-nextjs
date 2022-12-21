
import React from 'react'
import Skill from './Skill'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css1.png'
import javascriptLogo from '../public/assets/skills/JavaScript-logo.png'
import react_logo from '../public/assets/skills/logo-react-icon.png'
import nodeImg from '../public/assets/skills/node.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import mongoImg from '../public/assets/skills/mongo.png'
import nextImg from '../public/assets/skills/nextjs.png'

const Skills = () => {
  return (
    <div id='skill' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <Skill 
              skillImg= {htmlImg}
              skillTitle= "HTML"
            />

            <Skill 
              skillImg= {cssImg}
              skillTitle= "CSS"
            />

            <Skill 
              skillImg= {javascriptLogo}
              skillTitle= "Javascript"
            />

            <Skill 
              skillImg= {react_logo}
              skillTitle= "React.js"
            />

            <Skill 
              skillImg= {nodeImg}
              skillTitle= "Node.js"
            />

            <Skill 
              skillImg= {tailwindImg}
              skillTitle= "Tailwind"
            />

            <Skill 
              skillImg= {mongoImg}
              skillTitle= "Mongo"
            />

            <Skill 
              skillImg= {nextImg}
              skillTitle= "Next.js"
            />

        </div>
        </div>
    </div>
  )
}

export default Skills