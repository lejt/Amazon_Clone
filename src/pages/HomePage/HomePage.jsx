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
                        title="The Lean Startup"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product 
                        id="3453189"
                        title="Some Product"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3453189"
                        title="Some Product"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product 
                        id="0732416"
                        title="Some Product"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product 
                        id="7821493"
                        title="Some Product"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="2453598"
                        title="Some Product"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}