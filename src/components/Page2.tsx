import Image from 'next/image';
import React from 'react';

const Page2 = ({ heading, link }: { heading: string; link: string }) => {
  return (
    <div className="h-[316px] w-full flex flex-col justify-center items-center relative">
      {/* Background Image */}
      <Image
        src="/shop.png"
        alt="shop"
        height={316}
        width={1920}
        className="absolute -z-10 object-cover w-full h-full"
      />

      {/* Content Section */}
      <div className="flex flex-col items-center gap-4 px-4 text-center">
        {/* Logo */}
        <Image src="/shoplogo.png" alt="logo" height={77} width={77} />
        
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold h-[72px] leading-tight">
          {heading}
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex gap-2 items-center text-sm md:text-xl">
          <h1 className="font-semibold">Home</h1>
          <Image src="/arrow.png" alt="arrow" height={8} width={14} />
          <h2>{link}</h2>
        </div>
      </div>
    </div>
  );
};

export default Page2;





// import Image from 'next/image'
// import React from 'react'

// const Page2 = ({ heading, link }: { heading: string; link: string }) => {
//   return (
//     <div className="h-[316px] w-full flex flex-col justify-center items-center ">
//       <Image src="/shop.png" alt="shop" height={316} width={1920} className='absolute -z-10' />
//       <div className='flex flex-col items-center gap-2'>
//       <Image src="/shoplogo.png" alt="logo" height={77} width={77} />
//       <h1 className='text-5xl font-semibold h-[72px]'>{heading}</h1>
//         <div className="flex gap-4 items-center">
//           <h1 className='font-semibold text-xl'>Home</h1>
//           <Image src="/arrow.png" alt="arrow" height={8} width={14} />
//           <h2 className='text-xl'>{link}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page2;
