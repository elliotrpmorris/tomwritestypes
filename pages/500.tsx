import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import { Header } from '../components/header';
export default function Custom500() {
  return (
    <Layout>
      <NextSeo
        title="Mozstro Cloud Consulting - Internal server error"
        description="Internal server error on our side."
      />
      <Header>
        <h1 className="text-4xl  font-bold lg:text-7xl  text-center text-ebonyclay">
          Internal server error.
        </h1>
        <h2 className="text-center text-ebonyclay text-3xl">
          Oops this is embarrassing. We will be back soon.
        </h2>
      </Header>
      <section>
        <div className="flex my-4 justify-center">
          <h2>500.</h2>
        </div>
      </section>
    </Layout>
  );
}
