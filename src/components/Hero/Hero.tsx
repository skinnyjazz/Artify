import React from "react";
import { heroSectionAssets } from "../../assets/assets";

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
          <h1 className="hero-section__content__heading">Gallery</h1>
          <p className="hero-section__content__text">
            The internet’s source for visuals.
          </p>
          <p className="hero-section__content__text">
            Powered by creators everywhere.
          </p>
          <input
            type="text"
            placeholder="Search high-resolution images"
            className="hero__search"
          />
          <div className="hero__tranding">
            <p className="hero__tranding__heading"></p>
            <ul className="hero__tranding__list">
              <li className="hero__tranding__list">
                <a href="">flowers</a>
              </li>
              <li className="hero__tranding__list">
                <a href="">cars</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
