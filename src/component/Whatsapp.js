import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
const Whatsapp = () => {
  return (
    <>
      <main class="animate__animated animate__bounce animate__infinite infinite hello">
        <a
          href="https://api.whatsapp.com/send?phone=+918800207858&amp;text=Hi"
          target="blank"
          class="btn-whatsapp-pulse"
        >
          <BsWhatsapp className="react-icons" />
        </a>
      </main>
    </>
  );
};

export default Whatsapp;
