import { CONTACT } from "."
import {motion} from 'framer-motion'

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

         </motion.div>
        </div>


    )
}

export default Contacts