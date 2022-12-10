import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="hero py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/pJBg6xs/undraw-Programming-re-kg9v.png"
            className=" w-[800px]"
          />
          <div>
            <p className="mb-4">HELLO I'M MARN DEVELOPER</p>
            <h1 className="text-5xl font-bold">William Andersons</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">HIRE ME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
