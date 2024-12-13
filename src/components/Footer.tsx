import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col items-center">
      {/* Content Section */}
      <div className="w-full max-w-[1131px] flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between border-b-2 py-8 px-6">
        {/* Address */}
        <div className="text-gray-400 text-center lg:text-left">
          <p className="flex flex-col gap-1">
            400 University Drive Suite 200 Coral
            <span>Gables, FL 33134 USA</span>
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-400">Links</h1>
          <Link href="/" className="font-semibold hover:text-yellow-600">
            Home
          </Link>
          <Link href="/about" className="font-semibold hover:text-yellow-600">
            About
          </Link>
          <Link href="/contact" className="font-semibold hover:text-yellow-600">
            Contact
          </Link>
          <Link href="/shop" className="font-semibold hover:text-yellow-600">
            Shop
          </Link>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-400">Help</h1>
          <span className="font-semibold">Payment Options</span>
          <span className="font-semibold">Returns</span>
          <span className="font-semibold">Privacy Policies</span>
        </div>

        {/* Subscription */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-gray-400">Subscribe</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-black w-[200px] lg:w-[300px] px-2 py-1"
            />
            <button className="font-semibold border-b-2 border-black hover:text-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center py-4 text-sm lg:text-base">
        2022 Meubel House. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;





// import Link from 'next/link'
// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='h-[555px] w-full bg-white flex flex-col justify-center items-center'>
//         <div className='w-[1131px] h-[312px]  flex gap-24 items-center justify-center border-b-2'>
//           <span>
//             <p className='flex flex-col text-gray-400 gap-1'>400 University Drive Suite 200 Coral <span>Gables,</span>
//            <span> FL 33134 USA</span></p>
//           </span>
//           <span className='h-[312px] w-[68px] flex flex-col gap-8 jus'>
//             <h1 className='text-gray-400'>Links</h1>
//             <Link href="/" className='font-semibold hover:text-yellow-600'>Home</Link>
//             <Link href="/about" className='font-semibold hover:text-yellow-600'>About</Link>
//             <Link href="/contact" className='font-semibold hover:text-yellow-600 '>Contact</Link>
//             <Link href="/shop" className='font-semibold hover:text-yellow-600'>Shop</Link>
//           </span>
//           <span className='h-[312px] w-[140px] flex flex-col gap-8'>
//             <h1 className='text-gray-400'>Help</h1>
//             <h1 className='font-semibold '>Payment Options</h1>
//             <h1 className='font-semibold '>Returns</h1>
//             <h1 className='font-semibold '>Privacy Policies</h1>
//           </span>
//           <span className='flex flex-col gap-4 h-[312px]'>
//           <h1 className='text-gray-400'>Help</h1>
//           <span className='flex gap-4'>
//           <input type="text" placeholder='Enter Your Email Address' className='border-b-2 border-black w-[179px] h-[21] '/>
//           <h1 className='font-semibold border-b-2 border-black w-[70px]'>Subscribe</h1>
//           </span>
//           </span>
//         </div>
//         <p className='self-start ml-48 py-7'>2022 Meubel House. All rights reverved.</p>
//       </footer>
//   )
// }

// export default Footer
