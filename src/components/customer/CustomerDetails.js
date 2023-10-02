import {mockCustomer} from "../../mockdata/MockCustomer";

const CustomerDetails = () => {
    return (
        <div>
            <div>Użytkownik: {mockCustomer.name} {mockCustomer.surname}</div>
            <div>Email: {mockCustomer.email}</div>
        </div>
    )
}
export default CustomerDetails
