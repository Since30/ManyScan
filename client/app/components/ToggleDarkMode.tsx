'use client' // Nécéssaire pour pouvoir utiliser onChange

// Source du toggle : https://tw-elements.com/docs/react/forms/switch/
// https://bobbyhadz.com/blog/typescript-react-onchange-event-type

import React from 'react';

// On définit les arguments/props dans une interface
// value: valeur originale du toggle
// onChangeHandler: fonction callback. Est appelée lors d'un changement d'état
// label: String affiché à côté du toggle

interface Props {
    value: boolean;
    onChangeHandler: (val: boolean) => void;
    label: string;
}

export default function Toogle (props: Props) {

    let state: boolean = props.value
    const handleChange = () => {
        state = !state
        console.log(state)
        props.onChangeHandler(state)
    }

  return (
      <div className="flex-row text-center align-middle justify-center">
    
            <input
            className="hidden peer"
            type="checkbox"
            role="switch"
            onChange={handleChange}
            id="flexSwitchCheckDefault" />
        
          <label
              className="block text-xs w-20 h-9 rounded-full border border-light-card dark:border-white hover:cursor-pointer transition ease-out duration-4 after:content-[''] after:block after:relative after:top-[2px] after:left-[4px] after:w-[30px] after:h-[30px] after:bg-[url('/moon.svg')] after:rounded-full after:transition after:ease-out after:duration-4 after:peer-checked:bg-[url('/sun.svg')] after:peer-checked:translate-x-10"
              htmlFor="flexSwitchCheckDefault"
          > </label>
      </div>
  );
}