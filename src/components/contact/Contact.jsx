import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1p1uvu', 'template_jw7rnz5', form.current, 'oHiCGL-DmaiXcr9Wi')
      .then((result) => {
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kri.gkp007@gmail.com</h5>
            <a href="mailto:kri.gkp007@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@krishna09kks</h5>
            <a href="https://ig.me/m/krishna09kks" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            {/* <h5>kri.gkp007@gmail.com</h5> */}
            <a href="https://api.whatsapp.com/send/?phone=918318764083" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Yur Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send your message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
