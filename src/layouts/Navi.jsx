import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);

  const history = useHistory();
  
  const handleSignOut = () => {
    setIsAuthenticated(false);
    history.push("/");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item as={NavLink} exact to="/" name="Anasayfa" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
