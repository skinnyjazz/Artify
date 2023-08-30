import { useEffect, useMemo } from "react";
import { heroSectionAssets } from "../../assets/assets";
import { Searchbar } from "../Searchbar/Searchbar";
import { Tranding } from "../Tranding/Tranding";
import { NodeRuntime } from "inspector";
import { HeroBG } from "./HeroBG";




export const Hero = () => {

  return (
    <section className="hero-section">

      <HeroBG imges={heroSectionAssets} />

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
