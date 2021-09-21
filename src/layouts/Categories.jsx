import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item name="Anasayfa" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
