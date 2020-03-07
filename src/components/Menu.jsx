import React, {useState} from "react";
import {Menu} from 'semantic-ui-react'

const TopMenu = (props) => {

  const {name, setName} = useState({})

 const handleItemClick = (e, { name }) => this.setName({ activeItem: name })

  return (
    <Menu>
      <Menu.Item
        name='browse'
        onClick={handleItemClick}>
        Store
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='signup'
          onClick={handleItemClick}>
          Total: &nbsp; <b>0</b>
        </Menu.Item>

        <Menu.Item
          name='help'
          onClick={handleItemClick}>
          Cart (<b>0</b>)
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default TopMenu;