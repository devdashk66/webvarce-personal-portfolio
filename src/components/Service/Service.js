import React from "react";

const Service = () => {
  return (
    <>
      <div className=" container">
        <h2 className="text-5xl mb-10 text-center">My Work</h2>
      </div>
      <div className="container flex items-center justify-around flex-wrap gap-14">
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="h-[176px]">
            <img
              src="https://i.ibb.co/7GVXJCc/screenshot-alex-photography-5dc21-web-app-2022-12-10-18-12-06.png"
              alt="website"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Alex Photography</h2>
            <p>If a dog chews shoes whose</p>
            <p>If a dog chews shoes whose</p>
            <p>If a dog chews shoes whose</p>
            <div className="card-actions mt-5">
              <a
                className="btn btn-primary"
                href="https://alex-photography-5dc21.web.app/"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="h-[176px]">
            <img
              src="https://i.ibb.co/5jqz5tB/screenshot-un-courses-web-app-2022-12-10-18-17-37.png"
              alt="website"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">unCourses</h2>
            <p>If a dog chews shoes whose</p>
            <p>If a dog chews shoes whose</p>
            <p>If a dog chews shoes whose</p>
            <div className="card-actions mt-5">
              <a className="btn btn-primary" href="https://un-courses.web.app/">
                Live Preview
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="h-[176px]">
            <img
              src="https://i.ibb.co/j4gtm9q/screenshot-calm-chimera-b4889c-netlify-app-2022-12-10-18-20-59.png"
              alt="website"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Development Quiz</h2>
            <p>If a dog chews shoes whose</p>
            <p>If a dog chews shoes whose</p>
            <p>If a dog chews shoes whose</p>
            <div className="card-actions mt-5">
              <a
                className="btn btn-primary"
                href="https://calm-chimera-b4889c.netlify.app/"
              >
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
