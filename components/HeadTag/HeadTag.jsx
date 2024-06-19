import Head from 'next/head';
import React from 'react';

const HeadTag = () => {
  return (
    <Head>
      <title>Allan Vila | Software Engineer</title>
      <meta
        name='description'
        content="I'm Software Engineer at AVB Marketing that creates and maintains dynamic web interfaces using React.js. I collaborate with designers and backend developers, optimize performance, and perform testing and debugging. I stay updated with industry trends, apply best practices, and participate in code reviews and team meetings. This role ensures high-quality, user-friendly web applications that support the company’s digital marketing efforts."
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content='Allan Vila | Software Engineer' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.rallanvila.com' />
      <meta property='og:image' content='/img/MyCard.png' />
      <meta name='twitter:site' content='@RAllanVila' />
      <meta name='twitter:title' content='Allan Vila | Software Engineer' />
      <meta
        name='twitter:description'
        content="I'm a Software Engineer with a front-end framework and design specialty"
      />
      <meta name='twitter:image' content='/img/AllOneLogo.png' />
      <meta name='twitter:card' content='/img/MyCard.png' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  );
};

export default HeadTag;
