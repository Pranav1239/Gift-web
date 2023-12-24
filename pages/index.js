import * as React from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import image1 from "../public/card/card3.png";
import image2 from "../public/card/card1.png";
import image3 from "../public/card/card2.png";
import image4 from "../public/card/card0.png";

export default function Home() {
  const handle = ".handle";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="item">
        <Draggable
          handle={handle}
          defaultPosition={{ x: 0, y: 0 }}
          grid={[25, 25]}
          scale={1}
        >
          <div className="fitem">
            <div className={`handle  ${handle}`}>
              <Image
                src={image1}
                className="border-2 shadow-xl"
                alt="image"
                width={400}
                height={600}
                id="Drag1"
              />
            </div>
          </div>
        </Draggable>

        <Draggable
          handle={handle}
          defaultPosition={{ x: 0, y: 0 }}
          grid={[25, 25]}
          scale={1}
        >
          <div className="fitem">
            <div className={`handle ${handle}`}>
              <Image
                src={image2}
                className="border-2 shadow-xl"
                alt="image"
                width={400}
                height={600}
                id="Drag2"
              />
            </div>
          </div>
        </Draggable>

        <Draggable
          handle={handle}
          defaultPosition={{ x: 0, y: 0 }}
          grid={[25, 25]}
          scale={1}
        >
          <div className="fitem">
            <div className={`handle ${handle}`}>
              <Image
                src={image3}
                className="border-2 shadow-xl"
                alt="image"
                width={400}
                height={600}
                id="Drag3"
              />
            </div>
          </div>
        </Draggable>

        <Draggable
          handle={handle}
          defaultPosition={{ x: 0, y: 0 }}
          grid={[25, 25]}
          scale={1}
        >
          <div className="fitem">
            <div className={`handle ${handle}`}>
              <Image
                src={image4}
                alt="image"
                className="border-2 shadow-xl"
                width={400}
                height={600}
                id="Drag4"
              />
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
}
