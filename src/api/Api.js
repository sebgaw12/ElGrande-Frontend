export class Api {
    static getIngredients = async (setState) => {
        fetch('http://127.0.0.1:8080/api/v1/ingredients')
            .then((response) => response.json())
            .then((data) => {
                setState({filterData: data});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static logIn = async (setLoading, formData, setUserName, navigate) => {
        const loginUrl = 'http://127.0.0.1:8080/api/v1/customers';
        try {
            setLoading(true); // Set loading state

            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Authentication failed. Please check your credentials.`);
            }

            const data = await response.json();
            setUserName(`${data.name} ${data.surname}`);

            console.log("User logged in successfully");
            navigate('/main-page');

        } catch (error) {
            console.error(error);
            alert(error.message); // Display a user-friendly error message
        } finally {
            setLoading(false); // Reset loading state
        }
    }

    static getDishes = async (id, setMenu) => {
        const response = await fetch(`http://localhost:8080/api/v1/dishes?restaurantId=${id}`)

        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }

        const data = response.json()
        return setMenu(await data)
    }

    static registerCustomer = async (userData, setFormData, navigate) => {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/v1/customers',
                {
                    method: 'POST',
                    headers:
                        {
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(userData),
                });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setFormData(
                {
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    passwordRepeat: '',
                });

            navigate('/login');

        } catch (error) {
            console.error(error);
            alert('Error creating user');
        }
    }

    static getRestaurantDetails = async (id, restaurantDetails) => {
        const response = await fetch(`http://localhost:8080/api/v1/restaurants/${id}`)
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }
        const data = response.json()
        return restaurantDetails(await data)
    }

    static getAddressByRestaurantId = async (id, addresDetails) => {
        const response = await fetch(`http://localhost:8080/api/v1/addresses?restaurantId=${id}`)
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }
        const data = response.json()
        addresDetails(await data)
    }

    static getOpeningHours = async (id, openingHours) => {
        const resp = await fetch(`http://localhost:8080/api/v1/business-hours?restaurantId=${id}`)
        if (!resp.ok) {
            throw new Error('HTTP error: ' + resp.status)
        }
        const data = resp.json()
        openingHours(await data)
    }

    static registerRestaurant = async (formData) => {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/v1/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Add new restaurant: SUCCESS")
                console.log(formData)
            } else {
                console.log(formData)
                console.log("Add new restaurant: ERROR")
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }

    static getAllRestaurants = async (page, size, sort, setData, setMore) => {
        const response = await fetch(`http://localhost:8080/api/v1/restaurants?page=${page}&size=${size}&sort=${sort}`)
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }
        const data = await response.json()

        if (page === 0) {
            setData(data)
        } else {
            setData((prevData) => [...prevData, ...data])
        }

        if (data.length === 0) {
            setMore(false)
        }
    }

    static getReviews = async (id, setReviews) => {
        const response = await fetch(`http://localhost:8080/api/v1/reviews?restaurantId=${id}`)

        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status)
        }

        const data = response.json()
        setReviews(await data)
    }

    static addReview = async (restaurantId, customerId, comment, grade) => {
        try {
            const requestBody = {
                restaurantId: restaurantId,
                customerId: customerId,
                comment: comment,
                grade: grade
            }

            const response = await fetch('http://localhost:8080/api/v1/reviews', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestBody)
            })

            if (!response.ok) {
                const errMsg = await response.text()
                console.log(`Wystąpił błąd: ${response.status} - ${errMsg}`)
                throw new Error(`Wystąpił błąd ${response.status}`)
            }
        } catch (e) {
            console.log(`Wystąpił błąd: ${e}`);
        }
    }
}
