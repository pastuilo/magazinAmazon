import React from "react";
import Product from "../../components/Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            key="1"
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            key="2"
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={139}
            image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            key="3"
            id="4903850"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={299.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
          />
          <Product
            key="4"
            id="23445930"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox)"
            price={58.99}
            rating={1}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
          />
          <Product
            key="5"
            id="3254354345"
            title="ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6 192-bit 15 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Cooling"
            price={849.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key="6"
            id="4103823"
            title="Razer BlackShark V2 Gaming Headset: THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - PC, PS4, PS5"
            price={79.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51jmB3ciUhL._AC_SL1500_.jpg"
          />
          <Product
            key="7"
            id="27345930"
            title="Hbada Gaming Chair Racing Style Ergonomic High Back Computer Chair with Height Adjustment"
            price={169.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61aj2URhsVL._AC_SL1500_.jpg"
          />
          <Product
            key="8"
            id="3254354780"
            title="Tablet Android 10 inch Facetel Q3Pro Tablets: Octa-Core Processor 3GB RAM,32GB ROM-8000 mAh IPS HD Display"
            price={129.97}
            rating={2}
            image="https://m.media-amazon.com/images/I/717C-tIWfeL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key="9"
            id="2303850"
            title="Samsung LC49G90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            key="10"
            id="23555930"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
          />
          <Product
            key="11"
            id="2854354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key="12"
            id="1303850"
            title="NutriBullet NBR-1201 12-Piece High-Speed Blender/Mixer System, Gray (600 Watts)"
            price={81.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71swiEqWKxL._AC_SL1500_.jpg"
          />
          <Product
            key="13"
            id="25245930"
            title="Nintendo Switch with Gray Joy‑Con - HAC-001(-01) + SanDisk 64GB MicroSDXC UHS-I Card"
            price={314.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/81Sxdp0JBLL._AC_SL1500_.jpg"
          />
          <Product
            key="14"
            id="3232354345"
            title="Razer Huntsman Mini 60% Gaming Keyboard: Fastest Keyboard Switches Ever - Linear Optical Switches - Chroma RGB Lighting"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/618etkLUt9L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key="15"
            id="860829332"
            title="SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)"
            price={1098.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
