import React from 'react';
import '../css/Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input
                value={value}
                placeholder="오늘 할 일을 입력하세요.."
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;