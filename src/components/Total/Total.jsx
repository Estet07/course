import React from 'react';

const Total = (props) => {

    const total = props.tasks.reduce((acc, rec) => {
        return acc + rec.task;
    },0)

    return (
        <>
            <p>Общее количество заданий = <span className='task'>{total}</span>{" "}
             <span>задания</span>{" "} 
             </p>
        </>
    );
};

export default Total;