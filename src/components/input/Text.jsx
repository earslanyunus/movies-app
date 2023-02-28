import React from 'react';

function Text({label="Label",placeholder="Test",id}) {

    return (

        <div className={'flex flex-col gap-1.w-full'}>
            <label className='font-medium text-text-sm  text-gray-700' htmlFor={id}>{label}</label>
            <input  name="" id={id} placeholder={placeholder} className='w-full rounded text-gray-900 py-2.5 px-3.5 rounded-lg border border-gray-300  placeholder:text-gray-500 focus:border-primary-300  focus:shadow-[0px_0px_0px_4px_#F4EBFF]'/>
        </div>

    );
}

export default Text;