import React from 'react';


const Header = (props) => {
        return (
        <header className='header'>
            <h1>{props.course[0].name}</h1>
            <h2>{props.course[1].name}</h2>
        </header>
    );
};

export default Header;