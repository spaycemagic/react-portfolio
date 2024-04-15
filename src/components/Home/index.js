import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 's', 'e', 'p', 'h', 'A', 'v', 'e', 'l', 'l', 'i', 'n', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v','e','l','o', 'o','p','e','r', '.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                
                    <br /> I'm
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={22} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15} />
                </h1>
                <h2>Frontend Developer / Java Script Expert / YouTuber</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home