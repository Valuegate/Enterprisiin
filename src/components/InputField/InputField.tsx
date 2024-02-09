"use client"
import React from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';
import { ReactNode, FC } from "react";
import Link from 'next/link';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface iMyTextField {
    name: string;
    type: string;
  }

const MyTextField: FC<iMyTextField> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const InputField = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<Values>) => (
        <Form>
            <div className="mb-4">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder='Enter your first name' className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="last-name" name="last-name" placeholder='Enter your last name' className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" placeholder='Enter your email address' className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder='+234' className="placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full" />
            </div>
            <label className="flex items-center text-base font-medium text-light-black-4 mb-8" htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              className="custom mr-2 text-green w-4 h-4"
            />
            By signing up, I agree to the <Link href={'#'} className='text-light-blue'>Terms of service</Link> 
          </label>
            <div className="mt-4">
                <button type="submit" className="bg-light-blue rounded w-full h-12 text-white">Create Account</button>
            </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default InputField;