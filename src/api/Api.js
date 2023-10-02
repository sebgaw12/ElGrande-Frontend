export class Api {
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

    static registerCustomer= async (userData, setFormData, navigate) => {
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


}
