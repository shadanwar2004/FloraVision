function Footer() {

  return (

    <footer className="section-padding pt-8 pb-8 mt-14">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 items-start">
        {/* LEFT */}

        <div>

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <div className="text-3xl">
              🪴
            </div>

            <h2 className="text-3xl font-bold tracking-wide">

              FloraVision

            </h2>

          </div>

          {/* TEXT */}

          <p className="text-gray-300 mt-8 leading-relaxed max-w-[300px] text-sm">

            "From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment."

          </p>

          {/* SOCIALS */}

          <div className="flex items-center gap-8 mt-8 text-sm font-semibold tracking-[2px]">

            <button className="hover:text-green-400 transition-all duration-300">

              FB

            </button>

            <button className="hover:text-green-400 transition-all duration-300">

              TW

            </button>

            <button className="hover:text-green-400 transition-all duration-300">

              LI

            </button>

          </div>

        </div>

        {/* CENTER */}

        <div>

          <h3 className="text-lg font-semibold mb-8">

            Quick Link's

          </h3>

          <ul className="flex flex-wrap gap-6 md:block md:space-y-5 text-sm text-gray-300">

            <li className="hover:text-white transition-all duration-300 cursor-pointer">

              Home

            </li>

            <li className="hover:text-white transition-all duration-300 cursor-pointer">

              Type's Of plant's

            </li>

            <li className="hover:text-white transition-all duration-300 cursor-pointer">

              Contact

            </li>

            <li className="hover:text-white transition-all duration-300 cursor-pointer">

              Privacy

            </li>

          </ul>

        </div>

        {/* RIGHT */}

        <div>

          <h3 className="text-lg font-semibold mb-8">

            For Every Update.

          </h3>

          {/* INPUT + BUTTON */}

          <div className="flex items-center gap-3 max-w-[380px]">

            <input
              type="email"
              placeholder="Enter Email"
              className="
                flex-1
                bg-transparent
                border
                border-white/25
                rounded-lg
                px-5
                py-3
                outline-none
                text-sm
                placeholder:text-gray-400
                focus:border-white
                transition-all
                duration-300
              "
            />

            <button
              className="
                border
                border-white
                px-6
                py-3
                rounded-lg
                text-sm
                font-semibold
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >

              Subscribe

            </button>

          </div>

          {/* COPYRIGHT */}

          <p className="text-gray-400 text-sm mt-10 mb-4">

            © 2026 FloraVision • Built by Shad Anwar

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer;