import React from 'react'

function Footer() {
  return (
    <div className="bg-black text-white h-20 flex justify-end items-center p-4">
      {/* h-20 est approximativement égal à 70px */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Nous Contacter
      </button>
    </div>
  )
}

export default Footer;
