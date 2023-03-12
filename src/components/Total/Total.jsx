import React from 'react';

const Total = (props) => {
    return (
        <>
            <p>Общее количество заданий = <span className='task'>{props.task1 + props.task2 + props.task3}</span> <span>задания</span> </p>
        </>
    );
};

export default Total;