import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSent(false);

    const now = new Date();
    const formattedTime = now.toLocaleString();

    formRef.current.elements["time"].value = formattedTime;

    emailjs
      .sendForm(
        "service_iftg00o",
        "template_g6qso6d",
        formRef.current,
        "aOB5z04sr58AnUYhl"
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

      <div className="mt-10 max-w-xl mx-auto text-white">
        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border border-stone-800 bg-stone-900/40 p-4">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-blue-500 text-lg" />
            <p className="text-sm sm:text-base break-words">{CONTACT.address}</p>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-stone-800 bg-stone-900/40 p-4">
            <FaEnvelope className="mt-1 shrink-0 text-red-500 text-lg" />
            <p className="text-sm sm:text-base break-words">{CONTACT.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;