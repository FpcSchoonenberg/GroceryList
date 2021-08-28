import React from 'react'

function InputField(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text'
                    placeholder='Enter a productname'
                    onChange={props.handleChange}
                    name='title'
                    value={props.value} />
                <button>Add product</button>
            </form>
        </div>)
}

export default InputField
