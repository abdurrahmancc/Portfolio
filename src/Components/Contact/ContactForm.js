import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import toast from "react-hot-toast";

const ContactForm = () => {
  const serviceId = "service_spvy3lm";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send(serviceId, "template_4re6v4f", data, "3yqLbkyP3p1TnDMMq")
      .then((response) => {
        reset();
        toast.success("success", { id: "email_send" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <div className="w-full">
        <div className="w-6/12 mx-auto  ">
          <div className=" mb-4">
            <h4 className="capitalize font-bold text-center text-4xl text-accent">Contact us</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label  pb-0">
                <span className="label-text text-accent">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input text-accent input-bordered border border-gray-300 bg-secondary w-full "
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <span className="label-text-alt text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label pb-0 pt-4">
                <span className="label-text text-accent">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input text-accent input-bordered border border-gray-300 bg-secondary w-full "
                {...register("email", {
                  required: { value: true, message: "Email is require" },
                  pattern: {
                    value:
                      /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              {errors.email?.type === "pattern" ? (
                <span className="label-text-alt text-red-500">{errors.email?.message}</span>
              ) : (
                errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                )
              )}
            </div>
            <div className="form-control">
              <label className="label pt-4 pb-0">
                <span className="label-text text-accent">Phone number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input text-accent input-bordered border border-gray-300 bg-secondary w-full "
                {...register("number", { required: true })}
              />
              {errors?.number && (
                <span className="label-text-alt text-red-500">Number is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label pt-4 pb-0">
                <span className="label-text text-accent">How can I help you?</span>
              </label>
              <textarea
                className="textarea text-accent border border-gray-300 bg-secondary textarea-bordered"
                placeholder="Tell us a little about the project..."
                {...register("description", { required: true })}
              ></textarea>
              {errors?.description && (
                <span className="label-text-alt text-red-500">Description is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#54389e] text-white hover:bg-[#6238d5]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
