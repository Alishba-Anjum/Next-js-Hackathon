import Image from 'next/image';
import React from 'react';

const Home3 = ({
  bgPicture,
  text,
  price,
}: {
  bgPicture: string;
  text: string;
  price: string;
}) => {
  return (
    <div className="flex h-auto flex-col items-center gap-3 sm:gap-4 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] p-2 sm:p-4">
      {/* Image Section */}
      <Image
        src={bgPicture}
        alt="sofa"
        height={384}
        width={600}
        className="w-full h-auto rounded-md object-cover"
      />
      
      {/* Text Section */}
      <div className="text-center">
        <p className="text-sm sm:text-base md:text-lg font-medium">{text}</p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default Home3;
``




// import Image from 'next/image'
// import React from 'react'

// const Home3 = ({bgPicture, text, price}:{
//     bgPicture: any,
//     text: string,
//     price:string
// }) => {
//   return (
//     <div className='h-[350px] w-[300px] ' >
//         <Image  src={bgPicture} alt='sofa' height={384} width={600} className='h-[384px] w-[600px]'/>
//         <p className='text-lg'>{text}</p>
//         <p className='text-2xl font-semibold'>{price}</p>
      
//     </div>
//   )
// }

// export default Home3

