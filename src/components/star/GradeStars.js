import {Rating, initTE} from "tw-elements";
import FilledStar from "./FilledStar";
import UnfilledStar from "./UnfilledStar";

initTE({Rating});

const GradeStars = ({grade}) => {

    const renderStars = () => {

        const stars = []
        const numberOfStars = 5
        const fullStarCount = Math.floor(grade)

        for (let i = 0; i < numberOfStars; i++) {

            let starClass = 'mr-1 h-5 w-5 text-warning'

            if (i < fullStarCount) {
                stars.push(
                    <li key={i}>
                        <FilledStar starClass={starClass} />
                    </li>
                )
            }else {
                stars.push(
                    <li key={i}>
                        <UnfilledStar starClass={starClass} />
                    </li>
                )
            }
        }
        return stars
    }

    return (
        <ul className="flex flex-row my-1 gap-1 p-0">
            {renderStars()}
        </ul>
    )
}

export default GradeStars
