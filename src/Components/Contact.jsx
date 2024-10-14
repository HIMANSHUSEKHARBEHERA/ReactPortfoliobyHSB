import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_644qcqs', 'template_ed3n5ze', form.current, {
        publicKey: 'uP_EdPBCN78d3boqQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='ml-auto md:ml-96 p-4  pt-5 items-center mb-8 h-auto md:w-2/4 rounded-lg shadow-2xl'>
      <h1 className='text-4xl font-bold text-center'>CONTACT ME</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='ml-10 pt-10'>
            <div>
          <label className=' text-black text-2xl'>Name</label><br/>
          <input
                                type="text"
                                name="from_name"
                                className=" border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full  py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                            /><br/> </div>
                            <div className='mt-5'>
          <label className=' text-black text-2xl'>Email</label><br/>
          <input
                                type="text"
                                name="from_email" 
                                
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Email" required
                            />
                            </div>
                            <div className='mt-5'>
          <label className=' text-black text-2xl'>Message</label><br/>
          <textarea
                                name="message"
                                className="border-b border-yellow-900 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2 "
                                rows="4"
                                placeholder="Message" 
                            ></textarea>
                            </div>
                       <div className='mt-5 '>
                            <button 
                            type="submit" 
                            onClick={()=>document.getElementById('my_modal_3').showModal()}
                            className="bg-sky-500 text-amber-50 mx-auto mt-4 p-2 mb-5 w-48">
                            Submit
                        </button>
                        <dialog id="my_modal_3" className="modal md:ml-96 md:mt-40 rounded-md md:h-40 md:w-96 h-[20%] w-[70%] mt-80 ml-14">
  <div className="modal-box ">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg  ml-5 mt-5 mb-2">Thank you !</h3>
    <hr/>
    <p className="py-4 ml-5 mr-5 ">For reached out me. As soon as possible my team contacting you. </p>
  </div>
</dialog>
                            </div>
                            


                            
          </div>
        </form>
      </div>

    </div>
    </>
    
  );
};

export default Contact;


