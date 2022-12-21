
import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../public/assets/projects/property.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem 
                projectImg = {propertyImg}
                projectName = 'Property Finder'
                projectLang = 'React.js'
                projectUrl = '/property'
            />   

            <ProjectItem 
                projectImg = {netflixImg}
                projectName = 'Netflix Clone'
                projectLang = 'React.js'
                projectUrl = '/netflix'
            />

            <ProjectItem 
                projectImg = {cryptoImg}
                projectName = 'Crypto App'
                projectLang = 'React.js'
                projectUrl = '/crypto'
            />

            <ProjectItem 
                projectImg = {twitchImg}
                projectName = 'Twitch Clone'
                projectLang = 'React.js'
                projectUrl = '/twitch'
            />

            </div>
        </div>
    </div>
  )
}

export default Projects