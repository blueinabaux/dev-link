import React from "react";
import Button from "../components/Buttons/Button";
import { RiChatSmileAiFill } from "react-icons/ri";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import Cards from "../components/Cards/Cards";
import { Element } from "react-scroll";
import PricingCards from "../components/Cards/PricingCards";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function LandingPage() {
  const cardsArr = [
    {
      id: 1,
      icon: <MdSentimentVerySatisfied color="white" size={40} />,
      mainText: "Real-time Chatrooms",
      para: "Instant communication powered by CometChat for seamless developer interaction.",
    },

    {
      id: 2,
      icon: <MdOutlineFeedback color="white" size={40} />,
      mainText: "Community Channels",
      para: "Join topic-specific rooms to discuss frameworks, tools, and trends.",
    },

    {
      id: 3,
      icon: <MdOutlineAutoGraph color="white" size={40} />,
      mainText: "Snippets & Sharing",
      para: "Share code snippets, links, and ideas – live and styled for developers.",
    },
  ];

 const priceCardsArr = [
  {
    id: 1,
    name: "🧪 DevLink Lite (Free)",
    price: "Free",
    features: [
      "Join public chatrooms",
      "Basic CometChat integration",
      "Share messages & links",
      "Limited snippet sharing",
    ],
  },
  {
    id: 2,
    name: "🚀 Pro Plan",
    price: "$7/month",
    features: [
      "Everything in Lite",
      "Personalized AI learning",
      "History-based suggestions",
      "Analytics dashboard access",
      "Read-only Public API access",
    ],
  },
  {
    id: 3,
    name: "🧠 Creator Plan",
    price: "$20/month",
    features: [
      "Everything in Pro",
      "Niche-based targeting tools",
      "Team support (up to 5 users)",
      "Priority model updates",
      "Full API access (read/write)",
    ],
  },
];


  return (
    <>
      <div className="landing-main-section min-h-[100vh] w-full flex flex-col justify-start items-center  ">
        <Element name="home">
          <div className="landing-container relative min-h-[100vh] w-[100vw] flex flex-col justify-center items-center  ">
            <div className="landing-main h-auto w-full text-white ">
              <div className="top-text  h-auto w-full py-[40px] flex flex-col justify-center items-center">
                {/* <RiChatSmileAiFill size={40} color="#FF2400" /> */}

                <h1 className="text-[40px] font-bold ">
                Empowering Dev Conversations, One Link at a Time
                </h1>
                <p className="text-zinc-500">DevLink is your real-time developer chatroom - built for collaboration, community, and code.</p>
              </div>
              <div className="button-section h-auto w-full flex justify-center items-center gap-[20px]">
                <Button text={"Launch Chatroom"} toPage={"dashboard"} />
              </div>
            </div>
          </div>
        </Element>

        <Element name="features">
          <div className="features-cards h-[80vh] w-[100vw] flex flex-col justify-center bg--700 items-center gap-[80px] ">
            <div className="feature-text h-auto w-full flex flex-col justify-center items-center ">
              <h1 className="text-white font-semibold text-[40px]">Features Built for Devs</h1>
              <p className="text-zinc-400 text-center text-[16px]">
                Everything you need to connect, collaborate, and create.
              </p>
            </div>
            <div className="features-cards-section  h-auto w-[100%] flex justify-center items-center gap-[80px] ">
              {cardsArr.map((items) => {
                return (
                  <>
                    <Cards
                      icon={items.icon}
                      mainText={items.mainText}
                      para={items.para}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </Element>


        <Element name="pricing">
          <div className="pricing-section h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-[80px] ">
            <div className="feature-text h-auto w-full flex flex-col justify-center items-center ">
              <h1 className="text-white font-semibold text-[40px] ">Pricing</h1>
              <p className="text-zinc-400 text-center text-[16px] ">
                Choose a plan that fits your needs
              </p>
            </div>

            <div className="pricing-cards-section h-auto w-full flex justify-center items-center bg--300 gap-[80px] ">
              {priceCardsArr.map((items) => {
                return (
                  <>
                    <PricingCards
                      title={items.name}
                      price={items.price}
                      features={items.features}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </Element>

        <Element name="contact">
          <div className="contact-section bg--500 h-[80vh] w-[100vw] flex flex-col justify-center items-center ">
            <div className="feature-text h-auto w-full flex flex-col justify-center items-center ">
              <h1 className="text-white font-semibold text-5xl">Contact</h1>
              <p className="text-zinc-400 text-center">Get in touch with us</p>
            </div>

            <div className="contact-form w-[30%] h-auto py-[40px] bg--500 flex flex-col justify-center items-center gap-[20px] text-white  ">
              <div className="input-section h-auto w-full flex flex-col justify-center items-center gap-[20px] ">
                <input
                  className="outline-none bg-[#242424] w-[80%] focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800 "
                  type="text"
                  placeholder="Email"
                  // value={formData.username}
                  // onChange={handleChange}
                  name="email"
                />

                <textarea
                  rows={5}
                  className="outline-none bg-[#242424] w-[80%] focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800 "
                  type="password"
                  placeholder="Write your message here..."
                  // value={formData.password}
                  // onChange={handleChange}
                  name="message"
                />
              </div>

              <button
                // onClick={handleLogin}
                className="button-container rounded-[8px] bg-[#fff] w-[40%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium  "
              >
                Submit
              </button>
            </div>
          </div>
        </Element>

        <div className="footer-section h-[50vh] w-full bg-[#1a1a1a] rounded-r-[12px] flex justify-center items-center rounded-l-[12px] py-[20px] px-[100px] ">
  <div className="website-name w-[30%] h-full flex flex-col justify-center items-start ">
    <h1 className="text-[50px] text-white font-bold">DevLink</h1>
    <p className="text-zinc-500 text-[14px]">
      Real-time chatrooms and developer communities – connect, share, and grow with DevLink.
    </p>
    <div className="icons w-full py-[20px] h-auto flex justify-start items-center gap-[20px]">
      <FaInstagram size={30} color="white" />
      <FaLinkedin size={30} color="white" />
      <FaSquareXTwitter size={30} color="white" />
    </div>
  </div>

  <div className="website-links w-[70%] h-full flex justify-around items-end text-white pb-[30px]">
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Product</h2>
      <a href="#features" className="text-zinc-400 hover:text-white">Features</a>
      <a href="#pricing" className="text-zinc-400 hover:text-white">Pricing</a>
      <a href="#contact" className="text-zinc-400 hover:text-white">Contact</a>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Community</h2>
      <a href="#" className="text-zinc-400 hover:text-white">Blog</a>
      <a href="#" className="text-zinc-400 hover:text-white">Discord</a>
      <a href="#" className="text-zinc-400 hover:text-white">Twitter</a>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Company</h2>
      <a href="#" className="text-zinc-400 hover:text-white">About</a>
      <a href="#" className="text-zinc-400 hover:text-white">Careers</a>
      <a href="#" className="text-zinc-400 hover:text-white">Privacy Policy</a>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default LandingPage;
