import React, { useState } from 'react';
import Loading from '../components/loading/loading';

const withLoadingLogin = (Component) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(false); 

        const updateLoading = (state) => {
            setIsLoading(state);
        }
        return ( isLoading ? (
                <Loading /> 
            ) : (
                <Component {...props} updateLoading={updateLoading} />
            )
        )
        }
};

export default withLoadingLogin;