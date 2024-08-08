import { SWIGGY_BASE_IMG_LINK } from "./constants";

export const formatFetchedList = (list) => {
    return list.map((item) => ({
        id: item.info.id,
        image: SWIGGY_BASE_IMG_LINK + item.info.cloudinaryImageId,
        restaurantName: item.info.name,
        rating: item.info.avgRating,
        description: item.info.locality,
        cuisines: item.info.cuisines,
        deliveryTime: item.info.sla.deliveryTime,
        price: item.info.costForTwo.match(/\d+/)[0]
    }));
}

// Function to extract rating value from a category string 
export const extractRating = (category) => {
    const match = category.match(/Ratings (\d+(\.\d+)?)/);
    return match ? match[1] : null;
};