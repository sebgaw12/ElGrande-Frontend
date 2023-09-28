import React, {useEffect, useRef, useState} from "react";
import Restaurant from "./Restaurant";
import InfiniteScroll from "react-infinite-scroll-component";
import {Api} from "../../api/Api";

const AllRestaurants = () => {

    const [data, setData] = useState([]);
    const [openRestaurantId, setOpenRestaurantId] = useState(null);
    const [page, setPage] = useState(0)
    const [sort, setSort] = useState("name")
    const [size, setSize] = useState(5)
    const [more, setMore] = useState(true)

    const prevScrollY = useRef(0)

    useEffect(() => {
        Api.getAllRestaurants(page, size, sort,setData, setMore).catch((error) => console.log("błąd podczas pobierania danych: " + error))
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

    const handleRestaurantClick = (restaurantId) => {
        setOpenRestaurantId((prevId) => (prevId === restaurantId ? null : restaurantId))
    }

    const handleSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10)
        setSize(newSize)
    }

    return (
        <div className="flex flex-col bg-gray-200">
            <div className="p-2">
                <label for="size" className="p-2">Ile wpisów na stronie</label>
                <select name="size" className="m-2" onChange={handleSizeChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>
            <div className="overflow-y-auto h-fit">
                <InfiniteScroll next={() => setPage(page + 1)}
                                hasMore={more}
                                loader={<div>Ładowanie...</div>}
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
