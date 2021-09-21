import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  Icon,
  Menu,
  Table,
  Image,
  Divider,
  Button,
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} sepete eklendi!`)
  };

  return (
    <div>
      <Card.Group style={{ marginTop: "6em" }} itemsPerRow={4}>
        {products.map((product) => (
          <Card key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Card.Content style={{ marginTop: "2em", marginBottom: "2em" }}>
                {product.title}
              </Card.Content>
            </Link>

            <Image
              verticalAlign="middle"
              size="medium"
              src={product.image}
              wrapped
            />

            <Card.Content>
              <Card.Description>{product.price}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              <Button onClick={() => handleAddToCart(product)}>
                <a style={{ fontSize: 18 }}>
                  <Icon name="cart plus" />
                  Sepete Ekle
                </a>
              </Button>
            </Card.Content>
          </Card>
        ))} 
        </Card.Group>
     
    </div>
  );
}
