import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div
      className="flex flex-col justify-center items-center text-[#102a42]
text-[40px] "
    >
      <div className="flex flex-col justify-center text-center p-7">
        <h2>About</h2>
        <p className="text-[#617d98] text-[14px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row justify-between ">
          <img
            className="w-[569px] rounded-2xl"
            src=".\src\assets\img\hero-bcg.1486d4061cd0252b9a21.jpeg"
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-row font-Arial rounded-t-md text-3xl w-[560px] font-Roboto  ">
            <button className=" bg-[#dae2ec] w-1/3 p-3 fonts-Roboto text-md rounded-tl-md hover:bg-[#ebf7ff] hover:text-[#49a6e9]">
              History
            </button>
            <button className="bg-[#dae2ec] w-1/3 p-3 hover:bg-[#ebf7ff] hover:text-[#49a6e9]">
              Vision
            </button>

            <button className="bg-[#dae2ec] w-1/3 p-3 rounded-tr-md  hover:bg-[#ebf7ff] hover:text-[#49a6e9]">
              Goals
            </button>
          </div>
          <div className="flex flex-col justify-center w-[560px] text-[16px] p-7 bg-white">
            <p>history</p>
            <p>
              I'm baby wolf pickled schlitz try-hard normcore marfa man bun
              mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
              Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
              try-hard, woke fixie banjo man bun. Small batch tumeric mustache
              tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade
              hoodie ugh chambray, craft beer pork belly flannel tacos
              single-origin coffee art party migas plaid pop-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
