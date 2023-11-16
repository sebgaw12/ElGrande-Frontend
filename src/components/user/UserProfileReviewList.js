import {ContributionItem, ContributionText} from "./UserProfile.styles";
import {CrossButtonImage} from "../../styles/global.styles";

const UserProfileReviewList = ({reviews, handleDeleteReview}) => {


    return (
        reviews.map((review) =>
            <ContributionItem key={review.id}>
                <ContributionText>Created at: {review.submissionTime}</ContributionText>
                <ContributionText>Comment: {review.comment}</ContributionText>
                <ContributionText>Grade: {review.grade}</ContributionText>
                <CrossButtonImage onClick={() => handleDeleteReview(review.id)}>x</CrossButtonImage>
            </ContributionItem>
        )
    )
}

export default UserProfileReviewList