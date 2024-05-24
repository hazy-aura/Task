import Image from "next/image";

//image
import frame1 from "../public/Frame1.png";
import frame2 from "../public/Frame2.png";
import frame3 from "../public/Frame3.png";
import frame4 from "../public/Frame4.png";
import frame5 from "../public/Frame5.png";
import frame6 from "../public/Frame6.png";
import frame7 from "../public/Frame7.png";
import frame8 from "../public/Frame8.png";

function Slider() {
  return (
    <>
      <div className="carousel rounded-box flex items-center justify-between ">
        <div className="carousel-item flex-col">
          <Image src={frame8} />
          <p className="text-xs text-center mt-5">All Bags</p>
        </div>
        <div className="carousel-item flex-col">
          <Image src={frame7} />
          <p className="text-xs text-center mt-5">Vanity Pouch</p>
        </div>
        <div className="carousel-item flex-col">
          <Image src={frame4} />
          <p className="text-xs text-center mt-5">Tote Bag</p>
        </div>

        <div className="carousel-item flex-col">
          <Image src={frame1} />
          <p className="text-xs text-center mt-5">Duffle Bag</p>
        </div>
        <div className="carousel-item flex-col">
          <Image src={frame5} />
          <p className="text-xs text-center mt-5">Laptop Sleeve</p>
        </div>
        <div className="carousel-item flex-col">
          <Image src={frame6} />
          <p className="text-xs text-center mt-5">Messenger Bags</p>
        </div>
        <div className="carousel-item  flex-col">
          <Image src={frame3} />
          <p className="text-xs text-center mt-5">Sling Bags</p>
        </div>
        <div className="carousel-item flex-col">
          <Image src={frame2} />
          <p className="text-xs text-center mt-5">HandBags</p>
        </div>
      </div>
    </>
  );
}

export default Slider;
