function ReviewCard({
  image,
  name,
  review
}) {

  return (

    <div
      className="
        glass
        rounded-[34px]
        p-6 md:p-8
        hover:-translate-y-2
        transition-all
        duration-500
        border
        border-white/10
        min-h-[250px]
        flex
        flex-col
        justify-between
      "
    >

      {/* TOP */}

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="
            w-12
            h-12
            md:w-14
            md:h-14
            rounded-full
            object-cover
          "
        />

        <div>

          <h3 className="text-xl md:text-2xl font-semibold leading-none">

            {name}

          </h3>

          <p className="text-yellow-400 text-sm mt-2 tracking-wide">

            ★★★★★

          </p>

        </div>

      </div>

      {/* REVIEW */}

      <p
        className="
          text-gray-300
          leading-relaxed
          mt-6
          text-base
          md:text-lg
        "
      >

        {review}

      </p>

    </div>
  )
}

export default ReviewCard;