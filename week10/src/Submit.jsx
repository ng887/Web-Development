import React from 'react';

const Submit=({
    disabled,
    onClick
}) => {
    return (
   <input type='submit' value='Guess' disabled={disabled} onClick={ (event) => onClick(event) } /> 
)
};
export default Submit;
