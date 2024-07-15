import React from 'react';
import Container from '../Container/Container';

const Empowering = () => {
  return (
    <div className="bg-[#dadee4] ">
      <Container classes={'px-6 py-[3rem] md:py-[8rem] md:px-[8rem]'}>
        <h1 className="text-empowering-heading text-center font-mulish font-medium text-[32px] md:text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">Empowering Decentralization</h1>
        <p className="text-empowering-description text-center font-inter font-normal text-sm md:text-base lg:text-lg mb-12">Unlock the true potential of decentralized governance with our platform. Easily create, join, and participate in DAOs tailored to your needs</p>
      </Container>
    </div>
  );
};

export default Empowering;
