const loginAPI = async (data) => {
    const queryParams = new URLSearchParams(data).toString();
    const url = `https://mp42e6362204c8215ba2.free.beeceptor.com/login?${queryParams}`;

    try {
        const response = await fetch(url, {
            method: 'GET', // Keep the method as GET
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error during loginAPI:', error);
        throw error;
    }
};

const loginHandler = async (user) => {
    const data = { 
        email: user.email,
        password: user.password,
    };

    try {
        const response = await loginAPI(data);
        console.log('Login successful:', response);
        return response;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
};

export default loginHandler;


//     "email":"deniz.gulbahar@gmail.com",
//     "password": "Ecommerce123"