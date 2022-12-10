import React from "react";

const ContactMe = () => {
  //   const contactForm = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <>
      <div className=" container pt-16 pb-5">
        <h2 className="text-5xl  text-center">Contact Me</h2>
      </div>
      <form>
        <div className="hero mb-[50px]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <div className="card-body w-[400px] md:w-[700px]">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="text"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered "
                    placeholder="Bio"
                    name="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactMe;
