import Head from 'next/head';
import React from 'react';

export default ({ title, children }) => (
  <>
    <Head>
      <title>Kadi Hill | {title}</title>
    </Head>
    <h1>{title}</h1>
    <div className='blog-content'>{children}</div>
    <style jsx>{`
      h1 {
        font-weight: 800;
        margin: 0.3em 0 1em 0;
      }
    `}</style>
  </>
);
