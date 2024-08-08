import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
// import RestaurantMockList from '../utils/RestaurantMockList.json'
import { FRENCH_FRIES, SWIGGY_API_LINK, SWIGGY_BASE_IMG_LINK, ZIG_ZAG_IMG } from "../utils/constants";
import RestaurantCardShimmer from "../components/RestaurantCardShimmer";
import CategoryNavbar from "../components/CategoryNavbar";
import { formatFetchedList } from "../utils/helperFunction";

const OrderOnline = () => {
    const [renderResList, setRenderResList] = useState([]);
    const [RestaurantList, setRestaurantList] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await fetch(SWIGGY_API_LINK);
            const json = await response.json();
            const listfetched = await json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            const formattedList = await formatFetchedList(listfetched)
            setRestaurantList(formattedList)
            setRenderResList(formattedList)
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <div className="text-center flex justify-around items-center pt-10 " >
   
                <div>
                    <img className="mx-auto" src={FRENCH_FRIES} alt="" />
                    <h1 className='text-4xl my-6 font-[KaushanFont]'>Our Special Deals</h1>
                    <img className="mx-auto" src={ZIG_ZAG_IMG} alt="" />
                </div>
             
            </div>

            {/* #### CATEGORY NAVBAR #### */}
            <CategoryNavbar data={{ renderResList, setRenderResList, RestaurantList }} />

            <div className="restaurant-container flex gap-8 justify-center flex-wrap" >
                {renderResList.length === 0 ?
                    <RestaurantCardShimmer /> :
                    renderResList.map((data, i) => {
                        return (
                            <RestaurantCard key={data.id} data={data} />
                        )
                    })
                }
            </div>
        </>
    );
};

export default OrderOnline;
