import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("history");

  const tabContent = {
    history: {
      title: "History",
      content:
        "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
    },
    vision: {
      title: "Vision",
      content:
        "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro vibe aesthetic gentrify messenger bag venmo keffiyeh. Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
    },
    goals: {
      title: "Goals",
      content:
        "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
    },
  };

  const getButtonClass = (tabName) => {
    return `w-1/3 p-3 text-md rounded-t-md transition-all duration-300 ${
      activeTab === tabName
        ? "bg-white text-[#49a6e9]"
        : "bg-[#dae2ec] hover:bg-[#ebf7ff] hover:text-[#49a6e9]"
    }`;
  };

  return (
    <div className="flex flex-col justify-center items-center text-[#102a42] text-[40px] min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center text-center p-7">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-[#617d98] text-[16px] max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <img
            className="w-full max-w-lg rounded-2xl shadow-lg"
            src="./src/assets/img/hero-bcg.1486d4061cd0252b9a21.jpeg"
            alt="About us"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-row w-full">
            <button
              className={`${getButtonClass(
                "history"
              )} rounded-tl-md text-[25px]`}
              onClick={() => setActiveTab("history")}
            >
              History
            </button>
            <button
              className={`${getButtonClass("vision")} text-[25px]`}
              onClick={() => setActiveTab("vision")}
            >
              Vision
            </button>
            <button
              className={`${getButtonClass("goals")} rounded-tr-md text-[25px]`}
              onClick={() => setActiveTab("goals")}
            >
              Goals
            </button>
          </div>

          <div className="flex flex-col justify-center w-full text-[16px] p-7 bg-white shadow-lg rounded-b-md rounded-tr-md gap-5 min-h-[300px]">
            <p className="capitalize text-[25px]  text-[#102a42]">
              {tabContent[activeTab].title}
            </p>
            <p className="text-[#617d98] leading-7">
              {tabContent[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
