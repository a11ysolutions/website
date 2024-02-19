import React from "react";
import "./Clients.css";
import BicolorTitledText from "../BicolorTitledText/BicolorTitledText";
import { ClientsList } from "../ClientsList/ClientsList";
function Clients() {
  const clientList = [
    {
      alt: "client applause",
      src: "/applause-logo.svg",
      style: {
        width: "116px",
        height: "45px",
      },
    },
    {
      alt: "client everymundo",
      src: "/client-em.png",
      style: {
        width: "139px",
        height: "24px",
      },
    },
    {
      alt: "client ilumino",
      src: "/Ilumino_logo.svg",
      style: {
        width: "116px",
        height: "45px",
      },
    },
    {
      alt: "client adavec",
      src: "/adavec.png",
      style: {
        width: "152px",
        height: "60px",
      },
    },
    {
      alt: "client front10",
      src: "/client-front10.png",
      style: {
        width: "116px",
        height: "45px",
      },
    },
    {
      alt: "client barcelo hotel",
      src: "/barcelo_hotel_logo.svg",
      style: {
        width: "116px",
        height: "45px",
      },
    },
    {
      alt: "client pixel perfecto",
      src: "/client-pixel.png",
      style: {
        width: "128px",
        height: "49px",
      },
    },
  ];

  return (
    <div className="clients-container" id="clients">
      <div className="clients-bicolored-text">
        <BicolorTitledText
          color2="black"
          color1="#0D9E71"
          color1Text="Trusted by many clients"
          color2Text="including:"
          breakLine={false}
        />
      </div>
      <ClientsList clients={clientList} />
    </div>
  );
}

export default Clients;
