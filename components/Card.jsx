import { useState, useEffect } from "react";
import axios from "axios";
import { TbShoppingBagPlus } from "react-icons/tb";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { BsCircleFill } from "react-icons/bs";
import { FaArrowUpFromBracket } from "react-icons/fa6";

function reduceText(text, maxLength) {
  if (text.length < maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

function Card() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cards: {error.message}</p>;

  return (
    <>
      <div className=" grid grid-cols-2">
        <div className="grid grid-cols-4">
          <p className="mt-10 ml-10 p-3 flex items-center justify-between ">
            Bags <BsCircleFill size={5} /> Backpacks
          </p>
        </div>
        <div className="">

            
            <p className="flex justify-end mt-10 mr-10 p-3 "> 13 products <button><FaArrowUpFromBracket className="pl-2" size={25} /></button> </p>
           
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card card-compact w-72 bg-customGray shadow-xl m-12"
          >
            <img
              style={{ width: "288.39px", height: "350px", borderRadius: "2%" }}
              src={card.image}
              alt={card.title}
            />

            <button className="absolute top-2 right-2 ">
              <PiBookmarkSimpleThin color="black" size={50} className="pl-4 pb-6" />
            </button>

            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              {/* <p>{reduceText(card.description,100)}</p> */}
              <h3 className=" flex items-baseline text-xl font-semibold">
                ₹ {card.price}
                <p className="line-through grow-0 font-thin text-sm p-2">
                  8999
                </p>
                <p className="font-light text-sm text-green-400">(50% Off)</p>
                <button>
                  <TbShoppingBagPlus size={30} />
                </button>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
