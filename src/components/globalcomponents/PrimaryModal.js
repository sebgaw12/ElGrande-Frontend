import {PrimaryModalContainer, PrimaryModalContent} from "./PrimaryModal.styles";
import BackButton from "./BackButton";

const PrimaryModal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null
    }

    return (
        <PrimaryModalContainer>
            <PrimaryModalContent>
                <BackButton handleClick={onClose}/>
                {children}
            </PrimaryModalContent>
        </PrimaryModalContainer>
    )
}

export default PrimaryModal