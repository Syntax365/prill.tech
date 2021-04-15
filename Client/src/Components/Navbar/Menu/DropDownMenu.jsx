import React, { Component } from "react";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";

class DropDownMenu extends Component {
  render() {
    const { parentLabel = "Links", children = "", ...otherProps } = this.props;
    return (
      <>
        <Menu isLazy>
          <MenuButton>{parentLabel}</MenuButton>
          <MenuList>{children}</MenuList>
        </Menu>
      </>
    );
  }
}

export default DropDownMenu;
