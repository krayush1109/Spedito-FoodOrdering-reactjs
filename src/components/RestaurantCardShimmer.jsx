import { Shimmer } from "react-shimmer"
import React from 'react'

const RestaurantCardShimmer = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => {
                return (
                    <div key={i} className="relative flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-xl bg-white w-72 h-[29rem] cursor-pointer">
                        <Shimmer height={160} width={288} style={{ marginBottom: '1rem' }} />
                        <div className="px-6 py-2 flex flex-col gap-2">
                            <Shimmer height={24} width={200} style={{ marginBottom: '0.5rem' }} />
                            <Shimmer height={16} width={150} />
                        </div>
                        <div className="px-6 text-gray-700 text-base">
                            <Shimmer height={40} width={250} />
                        </div>
                        <div>
                            <div className='px-6 pb-2 flex justify-between'>
                                <Shimmer height={20} width={60} style={{ marginRight: '0.5rem' }} />
                                <Shimmer height={20} width={100} />
                            </div>
                            <div className="px-6 pb-2 flex justify-between items-center">
                                <Shimmer height={24} width={100} style={{ marginRight: '0.5rem' }} />
                                <Shimmer height={40} width={80} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RestaurantCardShimmer