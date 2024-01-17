import { useState } from 'react';

const useFormValidation = (validationFunction) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        const inputValue = event.target.value;
        setValue(inputValue);

        const validationError = validationFunction(inputValue);
        setError(validationError);
    };

    return { value, error, handleChange };
};

export default useFormValidation;