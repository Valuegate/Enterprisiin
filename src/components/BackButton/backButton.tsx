"use client"
import React from 'react';
import {  useNavigate } from 'react-router-dom'
import Link from 'next/link';
import { ArrowBackIcon } from '@/public/icons';

const BackButton = () => {
    const navigate = useNavigate()

  return (
    <div className="text-green cursor-pointer flex items-center justify-center gap-3 pt-12" onClick={() => navigate(-1)}>
    {/* // <Link href={""} className="text-red-500 cursor-pointer flex items-center gap-3 pt-8 justify-center"> */}
      <ArrowBackIcon />
      <span className="font-medium">Back</span>
    {/* // </Link> */}
     </div> 
  );
};

export default BackButton;