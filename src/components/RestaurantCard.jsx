// SwiggyCard.js
import React from 'react';

const RestaurantCard = ({ data }) => {
    console.log("Hello World")

    const {
        image,
        restaurantName,
        rating,
        description,
        cuisines,
        deliveryTime
    } = data;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white w-72 h-[28rem] pb-4 flex flex-col justify-between hover:-translate-y-1 duration-500">
            <img className="w-full h-48 object-cover" src={image} alt={restaurantName} />
            <div className="px-6 py-2">
                <div>
                    <div className="font-bold text-xl mb-2">{restaurantName}</div>
                    <span className="text-gray-700 text-base">{cuisines.join(', ').slice(0, 55) + "..."}</span>
                </div>
                <div className="text-gray-700 text-base">
                    <br />
                    <span className="inline-block bg-green-500 text-white text-xs px-2 rounded-full mr-2">{rating}⭐</span>
                    {description}
                </div>
            </div>
            <div className="px-6 pb-2 flex justify-between items-center ">
                <button className="bg-red-600 hover:bg-lime-500 duration-200 text-white font-bold py-2 px-4 rounded">
                    Order Now
                </button>
                <span className='text-gray-700 font-semibold px-2' >{deliveryTime} min.</span>
            </div>
        </div>
    );
};

export default RestaurantCard;
