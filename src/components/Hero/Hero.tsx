import React from "react";
import { heroSectionAssets } from "../../assets/assets";
import { BsSearch } from 'react-icons/bs'
import { Searchbar } from "../Searchbar/Searchbar";
import { Tranding } from "../Tranding/Tranding";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__bg">
        {heroSectionAssets.map((img) => (
          <div className="hero-section__item">
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className="hero-section__content">
        <div className="hero-section__content__wrapper">
          <h1 className="hero-section__content__heading">Artify</h1>
          <p className="hero-section__content__text">
            The internet’s source for visuals.
          </p>
          <p className="hero-section__content__text">
            Powered by creators everywhere.
          </p>

          <Searchbar />

          <Tranding />
        </div>
      </div>
    </section>
  );
};
