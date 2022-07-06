import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";
import { useForm } from "react-hook-form";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="container mx-auto  my-16 h-screen">
        <div className="max-w-[1300px] bg-[#d3d0df] rounded-3xl mx-auto">
          <div className="grid  lg:grid-cols-3 grid-cols-1">
            <div className=" bg-[#54389e] min-w-[320px] contact-form py-20  relative rounded-l-lg px-2 md:px-10">
              <div>
                <h4 className="text-xl font-bold text-secondary">Get in touch</h4>
                <p className="py-2">
                  we love to hear from you. Our friendly team is always here to chat.
                </p>
              </div>
              <div className="py-4">
                <h4 className="text-lg font-bold text-secondary flex justify-start gap-5 items-center">
                  <FaEnvelope /> <span>Chat to us</span>
                </h4>
                <div className="ml-10">
                  <p className="py-1">Our friendly team is here to help.</p>
                  <span className="">abdurrahmancc12@gmail.com</span>
                </div>
              </div>
              <div className="py-4">
                <h4 className="text-lg font-bold text-secondary flex justify-start gap-5 items-center">
                  <FaMapMarkerAlt /> <span>Office</span>
                </h4>
                <p className="py-2 ml-10">Come say hello at our office HQ</p>
                <div className="ml-10">
                  <p className="">100 Smith Street</p>
                  <span>Collingwood VIC 3055 AU</span>
                </div>
              </div>
              <div className="py-4">
                <h4 className="text-lg font-bold text-secondary flex justify-start gap-5 items-center">
                  <FaPhoneAlt /> <span>Phone</span>
                </h4>
                <div className="ml-10">
                  <p className="py-1">Mon-Fri from 8am to 5pm</p>
                  <span>+88098090808098</span>
                </div>
              </div>
              <div className="flex justify-center ml-10 absolute bottom-8  gap-4">
                <FaFacebook className="text-2xl text-secondary" />{" "}
                <FaTwitter className="text-2xl text-secondary" />{" "}
                <FaLinkedin className="text-2xl text-secondary" />{" "}
                <FaYoutube className="text-2xl text-secondary" />
              </div>
            </div>
            <div className="bg-secondary flex justify-center items-center  contact-form py-20  rounded-r-lg lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
