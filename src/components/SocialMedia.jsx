import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div className="">
            <a href='https://github.com/Abhayrajdunerya' target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/abhay-raj-dunerya-bbb738262/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <div className="">
          <a href="https://www.instagram.com/abhayrajdunerya/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia