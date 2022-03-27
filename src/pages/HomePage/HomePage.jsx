import React from "react";
import "./HomePage.css";
import Product from "../../components/Product/Product";

export default function HomePage() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" 
                    className="home__image"
                />
                <div className="home__row">
                    <Product
                        id="1323525"
                        title="Elden Ring - PlayStation 5 Edition"
                        image="https://m.media-amazon.com/images/I/81goNGEYm6L._AC_SX679_.jpg"
                        price={79.99}
                        rating={5}
                    />
                    <Product 
                        id="3453189"
                        title="KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire Red"
                        image="https://m.media-amazon.com/images/I/71tF8XEPXVL._AC_SX679_.jpg"
                        price={469.00}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3234324"
                        title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
                        image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX679_.jpg"
                        price={54.99}
                        rating={5}
                    />
                    <Product 
                        id="0732416"
                        title="Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)"
                        image="https://m.media-amazon.com/images/I/41LQZ3weaVL._AC_SX679_.jpg"
                        price={74.99}
                        rating={5}
                    />
                    <Product 
                        id="7821493"
                        title="2022 Apple iPad Air (10.9-inch, Wi-Fi + Cellular, 256GB) - Blue (5th Generation)"
                        image="https://m.media-amazon.com/images/I/719Lk3CuLzL._AC_SX522_.jpg"
                        price={1149.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="2453598"
                        title="LG UltraWide 34WP65C-B 34 Inch 21:9 Curved FreeSync 1ms 160 Hz WQHD 4k Gaming Monitor, Black"
                        image="https://m.media-amazon.com/images/I/716OFWNyB4S._AC_SX679_.jpg"
                        price={649.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}