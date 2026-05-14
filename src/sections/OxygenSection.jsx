import { ChevronLeft, ChevronRight } from "lucide-react";

import smallPlant from "../assets/plants/smallPlant.png";

function OxygenSection() {

  return (

    <section className="section-padding pt-6 pb-0">

      {/* TITLE */}

      <div className="flex justify-center mb-16">

        <h2 className="text-3xl md:text-4xl font-semibold">

          Our Best o2

        </h2>

      </div>

      {/* MAIN CARD */}

      <div
        className="
          glass
          rounded-[40px]
          p-6
          md:p-10
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          overflow-hidden
          border
          border-white/10
        "
      >

        {/* IMAGE */}

        <div className="flex-1 flex justify-center">

          <img
            src={smallPlant}
            alt="oxygen plant"
            className="
              w-[220px]
              md:w-[300px]
              hover:scale-105
              transition-all
              duration-500
            "
          />

        </div>

        {/* CONTENT */}

        <div className="flex-1">

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">

            We Have Small And Best O2 Plants Collection’s

          </h3>

          <p className="text-gray-300 mt-7 leading-relaxed text-sm md:text-base">

            Oxygen-producing plants, often referred to as “O2 plants,” are those
            that release oxygen into the atmosphere through the process of photosynthesis.

          </p>

          <p className="text-gray-300 mt-5 leading-relaxed text-sm md:text-base">

            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the air
            cleaner and healthier to breathe.

          </p>

          {/* BOTTOM */}

          <div className="flex items-center justify-between mt-10 flex-wrap gap-6">

            <button
              className="
                px-7
                py-3
                border
                border-white
                rounded-xl
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >

              Explore

            </button>

            {/* SLIDER */}

            <div className="flex items-center gap-5 text-gray-300">

              <button className="hover:text-white transition-all duration-300">

                <ChevronLeft size={20} />

              </button>

              <span className="text-sm tracking-widest">

                01/04

              </span>

              <button className="hover:text-white transition-all duration-300">

                <ChevronRight size={20} />

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* DOTS */}

      <div className="flex justify-center gap-3 mt-3">

        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>

        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>

        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>

      </div>

    </section>
  )
}

export default OxygenSection;