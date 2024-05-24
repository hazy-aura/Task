import { TbShoppingBagPlus } from "react-icons/tb";
function Card() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-12">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">The Brown Metro Movers</h2>
        <h3 className=" flex items-baseline text-xl font-semibold">
          ₹ 4899  <p className="line-through grow-0 font-thin text-sm p-2">8999</p>
          <p className="font-light text-sm text-green-400">(50% Off)</p>
          <TbShoppingBagPlus size={30} />
        </h3>
      </div>
    </div>
  );
}

export default Card;
