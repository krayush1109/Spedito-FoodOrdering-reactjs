import React, { useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantList from '../data/RestautantList.json'

const SWIGGY_BASE_IMG_LINK = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const OrderOnline = () => {
    const resList = RestaurantList.map((item) => ({
        image: SWIGGY_BASE_IMG_LINK + item.info.cloudinaryImageId,
        restaurantName: item.info.name,
        rating: item.info.avgRating,
        description: item.info.locality,
        cuisines: item.info.cuisines,
        deliveryTime: item.info.sla.deliveryTime
    }));

    return (
        <>
            <div className=" text-center justify-center py-6" >
                <img className="mx-auto" src="https://pro-theme.com/html/spedito/assets/img/decor/french-fries.png" alt="" />
                
                <h1 className='text-4xl my-6 font-[KaushanFont]'>Our Special Deals</h1>
                <img className="mx-auto" src="/img/special-deal-img.png" alt="" />
            </div>

            <div className="restaurant-container flex gap-8 justify-center flex-wrap" >
                {resList.map((data, i) => {
                    return (
                        <RestaurantCard key={i} data={data} />
                    )
                })}
            </div>
        </>
    );
};

export default OrderOnline;
