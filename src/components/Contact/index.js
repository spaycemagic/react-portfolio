import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
      return  setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
    <>
        <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o','n','t','a','c','t', ' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                    Hi im Jo Avellina! As developer, my main is to continually learn and my skills.
                     I thrive on solving complex problems and finding efficient solutions through.
                      I enjoy staying up-to-date with the technologies and trends in the industry, 
                      as it allows me to broaden my knowledge and apply it to my work, 
                      with fellow developers is important to me, 
                      as I believe that working together leads to better results. 
                      I value clean and user-friendly designs, and I strive to create robust and scalable software. 
                      Challenges are opportunities for growth, and I welcome them as chances to expand my skillset. 
                      Ultimately, my passion lies in the ability to create impactful solutions using my coding expertise. 
                      If you'd like to get in touch, feel free to contact me.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

        </div>
        <Loader type="pacman"/>
    </>)
}

export default Contact