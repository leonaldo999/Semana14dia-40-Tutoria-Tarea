// import React from 'react'
export const Card = () => {
  return (


    <div className="max-w-mx bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className='flex justify-center items-center pt-12'>
        <img className="object-contain h-80 w-80" src="https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png" alt="Logo Del real Madrid" />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real Madrid</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">El Real Madrid Club de Fútbol, conocido simplemente como Real Madrid, es uno de los clubes más emblemáticos y exitosos del mundo. Fundado en 1902, ha dejado una huella imborrable en la historia del fútbol, tanto a nivel nacional como internacional..</p>
        <a href="https://www.realmadrid.com/es-ES" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>

  )
}
