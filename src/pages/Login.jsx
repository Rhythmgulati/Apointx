import React, { useState } from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";

function Login() {
  
  const[state,setState] = useState("SignUp");


  return (
    <div className="flex h-[80vh] p-15 items-center justify-center mx-auto ">
    <div className=" w-1/3 border-black-400 rounded-2xl flex flex-col justify-center p-6 h-full shadow-2xl">
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}>

        
       
        {({ isSubmitting }) => (
        <div> 
           <h1 className="text-3xl">{state==="SignUp"?"Sign Up":"Login"}</h1>
        <p>Please sign up to book appointment</p>
        <br />      
        <Form className="my-5">
           {state==="SignUp"?<> <label htmlFor="name" className='block mb-1'>Name:</label>
           <Field className="border-1 w-full rounded-l p-2 text-l" type="text" name="name" />
           <ErrorMessage className="text-red-400" name="email" component="div" /></>:""}
           <label htmlFor="Email" className='block mb-1'>Email:</label>
           <Field className="border-1 w-full rounded-l p-2 text-l" type="email" name="email" />
           <ErrorMessage className="text-red-400" name="email" component="div" />
           <label htmlFor="Password" className='block mb-1'>Password:</label>
           <Field className="border-1 w-full rounded-l p-2 text-l" type="password" name="password" />
           <ErrorMessage className="text-red-400" name="password" component="div" />
           <button className="my-4 bg-blue-500 w-full p-1 rounded-l text-white" type="submit" disabled={isSubmitting} >
            Submit
           </button>
        </Form>
        <p className="cursor-pointer" onClick={()=>setState(state==="SignUp"?"Login":"SignUp")}>Already a user? {state==="SignUp"?"Login":"SignUp"}</p>
        </div>
        )}
      </Formik>
    </div>
    </div>
  )
}

export default Login
