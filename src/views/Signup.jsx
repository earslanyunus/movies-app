import React from 'react';
import logo from '../assets/logo.svg';
import Input from "../components/input/Input.jsx";
import {Formik, Form, ErrorMessage} from "formik";
import Button from "../components/button/Button.jsx";
import * as Yup from 'yup';
import File from "../components/input/File.jsx";
import fullLogo from "../assets/LogoandLogotype.svg";
import mailIcon from "../assets/mailIcon.svg";

const signUpSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(12, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters.').max(50, 'Too Long!').required('Required'),
    image: Yup.mixed().required('Required')
})

function Signup() {
    return (
        // 20 px to rem =
        <div className='px-4 pt-14 pb-8 flex w-full lg:p-0 lg:h-screen lg:max-h-screen lg:min-h-[768px]'>
            <div className='flex flex-col items-center justify-between w-full   lg:w-1/2 lg:px-4 lg:pt-14 lg:pb-8'>
                <img className='hidden lg:block' src={fullLogo} alt="logo"/>
                <div className='w-full h-full flex flex-col items-center justify-center lg:w-1/2'>
                    <img className='h-[32px] w-[32px] 2xl:h-[64px] 2xl:w-[64px] lg:hidden' src={logo} alt=""/>
                    <p className='text-display-xs font-semibold mt-6 lg:self-start'>Create an account</p>
                    <p className='text-text-md font-normal mt-2 lg:self-start'>Watching alone is enough no more :)</p>
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                            image: null,

                        }
                        }
                        validationSchema={signUpSchema}
                        onSubmit={values => {
                            console.log(values)
                        }
                        }
                    >
                        {({ handleSubmit}) => {

                            return (
                                <Form onSubmit={handleSubmit} className={'mt-8 flex flex-col gap-5 lg:w-full'}>
                                    <div>
                                    <Input label='Username*' name='username' type='text'
                                           placeholder='Enter your username'/>
                                    <ErrorMessage name={'username'}/>
                                    </div>
                                    <div>
                                    <Input label='Email*' name='email' type='email' placeholder='Enter your email' extraClass={'mt-5'}/>
                                    <ErrorMessage name={'email'}/>
                                    </div>
                                    <div>
                                    <Input label='Password*' name='password' type='password'
                                           placeholder='Enter your password'/>
                                    <ErrorMessage name={'password'}/>
                                    </div>
                                    <div>
                                    <File label={'Profile Picture'} name={'image'}/>
                                    <ErrorMessage name={'image'}/>
                                    </div>
                                    <div className={'mt-1'}>
                                    <Button text={'Sign up'} type={'submit'} variant={'primary'} wFull={true}/>
                                    <Button text={'Sign up with Google'} type={'submit'} variant={'secondary'} wFull={true} isSocial={true} extraClass={'mt-4'}/>
                                    </div>
                                </Form>
                            )
                        }
                        }
                    </Formik>
                    <div className='flex mt-8'>
                    <p>Already have an account?</p>
                        <Button text={'Log in'} type={'submit'} variant={'link'} extraClass={'ml-1'}/>
                    </div>

                </div>
                <div className='hidden lg:flex justify-between items-center w-full'>
                    <p className='font-normal text-text-sm text-gray-600'>© Movies App</p>
                    <div className='flex gap-2'>
                        <img src={mailIcon} alt="mailicon"/>
                        <p className='font-normal text-text-sm text-gray-600'>yyunus.earslan@gmail.com</p>

                    </div>
                </div>
            </div>
            <div className='hidden lg:block lg:w-1/2 bg-signUp bg-cover'>
            </div>
        </div>

    );
}

export default Signup;