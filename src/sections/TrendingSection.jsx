import { ShoppingBag } from "lucide-react";

import trendingPlant from "../assets/plants/trendingPlant.png";
import potPlant from "../assets/plants/potPlant.png";

function TrendingSection() {

  return (

    <section className="section-padding relative mt-32 pb-24 z-20">

      {/* TITLE */}

      <div className="flex justify-center mb-16 relative z-30">

        <h2 className="text-4xl md:text-6xl font-semibold text-center">

          Our Trendy Plants

        </h2>

      </div>

      {/* FIRST CARD */}

      <div className="glass bg-white/[0.03] rounded-[60px] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 mb-14 relative overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[120px]" />

        {/* IMAGE */}

        <div className="flex justify-center flex-1 relative z-10">

          <img
            src={trendingPlant}
            alt="trending plant"
            className="w-[260px] md:w-[360px] hover:scale-105 transition-all duration-500"
          />

        </div>

        {/* CONTENT */}

        <div className="flex-1 relative z-10">

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">

            For Your Desks Decorations

          </h3>

          <p className="text-gray-300 mt-5 max-w-[500px] leading-relaxed text-lg">

            I recently added a beautiful desk decoration plant to my workspace,
            and it has made such a positive difference!

          </p>

          <h4 className="text-4xl font-bold mt-8">

            Rs. 599/-

          </h4>

          {/* BUTTONS */}

          <div className="flex items-center gap-4 mt-8">

            <button className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300">

              Explore

            </button>

            <button className="w-12 h-12 border border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">

              <ShoppingBag size={20} />

            </button>

          </div>

        </div>

      </div>

      {/* SECOND CARD */}

      <div className="glass bg-white/[0.03] rounded-[60px] p-8 md:p-14 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px]" />

        {/* CONTENT */}

        <div className="flex-1 relative z-10">

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">

            For Your Desks Decorations

          </h3>

          <p className="text-gray-300 mt-5 max-w-[500px] leading-relaxed text-lg">

            The greenery adds a touch of nature and serenity to my desk,
            making it feel more inviting and calming.

          </p>

          <h4 className="text-4xl font-bold mt-8">

            Rs. 399/-

          </h4>

          {/* BUTTONS */}

          <div className="flex items-center gap-4 mt-8">

            <button className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300">

              Explore

            </button>

            <button className="w-12 h-12 border border-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">

              <ShoppingBag size={20} />

            </button>

          </div>

        </div>

        {/* IMAGE */}

        <div className="flex justify-center flex-1 relative z-10">

          <img
            src={potPlant}
            alt="pot plant"
            className="w-[240px] md:w-[320px] hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>

    </section>
  )
}

export default TrendingSection;