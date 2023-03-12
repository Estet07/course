import React from 'react';

const Part = (props) => {
    
    return (
        <>
            <p>{props.part} - <span className='task'>{props.task}</span> <span>заданий</span></p>
        </>
    );
};

export default Part;