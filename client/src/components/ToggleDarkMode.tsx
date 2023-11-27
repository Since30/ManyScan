'use client' 



import React from 'react';

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