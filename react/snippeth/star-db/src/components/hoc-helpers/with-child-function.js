import React from 'react';

const withChildFunction = (fn) => (Wrapped) => {
  console.log(fn)
  console.log(Wrapped)
  return (props) => {
    debugger;
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

export default withChildFunction;