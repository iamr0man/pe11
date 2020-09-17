import React from 'react';

const Item = (props) => {
  const { key, item } = props;
  
  return (

    <a className="p-3 text-dark" key={key} href={item.url}>
        {item.title}
    </a>
  );
}

export default Item;
