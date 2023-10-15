import {useState} from "react";

/**
 * Hook that allows to toggle between true and false
 *
 * @returns {{isOpen: boolean, toggle: toggle}}
 */
export const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Changes {isOpen} variable to false or true
     */
    function toggle() {
        setIsOpen(!isOpen)
    }

    return {isOpen, toggle}
}