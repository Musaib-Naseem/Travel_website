import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

const Cards=()=>{


    return(
        <>
         <div className="cards">

         <h1>Check out these EPIC destination</h1>
           
        <div className="cards__container">

            <div className="cards__wrapper">

            <ul className="cards__items">


         <CardItems 

             src="images/img-9.jpg"
             text="Explore the hidden waterfall deep inside the Amazon jungle"
             label="Adventure"
             path="/services"
         />
         <CardItems 

src="images/img-2.jpg"
text="Travel through the island of Bali in a private Cruise"
label="Luxury"
path="/services"
/>

            </ul>

            <ul className="cards__items">


         <CardItems 

             src="images/img-9.jpg"
             text="Explore the hidden waterfall deep inside the Amazon jungle"
             label="Adventure"
             path="/services"
         />
         <CardItems 

src="images/img-2.jpg"
text="Travel through the island of Bali in a private Cruise"
label="Luxury"
path="/services"
/>

<CardItems 

src="images/img-2.jpg"
text="Travel through the island of Bali in a private Cruise"
label="Luxury"
path="/services"
/>

            </ul>


            </div>
        </div>

         </div>

        </>
    );
}

export default Cards;