"use client";
import { CONTACT } from '@/constants';
import { FC } from 'react';

const Contact: FC = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Contact</h2>
            <div className='text-center tracking-tighter'>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <span
                    className='border-b cursor-pointer'
                    onClick={() => copyToClipboard('ajmal0197@gmail.com')}
                >
                    ajmal0197@gmail.com
                </span>
            </div>
        </div>
    );
};

export default Contact;