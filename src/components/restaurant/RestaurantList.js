import React, {useEffect} from "react";
import Restaurant from "./Restaurant";
import FiltersHeader from "./filtersnavbar/FiltersHeader";
import {useRestaurantContext} from "../../context/RestaurantContextProvider";

const RestaurantList = () => {
    const {getRestaurants, restaurants} = useRestaurantContext()

    useEffect(() => {
        getRestaurants()
    }, [])


    return (
        <div>
            <FiltersHeader/>
            <div className="overflow-y-auto flex flex-col bg-gray-200 h-[84vh] min-w-[50vw]">
                {/*todo: fix infinity scroll + handler when no result instead of loading*/}
                {/*<InfiniteScroll*/}
                {/*    dataLength={restaurants.length}*/}
                {/*    next={fetchRestaurants}*/}
                {/*    hasMore={true}*/}
                {/*    loader={<Loader/>}>*/}
                {restaurants.map((restaurant, index) =>
                    <Restaurant key={index} restaurant={restaurant}/>
                )}
                {/*</InfiniteScroll>*/}
            </div>
        </div>
    )
}

export default RestaurantList;
