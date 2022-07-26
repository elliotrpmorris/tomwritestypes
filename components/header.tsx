import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Nav from './nav';

type HeaderProps = {
  children: React.ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = (
  {
    children,
  },
) => (
  <header>
    <div className=" rounded pb-8 p-4">
      <div className="flex flex-wrap lg:flex-nowrap justify-around">
         <div className='flex items-center text-center inline-block rounded p-6 bg-electricBlue text-6xl font-bold'>
        <h1 className='text-left'>TomWritesTypes</h1>
    </div>
       <Nav /> 
      </div>
      {children}
    </div>
    
  </header>
);
