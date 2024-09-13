import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { FC } from 'react';

interface NavbarProps {
    // Define your props here, for example:
    // title: string;
    // links: Array<{ name: string; url: string }>;
}

const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md'>
            <div className="flex flex-shrink-0 items-center">
                {/* <Image className='mx-2 w-10' src={logo} alt="logo" /> */}
            </div>
            <div className='flex items-center gap-4 text-3xl'>
                <a href="https://www.linkedin.com/in/ajmal-hasan-00b71747/" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Ajmal0197" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                    <FaGithub />
                </a>
                <a href="https://dev.to/ajmal_hasan" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-200 hover:scale-125">
                    <FaDev />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;