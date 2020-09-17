import React from 'react';
import Item from './Item'

const Nav = () => {

  const navItems = [
    {
      id: 1,
      title: 'About As',
      url: '#'
    },
    {
      id: 3,
      title: 'IC',
      url: '#'
    },
    {
      id: 4,
      title: 'Blog',
      url: '#'
    }];

    return (
        
      <nav className="my-2 my-md-0 mr-md-5">
          { navItems.map(item =>
              <Item key={item.id}
                    item={item}/>
          )}
      </nav>

    )
}
export default Nav
