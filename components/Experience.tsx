import { EXPERIENCES } from "@/constants";
import { FC } from "react";

const Experience: FC = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </div>
                        <div className='w-full max-w-xl'>
                            <a href={experience.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                {experience.company}
                            </a>
                            <p className='text-lg'>{experience.role}</p>
                            <p className='text-sm text-neutral-400'>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Experience