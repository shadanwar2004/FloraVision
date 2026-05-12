import PlantCard from "../components/PlantCard";

import smallPlant from "../assets/plants/smallPlant.png";
import trendingPlant from "../assets/plants/trendingPlant.png";
import cactus from "../assets/plants/cactus.png";
import monstera from "../assets/plants/monstera.png";
import snakePlant from "../assets/plants/snakePlant.png";
import agave from "../assets/plants/agave.png";

function TopSellingSection() {

  const plants = [

    {
      image: smallPlant,
      title: "Aglaonema plant",
      description:
        "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: "Rs. 300/-",
    },

    {
      image: trendingPlant,
      title: "Plantain Lilies",
      description:
        "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.",
      price: "Rs. 380/-",
    },

    {
      image: cactus,
      title: "Cactus",
      description:
        "It is known for their ability to thrive in arid environments",
      price: "Rs. 259/-",
    },

    {
      image: monstera,
      title: "Swiss cheese Plant",
      description:
        "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: "Rs. 400/-",
    },

    {
      image: snakePlant,
      title: "Sansevieria plant",
      description:
        "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: "Rs. 450/-",
    },

    {
      image: agave,
      title: "Agave plant",
      description:
        "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves.",
      price: "Rs. 359/-",
    },

  ];

  return (

    <section className="section-padding py-20">

      {/* TITLE */}

      <div className="flex justify-center mb-16">

        <h2 className="text-3xl md:text-4xl font-semibold">

          Our Top Selling Plants

        </h2>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {plants.map((plant, index) => (

          <PlantCard
            key={index}
            image={plant.image}
            title={plant.title}
            description={plant.description}
            price={plant.price}
          />

        ))}

      </div>

    </section>
  )
}

export default TopSellingSection;