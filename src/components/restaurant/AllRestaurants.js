import React, {useContext, useEffect, useRef, useState} from "react";
import Restaurant from "./Restaurant";
import InfiniteScroll from "react-infinite-scroll-component";
import {ApiRestaurant} from "../../api/ApiRestaurant";
import FiltersHeader from "../filtersnavbar/FiltersHeader";
import {RestaurantContext} from "../../context/RestaurantContextProvider";
import Loader from "./Loader";

const AllRestaurants = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0)
    const [sort, setSort] = useState("name")
    const [size, setSize] = useState(10)
    const [more, setMore] = useState(true)

    const prevScrollY = useRef(0)

    const {openRestaurantId, handleRestaurantClick} = useContext(RestaurantContext)

    useEffect(() => {
        setTimeout(() => {
            ApiRestaurant.getAllRestaurants(page, size, sort).then(response => {
                if (page === 0) {
                    setData(response)
                } else {
                    setData((prevData) => [...prevData, ...response])
                }
                if (response.length === 0) {
                    setMore(false)
                }
            })
        }, 5000)

    }, [page, size, sort])


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > prevScrollY.current) {
                setPage((prevPage) => prevPage + 1)
            }
            prevScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <FiltersHeader/>
            <div className="overflow-y-auto flex flex-col bg-gray-200 h-[84vh] min-w-[50vw]">
                <InfiniteScroll next={() => setPage(page + 1)}
                                hasMore={more}
                                loader={<Loader />}
                                dataLength={data.length}
                                scrollableTarget="scrollableDiv">
                    {data.map((item, index) => <Restaurant
                        key={index}
                        restaurant={item}
                        isOpen={openRestaurantId === item.id}
                        onToggle={() => handleRestaurantClick(item.id)}/>
                    )}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default AllRestaurants;
