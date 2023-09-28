import {useRef} from "react";
import emailjs, { send } from '@emailjs/browser';


export default function ContactMe() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwwq5jf', 'template_z0rjoav', form.current, 'AvD_-lckFeY15ZJ5P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        
        <h2 style={{color:'#f07900'}} className="contact--heading">Let's Get In Touch</h2>
        <p className="text-lg descrContact">
        Please feel free to reach out to me for any inquiries or potential career opportunities via LinkedIn or E-Mail.
        </p>
        <div>
          <button className="btn btn--contact" 
           onClick={() => {
            window.open("https://linkedin.com/in/love-bhusal","_blank"); 
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
          <h6 className="cbtn--text">Connect on LinkedIn</h6>
          </button>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md" style={{color:'#fff'}}>First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md" style={{color:'#fff'}}>Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md" style={{color:'#fff'}}>Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md" style={{color:'#fff'}}>Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              placeholder="Not Required"
            />
          </label>
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md" style={{color:'#fff'}}>Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        
        <div>
          <button className="btn btn-primary contact--form--btn" type='submit'>Submit</button>
        </div>
      </form>
    </section>
  );
}
