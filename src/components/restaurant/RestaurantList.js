import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";
import InfiniteScroll from "react-infinite-scroll-component";
import FiltersHeader from "./filtersnavbar/FiltersHeader";
import {RestaurantContext} from "../../context/RestaurantContextProvider";
import Loader from "./Loader";
import {useApi} from "../../hooks/useApi";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [pageable, setPageable] = useState({
        page: 0,
        sort: '',
        size: 10
    })
    const {get} = useApi()

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = () => {
        get("api/v1/restaurants", pageable)
            .then(response => {
                setRestaurants([...restaurants, ...response])
                setPageable({
                    ...pageable,
                    ['page']: pageable.page + 1
                })
            }).then(() => {
        })
    }

    return (
        <div>
            <FiltersHeader setRestaurants={setRestaurants}/>
            <div className="overflow-y-auto flex flex-col bg-gray-200 h-[84vh] min-w-[50vw]">
                {/*todo: fix infinity scroll + handler when no result instead of loading*/}
                {/*<InfiniteScroll*/}
                {/*    dataLength={restaurants.length}*/}
                {/*    next={fetchRestaurants}*/}
                {/*    hasMore={true}*/}
                {/*    loader={<Loader/>}>*/}
                    {restaurants.map((restaurant, index) => <Restaurant
                        key={index}
                        restaurant={restaurant}/>
                    )}
                {/*</InfiniteScroll>*/}
            </div>
        </div>
    )
}

export default RestaurantList;
