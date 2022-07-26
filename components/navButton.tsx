import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type NavButtonProps = {
  text: string,
  link: string,
}

export const NavButton: FunctionComponent<NavButtonProps> = ({
  text,
  link,
}) => (
  <Link href={`${link}`}>
  <a
    className="bg-equator w-1/2 my-2 lg:my-0 sm:w-auto px-6 py-3 text-blackCoral justify-center text-4xl sm:text-2xl 
            bg-maizeCrayola  lg:bg-electricBlue hover:shadow rounded inline-flex
 hover:scale-105 cursor-pointer"
  
    rel="noopener noreferrer"
  >
    {text}
  </a>
  </Link>
);
