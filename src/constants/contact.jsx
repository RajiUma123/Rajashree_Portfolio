import { CONTACT } from "."
import {motion} from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contacts =()=>{
    return (
        <div className="border-b border-neutral-900 pb-20" id="contactme">
         <motion.h1 whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0,y:-100 }}
      transition={{duration:0.5}}className="text-4xl text-center my-10">Get In Touch </motion.h1>
         <motion.div whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0,x:-100 }}
      transition={{duration:2}} className="text-center tracking-tighter">
             <p className="my-4">{CONTACT.address}</p>
             <p className="my-4">{CONTACT.phoneNo}</p>
             <a href="#" className="border-b">{CONTACT.email}</a>
             <div className="navbar-icons">
          <a href="https://www.linkedin.com/in/rajashree-nair-64a624185/"><FaLinkedin /></a>
          <a href="https://github.com/RajiUma123?tab=repositories"><FaGithub /></a>
           
            </div>

         </motion.div>
        </div>


    )
}

export default Contacts