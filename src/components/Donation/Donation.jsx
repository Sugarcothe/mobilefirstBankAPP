import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Footbar from "../Footbar/Footbar";
import dog from "../assets/img/cutedog.jpg";
import education from "../assets/img/children.jpeg";
import elderly from "../assets/img/elderly.jpeg";
import cat from "../assets/img/cat.jpeg";
import animals from "../assets/img/animals.jpeg";
import community from "../assets/img/community.jpg";
import art from "../assets/img/art.jpeg";
import "./Donation.css";

const donateData = [
  // {
  //   img: dog,
  //   Header: "Jake the dog",
  //   capt: "Starvation",
  //   course: "To buy feed for my dog Jake, so it doesn't starve",
  //   target: "$567",
  //   raised: "$87",
  // },
  // {
  //   img: cat,
  //   Header: "Support for Kitty's Medicals",
  //   capt: "Medicals",
  //   course: "Help Kitty recover from surgery and get back on its paws",
  //   target: "$1500",
  //   raised: "$780",
  // },
  // {
  //   img: education,
  //   Header: "Education for Underprivileged",
  //   capt: "Education",
  //   course: "Provide books, supplies, and scholarships to children in need",
  //   target: "$3000",
  //   raised: "$1125",
  // },
  // // Add more objects here...
  // {
  //   img: animals,
  //   Header: "Medical Treatment for Maria",
  //   capt: "Medicals",
  //   course: "Fund Maria's medical treatment and surgeries",
  //   target: "$5000",
  //   raised: "$2850",
  // },
  // {
  //   img: community,
  //   Header: "Building a Community Park",
  //   course: "Create a safe space for our neighborhood to gather and play",
  //   target: "$10000",
  //   raised: "$3200",
  // },
  // {
  //   img: education,
  //   Header: "Support for Refugee Families",
  //   capt: "Starvation",
  //   course: "Provide food, shelter, and resources for refugee families",
  //   target: "$7500",
  //   raised: "$630",
  // },
  // {
  //   img: animals,
  //   Header: "Protecting Our Environment",
  //   capt: "Environments",
  //   course: "Contribute to reforestation and conservation efforts",
  //   target: "$20000",
  //   raised: "$8700",
  // },
  // {
  //   img: art,
  //   Header: "Empowering Young Artists",
  //   capt: "Art",
  //   course: "Funding art programs and supplies for aspiring artists",
  //   target: "$2500",
  //   raised: "$980",
  // },
  // {
  //   img: elderly,
  //   Header: "Elderly Care",
  //   capt: "Care",
  //   course: "Supporting programs that provide companionship to the elderly",
  //   target: "$3500",
  //   raised: "$1200",
  // },

  // {
  //   img: animals,
  //   Header: "Green Initiatives",
  //   capt: "Environment",
  //   course: "Promote eco-friendly practices in our city",
  //   target: "$5000",
  //   raised: "$1820",
  // },
  // {
  //   img: education,
  //   Header: "Supporting Teachers",
  //   capt: "Education",
  //   course: "Fund classroom supplies and teacher development",
  //   target: "$10000",
  //   raised: "$4180",
  // },
  // {
  //   img: elderly,
  //   Header: "Elderly Assistance Program",
  //   capt: "Care",
  //   course: "Provide resources and support for elderly citizens",
  //   target: "$4000",
  //   raised: "$1675",
  // },
  {
    img: art,
    Header: "Homeless Shelter Expansion",
    capt: "Shelter",
    course: "Expand our shelter's capacity to help more people",
    target: "$15000",
    raised: "$5200",
    author: "Val Eze",
    Organ: "Personal",
    details:
      "We aim to provide shelter and support for homeless individuals homeless individuals, omeless individuals...",
  },
  {
    img: animals,
    Header: "Climate Change",
    capt: "Climate",
    course: "Educate the public about the impact of climate change",
    target: "$3000",
    raised: "$880",
    author: "John Doe",
    Organ: "WHO",
    details:
      "We aim to provide shelter and support for homeless individuals homeless individuals, omeless individuals...",
  },
  {
    img: education,
    Header: "Higher Education Scholarships",
    capt: "Education",
    course: "Give bright students a chance to pursue higher education",
    target: "$20000",
    raised: "$7310",
    author: "Alan Chigozie",
    Organ: "None",
    details:
      "We aim to provide shelter and support for homeless individuals homeless individuals, omeless individuals...",
  },
  {
    img: cat,
    Header: "Pet Adoption Campaign",
    capt: "Adoption",
    course: "Promote pet adoption and animal welfare",
    target: "$5000",
    raised: "$2190",
    author: "Elon Musk",
    Organ: "Tesla",
    details:
      "We aim to provide shelter and support for homeless individuals homeless individuals, omeless individuals...",
  },
  {
    img: elderly,
    Header: "Emergency Medical Fund",
    capt: "Medicals",
    course: "Help individuals in medical emergencies access care",
    target: "$10000",
    raised: "$3950",
    author: "Simon Peter",
    Organ: "Personal",
    details:
      "We aim to provide shelter and support for homeless individuals homeless individuals, omeless individuals...",
  },
];

const Donation = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="container">
        <Topbar />
        <div className="donCont">
          <div className="donContainer">
            <h3 className="donContHeader">
              {selectedCard ? selectedCard.capt : ""}
            </h3>
            <input
              className="donContainerInput"
              placeholder="$50"
              type="text"
            />
            <button className="donContainerInputBtn">Donate</button>
          </div>

          <div className="donCardContainer">
            {donateData.map((d) => (
              <div
                className="donCard"
                key={d.target}
                onClick={() => setSelectedCard(d)}
              >
                <div className="donCardTop">
                  <img className="donCardImg" src={d.img} alt="" />
                  <div className="donCardInfo">
                    <h1 className="donCardInfoHeader">{d.capt}</h1>
                    <p className="donCardInfoText">{d.Header}</p>
                  </div>
                  <div className="donCardInfo">
                    <h1 className="donCardInfoHeader">TARGET</h1>
                    <p className="donCardInfoText">$ {d.target}</p>
                  </div>
                </div>

                {selectedCard === d && (
                  <div className="donCardDetails">
                    <p>Author: {d.author}</p>
                    <p>Organanisation: {d.organ}</p>
                    <p>Target: {d.target}</p>
                    <p>Raised: {d.raised}</p>
                    <p>{d.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Footbar />
      </div>
    </>
  );
};

export default Donation;
