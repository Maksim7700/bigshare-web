import React from 'react';


const Navigate = (props) => {
  return (
    <nav className={`container ${props.className}`}>{props.children}</nav>
  )
}

export default Navigate;
