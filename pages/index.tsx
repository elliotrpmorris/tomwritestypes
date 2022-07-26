import { NextSeo } from 'next-seo'

import { Header } from '../components/header'
import Layout from '../components/layout'
import Image from 'next/image';

export default function Home() {
  return (
     <Layout>
      <NextSeo
        title="Tom Writes Types"
        description="Blog site."
      />
      <Header>
      </Header>
      <div className='bg-electricBlue p-12 rounded '><h2 className='text-3xl'>About me</h2>
       <div   className=" text-center mr-4 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0">
           <Image
                className="rounded-full"
                  src={`/tom.png`}
                  alt={`Tom France`}
                  width={96}
                  height={96}
                  priority
                />
      
      </div></div>
      </Layout>
   
  )
}
