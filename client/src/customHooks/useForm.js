import {useState} from 'react';

const useForm = (callback) => {
    const [values,setValues] = useState({
        email:"michelle@dcc.com",
        password: "michelleisawesome"
    });

    const handleChange = (event) => {
        event.persist();
        setValues({...values,[event.target.name]:event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return {values, handleChange, handleSubmit}
}

export default useForm;