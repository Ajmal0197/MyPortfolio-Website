import { FC } from 'react'
import { HERO_CONTENT } from '@/constants'

const About: FC = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <div className=" py-6 font-light tracking-wide">
                        {HERO_CONTENT.split('\n').map((line, index) => (
                            <p key={index}>{line.trim()}<br /></p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About