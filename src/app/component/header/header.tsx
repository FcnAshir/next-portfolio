import Link from 'next/link'
import React from 'react'


const header = () => {
  return (
    <div><header className="text-gray-600 body-font bg-cyan-600">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         className="w-10 h-10 text-white p-2 bg-slate-800 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl text-primary">Syed NoorAlam</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center text-[23px]">
        <Link href={"/home"} className="mr-5 hover:text-blue-800">Home</Link>
        <Link href={"/about"} className="mr-5 hover:text-blue-800">About us</Link>
        <Link href={"/contact"} className="mr-5 hover:text-blue-800">Contact us</Link>
        <Link href={"/privacy"} className="mr-5 hover:text-blue-800">Privacy Policy</Link>
      </nav>
      <button className="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"><Link href={'https://github.com/FcnAshir'} target='_blank'>Vist My GitHub</Link>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header></div>
  )
}

export default header