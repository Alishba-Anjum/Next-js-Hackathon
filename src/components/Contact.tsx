import Image from 'next/image';
import React from 'react';

const ContactPage = ({
  image,
  heading,
  p1,
  p2,
}: {
  image: string; // Use string for the `image` prop for better compatibility with `next/image`.
  heading: string;
  p1: string;
  p2: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm md:max-w-md lg:max-w-lg">
      {/* Heading Section */}
      <div className="flex gap-4 items-center">
        <Image src={image} alt="logo" width={25} height={28} />
        <h1 className="text-xl md:text-2xl font-semibold">{heading}</h1>
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-2">
        <p className="text-base md:text-lg">{p1}</p>
        <p className="text-base md:text-lg">{p2}</p>
      </div>
    </div>
  );
};

export default ContactPage;


// import Image from 'next/image'
// import React from 'react'

// const ContactPage = ({ image, heading, p1, p2 }: {
//     image: any,
//     heading: string,
//     p1: string,
//     p2: string

// }) => {
//     return (
//         < div className='flex flex-col gap-4 '>
//             <span className='flex gap-4'>
//                 <Image src={image} alt='logo' width={25} height={28}/>
//                 <h1 className='text-2xl font-semibold'>{heading}</h1>
//             </span>
//             <div>
//             <p className='text-lg w-[200px]'>{p1}</p>
//             <p className='text-lg w-[200px]'>{p2}</p>

//             </div>
//         </div>
//     )
// }

// export default ContactPage
