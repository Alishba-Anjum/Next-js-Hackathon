
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Toggle state for modal
  const path = usePathname();
  console.log("Current Path:", path);

  const navs = [
    { name: "Home", route: "/" },
    { name: "Shop", route: "/shop" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <header className="h-[100px] w-full flex items-center lg:justify-end md:justify-between sm:justify-between max-sm:justify-between md:gap-48 sm:24 sm:px-2  md:w-full gap-48 px-6 lg:px-20">
      {/* Logo */}
      <div className="lg:hidden md:flex items-center">
        <Image
          src="/shoplogo.png"
          alt="Logo"
          height={100}
          width={100}
          className="cursor-pointer"
        />
      </div>

      {/* Navigation for Large Screens */}
      <nav className="hidden lg:flex gap-16 text-xl">
        {navs.map((nav, index) => (
          <Link key={index} href={nav.route}>
            <p
              className={`${
                path === nav.route
                  ? "border-b-2 border-black text-yellow-600"
                  : ""
              } hover:text-yellow-600 transition`}
            >
              {nav.name}
            </p>
          </Link>
        ))}
      </nav>

      {/* Icons */}
      <div className="hidden lg:flex items-center gap-16">
        <a href="/myAccount">
          <Image src="/ussericon.png" alt="User Icon" height={28} width={28} />
        </a>
        <Image src="/searcicon.png" alt="Search Icon" height={28} width={28} />
        <Image src="/hearticon.png" alt="Heart Icon" height={28} width={28} />
        <a href="/cart">
          <Image src="/cart.png" alt="Cart Icon" height={28} width={28} />
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setIsModalOpen(!isModalOpen)}
        aria-label="Toggle Menu"
      >
        {isModalOpen ? <MdOutlineCancel /> : <AiOutlineMenu />}
      </button>

      {/* Mobile Menu Modal */}
      {isModalOpen && (
        <div className=" absolute top-[100px]  md:right-48  sm:right-28 h-[400px] w-3/4 bg-white shadow-lg flex flex-col items-center py-10 gap-8 z-50">
          <nav className="flex flex-col gap-5 text-lg font-semibold">
            {navs.map((nav, index) => (
              <Link key={index} href={nav.route}>
                <p
                  className={`${
                    path === nav.route ? "text-yellow-600" : ""
                  } hover:text-yellow-600 transition`}
                >
                  {nav.name}
                </p>
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 items-center mt-auto">
            <a href="/myAccount">
              <Image
                src="/ussericon.png"
                alt="User Icon"
                height={28}
                width={28}
              />
            </a>
            <Image
              src="/searcicon.png"
              alt="Search Icon"
              height={28}
              width={28}
            />
            <Image
              src="/hearticon.png"
              alt="Heart Icon"
              height={28}
              width={28}
            />
            <a href="/cart">
              <Image src="/cart.png" alt="Cart Icon" height={28} width={28} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState } from 'react';
// import { MdOutlineCancel } from "react-icons/md";
// import { AiOutlineMenu } from "react-icons/ai";

// function Header() {
//     const [isModalOpen, setIsModalOpen] = useState(false); // Toggle state for modal
//     const path = usePathname();
//     console.log("Current Path:", path);

//     const navs = [
//         {
//             name: "Home",
//             route: '/'
//         },
//         {
//             name: "Shop",
//             route: '/shop'
//         },
//         {
//             name: "About",
//             route: '/about'
//         },
//         {
//             name: "Contact",
//             route: '/contact'
//         }
//     ];

//     return (
//         <div className='h-[100px] w-[100%] flex items-center justify-end gap-48 px-20 text-lg'>
//             {/* Toggle Button for Modal */}
          
//       <Image src="/shoplogo.png" alt='logo' height={150} width={120} className='lg:hidden md:flex' />
//             {/* Main Navigation */}
//             <nav className='md:hidden lg:flex gap-16'>
//                 {navs.map((nav, index) => (
//                     <Link key={index} href={nav.route}>
//                         <p
//                             className={
//                                 path === nav.route
//                                     ? 'border-b-2 border-black text-yellow-600'
//                                     : ''
//                             }
//                         >
//                             {nav.name}
//                         </p>
//                     </Link>
//                 ))}
//             </nav>

//             {/* Icons Section */}
//             <div className=' lg:flex md:hidden'>
//             <div className=' md:hidden lg:flex gap-16 items-center w-[400px]'>
//                 <a href="/myAccount"><Image src="/ussericon.png" alt='usericon' height={28} width={28} /></a>
//                 <Image src="/searcicon.png" alt='search icon' height={28} width={28} />
//                 <Image src="/hearticon.png" alt='heart icon' height={28} width={28} />
//                 <a href="/cart"><Image src="/cart.png" alt='cart icon' height={28} width={28} /></a>
//             </div>
//             </div>
//             <button 
//                 className='md:hidden text-3xl' 
//                 onClick={() => setIsModalOpen(!isModalOpen)}
//                 aria-label="Toggle Menu"
//             >
//                 <AiOutlineMenu />
//             </button>
//             {/* Modal for Small Screens */}
//             {isModalOpen && (
//                 <div className='h-[450px] w-[500px] bg-white absolute flex flex-col justify-center gap-11 px-11 rounded-md shadow-md top-[100px] right-[68%]'>
//                     <h1 className='text-3xl flex justify-end'>
//                         <button onClick={() => setIsModalOpen(false)} aria-label="Close Menu">
//                             <MdOutlineCancel />
//                         </button>
//                     </h1>
//                     <nav className='flex flex-col gap-7 h-[200px] text-xl font-semibold'>
//                         <Link href="/"> Home</Link>
//                         <Link href="/shop"> Shop</Link>
//                         <Link href="/"> About</Link>
//                         <Link href="/contact">Contact</Link>
//                     </nav>
//                     <div className='flex gap-16 items-center w-[400px]'>
//                         <a href="/myAccount"><Image src="/ussericon.png" alt='usericon' height={28} width={28} /></a>
//                         <Image src="/searcicon.png" alt='usericon' height={28} width={28} />
//                         <Image src="/hearticon.png" alt='usericon' height={28} width={28} />
//                         <a href="/cart"><Image src="/cart.png" alt='usericon' height={28} width={28} /></a>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Header;


// "use client"
// import Image from 'next/image';
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'
// import { MdOutlineCancel } from "react-icons/md";

// function Header() {
//     const path = usePathname();
//     console.log("Current Path:", path);

//     const navs = [
//         {
//             name: "Home",
//             route: '/'
//         },
//         {
//             name: "Shop",
//             route: '/shop'
//         },
//         {
//             name: "About",
//             route: '/about'
//         },
//         {
//             name: "Contact",
//             route: '/contact'
//         }
//     ]
//     return (
//         <div className='h-[100px] w-[100%] flex items-center justify-end gap-48 text-lg white'>

//             <nav className='flex gap-16'>
//                 {navs.map((nav, index) => {
//                     if (path == nav.route) {
//                         return (
//                             <Link key={index} href={nav.route} className='pointer'>
//                                 <p className={path === nav.route ? 'border-b-2 border-black text-black pointer text-yellow-600' : ''}>
//                                     {nav.name}
//                                 </p>
//                             </Link>
//                         )
//                     } else {
//                         return (
//                             <Link href={nav.route} className='pointer'>
//                                 <p>
//                                     {nav.name}
//                                 </p>
//                             </Link>
//                         )
//                     }


//                 })}
//             </nav>
//             <div className='flex gap-16 items-center w-[400px]'>
//                 <a href="/myAccount"><Image src="/ussericon.png" alt='usericon' height={28} width={28} /></a>
//                 <Image src="/searcicon.png" alt='usericon' height={28} width={28} />
//                 <Image src="/hearticon.png" alt='usericon' height={28} width={28} />
//                 <a href="/cart"><Image src="/cart.png" alt='usericon' height={28} width={28} />
//                 </a>
 
//             </div>
//             <div>
//             <div className=' h-[450px] w-[500px] bg-white absolute flex  flex-col justify-center gap-11 px-11  rounded-md shadow-md top-[100px] right-[68%]'>
//                 <h1 className='text-3xl flex justify-end'><MdOutlineCancel /></h1>
//                 <nav className='flex flex-col gap-7 h-[200px] text-xl font-semibold'>
//                     <Link href="/"> Home</Link>
//                     <Link href="/shop"> Shop</Link>
//                     <Link href="/"> About</Link>
//                     <Link href="/contact">Contact</Link>
//                 </nav>
//                 <div className='flex gap-16 items-center w-[400px]'>
//                     <a href="/myAccount"><Image src="/ussericon.png" alt='usericon' height={28} width={28} /></a>
//                     <Image src="/searcicon.png" alt='usericon' height={28} width={28} />
//                     <Image src="/hearticon.png" alt='usericon' height={28} width={28} />
//                     <a href="/cart"><Image src="/cart.png" alt='usericon' height={28} width={28} />
//                     </a>

//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }


// export default Header

