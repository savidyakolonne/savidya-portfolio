import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaEnvelope ,FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hide success message after 3 seconds
  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount or re-run
    }
  }, [isSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSent(false);

    const now = new Date();
    const formattedTime = now.toLocaleString();

    // Safely set hidden time input value
    formRef.current.elements["time"].value = formattedTime;

    emailjs
      .sendForm(
        "service_iftg00o",       // Your EmailJS Service ID
        "template_g6qso6d",      // Your EmailJS Template ID
        formRef.current,
        "aOB5z04sr58AnUYhl"      // Your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="border-stone-900 pb-20 px-4">
      <h2 className="my-10 text-center text-4xl font-bold">Contact Me</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="border border-gray-300 p-3 rounded-md"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="border border-gray-300 p-3 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="border border-gray-300 p-3 rounded-md"
        ></textarea>

        {/* Hidden fields for EmailJS template variables */}
        <input type="hidden" name="name" value="Portfolio Visitor" />
        <input type="hidden" name="title" value="New Portfolio Contact Message" />
        <input type="hidden" name="time" />

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {isSent && (
          <p className="text-green-500 text-center mt-2">
            ✅ Message sent successfully!
          </p>
        )}
      </form>

      <br />
      
      <div className="text-center tracking-tighter mb-8 text-white">
  <p className="my-2 flex items-center justify-center gap-2">
    <FaMapMarkerAlt className="text-blue-500" /> {CONTACT.address}
  </p>
  <p className="my-2 flex items-center justify-center gap-2">
    <FaWhatsapp className="text-green-500" /> {CONTACT.phoneNo}
  </p>
  <p className="my-2 flex items-center justify-center gap-2">
    <FaEnvelope className="text-red-500" /> {CONTACT.email}
  </p>
</div>


    </div>
  );
};

export default Contact;
