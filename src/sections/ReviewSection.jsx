import ReviewCard from "../components/ReviewCard";

import review1 from "../assets/reviews/review1.png";
import review2 from "../assets/reviews/review2.png";
import review3 from "../assets/reviews/review3.png";

function ReviewSection() {

  const reviews = [

    {
      image: review1,
      name: "Shelly Russel",
      review:
        "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },

    {
      image: review2,
      name: "Lula Rolfson",
      review:
        "Each one has its own unique charm and personality, and they’ve already started brightening up my space.",
    },

    {
      image: review3,
      name: "Carol Huels",
      review:
        "It’s like bringing a little piece of nature indoors. Definitely worth the investment!",
    },

  ];

  return (

    <section className="section-padding py-20">

      {/* TITLE */}

      <div className="flex justify-center mb-16">

        <h2 className="text-3xl md:text-4xl font-semibold">

          Customer Review

        </h2>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reviews.map((item, index) => (

          <ReviewCard
            key={index}
            image={item.image}
            name={item.name}
            review={item.review}
          />

        ))}

      </div>

    </section>
  )
}

export default ReviewSection;