import React, { useEffect, useState } from 'react'
import { CATEGORIES_LIST } from '../utils/constants';
import { extractRating } from '../utils/helperFunction';
// import RestaurantMockList from '../utils/RestaurantMockList.json'

const CategoryNavbar = (props) => {
    const { renderResList, setRenderResList, RestaurantList } = props.data;
    const [activeCat, setActiveCat] = useState(CATEGORIES_LIST[0]);

    const handleCat = () => {
        // setActiveCat(categorie);
        switch (activeCat) {
            case CATEGORIES_LIST[0]: {
                setRenderResList(RestaurantList);
                break;
            }
            case CATEGORIES_LIST[1]: {
                const constRating = extractRating(CATEGORIES_LIST[1]);
                const filteredList = RestaurantList.filter((r) => r.rating > constRating);
                setRenderResList(filteredList);
                break;
            }
            case CATEGORIES_LIST[2]: {
                const filteredList = RestaurantList.filter((r) => r.deliveryTime < 30);
                setRenderResList(filteredList);
                break;
            }
            default: {
                console.error("Category doesn't Match! \nCurrent Active Category is : ", activeCat);
            }
        }
    }

    useEffect(() => {
        handleCat();
    }, [activeCat])

    return (
        <>
            <div className="my-16 flex justify-center space-x-2 ">
                <div className='flex'>
                    {CATEGORIES_LIST.map((categorie) => {
                        // console.log(categorie);
                        // console.log(activeCat);
                        return (
                            <li key={categorie} onClick={() => setActiveCat(categorie)} className={`category-subNav ${categorie == activeCat ? "cat-subNav-active" : ""} `} >{categorie}</li>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoryNavbar