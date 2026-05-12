import { Play, ArrowRight } from "lucide-react";

import heroPlant from "../assets/plants/heroPlant.png";
import smallPlant from "../assets/plants/smallPlant.png";
import review1 from "../assets/reviews/review1.png";

function Hero() {

  return (

    <section className="relative overflow-visible section-padding pt-2 pb-0 min-h-screen">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-500/10 blur-[200px]" />

      {/* CENTER BACKGROUND TREE */}

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
            w-[500px]
            md:w-[700px]
            lg:w-[950px]
            object-contain
            opacity-80
            mt-0
          "
        />

      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[90vh] gap-10">

        {/* LEFT CONTENT */}

        <div className="relative z-20 pt-10">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">

            Earth’s <br /> Exhale

          </h1>

          <p className="text-gray-300 mt-6 max-w-[520px] leading-relaxed text-lg">

            “Earth Exhale” symbolizes the purity and vitality of the Earth’s
            natural environment and its essential role in sustaining life.

          </p>

          {/* BUTTONS */}

          <div className="flex items-center gap-5 mt-10 flex-wrap">

            <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">

              Buy Now

            </button>

            <button className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">

                <Play size={18} fill="white" />

              </div>

              <span className="text-sm text-gray-300">

                Live Demo

              </span>

            </button>

          </div>

          {/* REVIEW CARD */}

          <div className="glass rounded-[30px] p-5 w-[290px] mt-16">

            <div className="flex items-center gap-3">

              <img
                src={review1}
                alt="review"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <h3 className="font-semibold">

                  Ronnie Hamill

                </h3>

                <p className="text-yellow-400 text-sm">

                  ★★★★★

                </p>

              </div>

            </div>

            <p className="text-gray-300 text-sm mt-4 leading-relaxed">

              I can’t express how thrilled I am with my new natural plant!
              They bring such a fresh and vibrant energy to my home.

            </p>

          </div>

        </div>

        {/* EMPTY RIGHT SIDE */}

        <div className="relative min-h-[700px]">

          {/* FLOATING CARD */}

          <div className="absolute top-[10%] right-[5%] z-20 glass rounded-[40px] p-6 w-[260px] md:w-[300px]">

            <img
              src={smallPlant}
              alt="small plant"
              className="w-[180px] mx-auto"
            />

            <p className="text-gray-400 text-sm mt-2">

              Indoor Plant

            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mt-1 leading-tight">

              Aglaonema plant

            </h3>

            <button className="mt-5 px-6 py-3 border border-white rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">

              Buy Now

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero;