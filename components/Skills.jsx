
import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div id='skill' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <Skill 
              skillImg= '/../public/assets/skills/html.png'
              skillTitle= "HTML"
            />

            <Skill 
              skillImg= '/../public/assets/skills/css.png'
              skillTitle= "CSS"
            />

            <Skill 
              skillImg= '/../public/assets/skills/javascript.png'
              skillTitle= "Javascript"
            />

            <Skill 
              skillImg= '/../public/assets/skills/react.png'
              skillTitle= "React.js"
            />

            <Skill 
              skillImg= '/../public/assets/skills/node.png'
              skillTitle= "Node.js"
            />

            <Skill 
              skillImg= '/../public/assets/skills/tailwind.png'
              skillTitle= "Tailwind"
            />

            <Skill 
              skillImg= '/../public/assets/skills/mongo.png'
              skillTitle= "Mongo"
            />

            <Skill 
              skillImg= '/../public/assets/skills/nextjs.png'
              skillTitle= "Next.js"
            />

        </div>
        </div>
    </div>
  )
}

export default Skills