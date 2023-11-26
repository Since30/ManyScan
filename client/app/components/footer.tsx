import React from 'react'

function Footer() {
  return (
    <div className="transition flex justify-between py-4 items-center font-bold bg-light-card dark:bg-dark-card px-20 m-auto">
      {/* h-20 est approximativement égal à 70px */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Nous Contacter
      </button>
    </div>
  )
}

export default Footer;
