import { useState } from "react";

import {
  Menu,
  X,
  Search,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import smallPlant from "../assets/plants/smallPlant.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>
      {/* NAVBAR */}

      <motion.nav

        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}

        className="
          section-padding
          py-5
          flex
          items-center
          justify-between
          sticky
          top-0
          z-50
          backdrop-blur-md
          bg-[#02120B]/30
        "
      >

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <div className="text-3xl">
  🪴
</div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">

            FloraVision

          </h1>

        </div>

        {/* DESKTOP NAV */}

        <ul
          className="
            hidden
            md:flex
            items-center
            gap-14
            text-[15px]
            text-gray-200
            font-light
          "
        >

          <li className="hover:text-white cursor-pointer transition-all duration-300">

            Home

          </li>

          <li className="flex items-center gap-1 hover:text-white cursor-pointer transition-all duration-300">

            Plants Type

            <ChevronDown size={15} />

          </li>

          <li className="hover:text-white cursor-pointer transition-all duration-300">

            More

          </li>

          <li className="hover:text-white cursor-pointer transition-all duration-300">

            Contact

          </li>

        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-5">

          <button className="hover:text-green-400 transition-all duration-300">

            <Search size={20} strokeWidth={1.8} />

          </button>

          <button className="hover:text-green-400 transition-all duration-300">

            <ShoppingBag size={19} strokeWidth={1.8} />

          </button>

          {/* MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-green-400 transition-all duration-300"
          >

            {
              menuOpen
                ? <X size={24} />
                : <Menu size={24} />
            }

          </button>

        </div>

      </motion.nav>

      {/* SIDEBAR MENU */}

      <AnimatePresence>

        {
          menuOpen && (

            <motion.div

              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}

              transition={{ duration: 0.4 }}

              className="
                fixed
                top-0
                right-0
                w-[75%]
                md:w-[400px]
                h-screen
                bg-[#08140D]
                z-[100]
                p-10
                flex
                flex-col
                backdrop-blur-xl
                border-l
                border-white/10
              "
            >

              {/* CLOSE BUTTON */}

              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-10 hover:text-green-400 transition-all duration-300"
              >

                <X size={28} />

              </button>

              {/* MENU LINKS */}

              <ul className="flex flex-col gap-8 text-2xl text-gray-300 mt-10">

                <li
                  className="hover:text-white transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </li>

                <li
                  className="hover:text-white transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Plants Type
                </li>

                <li
                  className="hover:text-white transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  More
                </li>

                <li
                  className="hover:text-white transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </li>

              </ul>

            </motion.div>
          )
        }

      </AnimatePresence>
    </>
  )
}

export default Navbar;