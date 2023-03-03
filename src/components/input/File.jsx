import React, {useRef} from 'react';
import {useField} from "formik";

function File({label, ...props}) {
    const [field, meta, helpers] = useField(props);


    const clickHandler = () => {
        inputRef.current.click();
    };

    const changeHandler = (e) => {
        helpers.setValue(e.target.files[0]);
    };

    const inputRef = useRef(null)

    return (
        <label>

            {label}
            <button type={'button'}  onClick={clickHandler} className='w-full border rounded-lg border-gray-200 flex flex-col items-center justify-center py-4 px-6'>

                <p className='text-text-sm font-semibold text-primary-700'>Click to upload</p>
                <p className='text-text-xs font-normal text-gray-600'>PNG, JPG or GIF (max. 20mb)</p>
            </button>
            <input ref={inputRef} type="file" className="hidden" onChange={changeHandler}  {...props} />
        </label>
    );
}

export default File;