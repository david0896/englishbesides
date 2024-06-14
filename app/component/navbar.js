"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return (
        <div 
            className={`${offset > 0 ? "bg-[#fcfcfc]" : "lg:bg-transparent"} transition-colors duration-500  border-b-2 border-solid border-[#fc00fc] z-50 sticky top-0 fixed:bg-white`}
        >
            <div className='lg:w-9/12 lg:mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="text-[#6e5467] font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/#seccion1">Objetivo</Link></li>
                            <li><Link href="/#seccion2">Pemsum</Link></li>
                            <li><Link href="/#seccion3">Fortalezas</Link></li>
                            <li><Link href="/#seccion4">Preguntas</Link></li>
                        </ul>
                        </div>
                        <Link href="/" className="btn btn-ghost text-xl">
                            <img src='https://i.postimg.cc/xTnY7v1j/logo-english-besides.png' alt='Logo english besides' className=' w-28 h-20 object-cover object-bottom'/>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#6e5467] font-medium">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/#seccion1">Objetivo</Link></li>
                            <li><Link href="/#seccion2">Pemsum</Link></li>
                            <li><Link href="/#seccion3">Fortalezas</Link></li>
                            <li><Link href="/#seccion4">Preguntas</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end pr-4 lg:pr-0">
                        <Link href="https://api.whatsapp.com/send/?phone=584241948614&text&type=phone_number&app_absent=0" className="btn text-[#6e5467]">WhatsApp</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar