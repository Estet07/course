import React from 'react';


const Header = (props) => {
        return (
        <header className='header'>
            <h1>{props.course.name}</h1>
        </header>
    );
};

export default Header;