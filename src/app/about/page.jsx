import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>
            <Image
                src="/about.png"
                width={500}
                height={500}
                alt="Beautiful landscape photo from Unsplash"
            />
        </div>
    );
};

export default About;
