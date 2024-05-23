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
        <div className="carousel-item">
          <Image src={frame1} />
        </div>
        <div className="carousel-item">
          <Image src={frame2} />
        </div>
        <div className="carousel-item">
          <Image src={frame3} />
        </div>
        <div className="carousel-item">
          <Image src={frame4} />
        </div>
        <div className="carousel-item">
          <Image src={frame5} />
        </div>
        <div className="carousel-item">
          <Image src={frame6} />
        </div>
        <div className="carousel-item">
          <Image src={frame7} />
        </div>
        <div className="carousel-item">
          <Image src={frame8} />
        </div>
      </div>
    </>
  );
}

export default Slider;
