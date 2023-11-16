import {useEffect, useState} from "react";
import Address from "./Address";
import BusinessHour from "./BusinessHour";
import ReviewList from "./reviews/ReviewList";
import Details from "./Details";
import MenuList from "./menu/MenuList";
import {ADDRESS, DETAILS, MENU, OPENING_HOURS, REVIEWS} from "../../../constants/RestaurantDetailsTabs";
import ImageComponent from "./image/ImageComponent";
import {useRestaurantContext} from "../../../context/RestaurantContextProvider";
import {
    DetailsContainer,
    ButtonsContainer,
    StyleButton,
    HideBtn,
    DetailsElementsContainer, ImageContainer, ActiveElementContainer
} from "./styles/RestaurantDetails.styles";

const RestaurantDetails = ({setIsOpen, restaurant}) => {
    const {openedRestaurantId, handleRestaurantClick} = useRestaurantContext()
    const [activeComponent, setActiveComponent] = useState(DETAILS)

    useEffect(() => {
        setIsOpen(openedRestaurantId === restaurant.id)
    }, [openedRestaurantId]);
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case DETAILS:
                return <Details restaurant={restaurant}/>
            case ADDRESS:
                return <Address restaurant={restaurant}/>
            case MENU:
                return <MenuList restaurant={restaurant}/>
            case REVIEWS:
                return <ReviewList restaurant={restaurant}/>
            case OPENING_HOURS:
                return <BusinessHour restaurant={restaurant}/>
            default:
                return <Details restaurant={restaurant}/>
        }
    }

    return (
        <DetailsContainer>
            <ButtonsContainer>

                <StyleButton
                        onClick={() => setActiveComponent(ADDRESS)}>
                    Address
                </StyleButton>

                <StyleButton
                        onClick={() => setActiveComponent(MENU)}>
                    Menu
                </StyleButton>

                <StyleButton
                        onClick={() => setActiveComponent(REVIEWS)}>
                    Reviews
                </StyleButton>

                <StyleButton
                        onClick={() => setActiveComponent(OPENING_HOURS)}>
                    Opening hours
                </StyleButton>

                <StyleButton
                        onClick={() => setActiveComponent(DETAILS)}>
                    Details
                </StyleButton>

                <HideBtn onClick={() => {
                    setIsOpen(false)
                    handleRestaurantClick(restaurant.id)
                }}
                >Hide
                </HideBtn>
            </ButtonsContainer>
            <DetailsElementsContainer>
                <ImageContainer>
                    <ImageComponent/>
                    {/*<Gallery/>*/}
                </ImageContainer>
                <ActiveElementContainer>{renderActiveComponent()}</ActiveElementContainer>
            </DetailsElementsContainer>

        </DetailsContainer>
    )
}
export default RestaurantDetails
