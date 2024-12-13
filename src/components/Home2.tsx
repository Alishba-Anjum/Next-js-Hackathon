import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Homepage2 = ({ heading, linkText, bgImage }
    : {
        heading: string,
        linkText: string,
        bgImage: any
    }
) => {
    return (
        <div className='w-full flex flex-col lg:flex-row md:h-[300px] relative p-4 gap-2'>
            {/* Image Section */}
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image 
                    src={bgImage} 
                    alt='table' 
                    height={600} 
                    width={1092} 
                    className='rounded-lg object-cover w-full max-w-[600px] h-auto'
                />
            </div>
            {/* Content Section */}
            <div className='w-full lg:w-1/2 flex flex-col  lg:items-start gap-6  lg:text-left'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>{heading}</h1>
                <Link 
                    href="#" 
                    className="text-lg md:text-xl border-b-2 border-black w-[100px] h-[40px] hover:text-gray-700">
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default Homepage2;




// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Homepage2 = ({ heading, linkText, bgImage }
//     : {
//         heading: string,
//         linkText: string,
//         bgImage : any
//     }
// ) => {
//     return (
//         <div className='w-[605px] h-[562px] flex flex-col  relative  '>
//             <Image src={bgImage} alt='table' height={600} width={1092} className=' absolute h-[550px] w-[600px] '/>
//             <div className='h-[300px] flex flex-col gap-6 relative top-96 left-32 ' >
//             <h1 className='text-4xl font-semibold'>{heading}</h1>
//             <Link href="#"  className="text-xl border-b-2 border-black w-24  flex flex-col gap-4">{linkText} <span>   </span></Link>
//             </div>
//         </div>
//     )
// }

// export default Homepage2
