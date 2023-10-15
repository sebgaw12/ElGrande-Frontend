import {useState} from "react";

export const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen)
    }

    return {isOpen, toggle}
}