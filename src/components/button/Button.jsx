import React from 'react';

function Button({text="Button",wFull=false,type}) {
    const initialClass = `
    ${(type=== 'primary'||type === 'secondary') ? 'py-2.5 px-[1.125rem] rounded-lg text-text-md ':''}
    ${type=== 'primary'? 'bg-primary-600  text-white ':''}
    ${type=== 'link'? 'text-primary-700  font-semibold text-sm' : ' ' } 
    ${wFull? 'w-full' : '' }
    `
    return (
        <>
        <button type={"button"} className={initialClass}>{text}</button>
            <p className='text-x'>Deneme Yazisi</p>
        </>
    );
}

export default Button;