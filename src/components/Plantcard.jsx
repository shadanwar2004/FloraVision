import { Play, ArrowRight } from "lucide-react";

import heroPlant from "../assets/plants/heroPlant.png";
import smallPlant from "../assets/plants/smallPlant.png";
import review1 from "../assets/reviews/review1.png";

function Hero() {

  return (

    <section className="relative overflow-visible section-padding pt-0 pb-0 min-h-screen">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-green-500/10 blur-[170px]" />

      {/* CENTER TREE IMAGE */}

      <div
        className="
          absolute
          inset-0
          flex
          justify-center
          items-start
          pointer-events-none
          z-0
        "
      >

        <img
          src={heroPlant}
          alt="hero plant"
          className="
            w-[380px]
            md:w-[560px]
            lg:w-[700px]
            object-contain
            opacity-75
            mt-[-5px]
          "
        />

      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[84vh] gap-8">

        {/* LEFT CONTENT */}

        <div className="relative z-20 pt-8">

          <h1 className="text-5xl md:text-6xl lg:text-[74px] font-bold leading-[0.92]">

            Earth’s <br /> Exhale

          </h1>

          <p className="text-gray-300 mt-5 max-w-[470px] leading-relaxed text-base md:text-lg">

            “Earth Exhale” symbolizes the purity and vitality of the Earth’s
            natural environment and its essential role in sustaining life.

          </p>

          {/* BUTTONS */}

          <div className="flex items-center gap-5 mt-8 flex-wrap">

            <button className="px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">

              Buy Now

            </button>

            <button className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">

                <Play size={16} fill="white" />

              </div>

              <span className="text-sm text-gray-300">

                Live Demo

              </span>

            </button>

          </div>

          {/* REVIEW CARD */}

          <div className="glass rounded-[24px] p-4 w-[240px] mt-12">

            <div className="flex items-center gap-3">

              <img
                src={review1}
                alt="review"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>

                <h3 className="font-semibold text-sm">

                  Ronnie Hamill

                </h3>

                <p className="text-yellow-400 text-xs">

                  ★★★★★

                </p>

              </div>

            </div>

            <p className="text-gray-300 text-xs mt-4 leading-relaxed">

              I can’t express how thrilled I am with my new natural plant!

            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative min-h-[560px]">

          {/* FLOATING CARD */}

          <div className="absolute top-[8%] right-[5%] z-20 glass rounded-[30px] p-4 w-[220px] md:w-[250px]">

            <img
              src={smallPlant}
              alt="small plant"
              className="w-[130px] mx-auto"
            />

            <p className="text-gray-400 text-xs mt-2">

              Indoor Plant

            </p>

            <h3 className="text-[28px] font-semibold mt-1 leading-tight">

              Aglaonema plant

            </h3>

            <button className="mt-4 px-5 py-2.5 border border-white rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">

              Buy Now

              <ArrowRight size={16} />

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero;