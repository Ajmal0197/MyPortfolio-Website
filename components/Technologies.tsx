import { FC } from 'react';
import { BiLogoRedux } from 'react-icons/bi';
import { DiNodejs, } from 'react-icons/di';
import { RiNextjsFill, RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Technologies: FC = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:scale-110'>
                    <TbBrandReactNative className='text-7xl text-blue-500' />
                    <p className='text-center'>React Native</p>
                </div>
                <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:scale-110'>
                    <BiLogoRedux className='text-7xl text-purple-600' />
                    <p className='text-center'>Redux</p>
                </div>
                <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:scale-110'>
                    <RiReactjsLine className='text-7xl text-blue-400' />
                    <p className='text-center'>React JS</p>
                </div>
                <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:scale-110'>
                    <RiNextjsFill className='text-7xl text-black' />
                    <p className='text-center'>Next JS</p>
                </div>
                <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:scale-110'>
                    <SiMongodb className='text-7xl text-green-500' />
                    <p className='text-center'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform duration-300 hover:scale-110'>
                    <DiNodejs className='text-7xl text-green-600' />
                    <p className='text-center'>NodeJS</p>
                </div>
            </div>
        </div>
    );
};

export default Technologies;