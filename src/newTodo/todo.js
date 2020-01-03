import React, { useState } from 'react';

export default props => {
    const [value, setValue] = useState('');
    const [arry, setArry] = useState([]);

    const submitForm = (event) => {
        event.preventDefault();
        if (value) {
            setArry([...arry, value]);
            setValue('');
        }

    }

    const Delete = (index) => {


    }


    return (
        <div><h1>Todo App</h1>
            <form onSubmit={submitForm}>
                <input type='text' value={value} onChange={(event) => setValue(event.target.value)} placeholder="Type Your value here" />
                <button>Add</button>
            </form>
            <div >
                {arry ? arry.map((value, index) => <li key={index}>{value}<button onClick={Delete}>Delete</button></li>) : null}
            </div>

        </div>
    )
}


