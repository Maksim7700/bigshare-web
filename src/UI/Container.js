import React from 'react';

const Container = (props) => {
  return (
    <div className={`container em-05 ${props?.className}`}>{props.children}</div>
  )
}

export default Container;
