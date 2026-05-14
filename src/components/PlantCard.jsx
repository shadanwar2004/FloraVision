import { ShoppingBag } from "lucide-react";

function PlantCard({
  image,
  title,
  description,
  price,
}) {

  return (

    <div
      className="
        glass
        rounded-[36px]
        p-6
        border
        border-white/10
        hover:-translate-y-2
        transition-all
        duration-500
        overflow-hidden
      "
    >

      {/* IMAGE */}

      <div className="flex justify-center">

        <img
          src={image}
          alt={title}
          className="
            w-[150px]
            md:w-[180px]
            h-[180px]
            object-contain
            hover:scale-105
            transition-all
            duration-500
          "
        />

      </div>

      {/* CONTENT */}

      <div className="mt-6">

        <h3 className="text-2xl font-semibold leading-tight">

          {title}

        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mt-4 min-h-[70px]">

          {description}

        </p>

      </div>

      {/* BOTTOM */}

      <div className="flex items-center justify-between mt-8">

        <h4 className="text-3xl font-bold">

          {price}

        </h4>

        <button
          className="
            w-14
            h-14
            rounded-2xl
            border
            border-white
            flex
            items-center
            justify-center
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >

          <ShoppingBag size={20} />

        </button>

      </div>

    </div>
  )
}

export default PlantCard;



