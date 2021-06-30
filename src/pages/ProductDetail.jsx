import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";
export default function ProductDetail() {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductDetails(id).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div>
      <Card fluid style={{ marginTop: "4em" }}>
        <Card.Content>
          <Image size="medium" src={product.image} />
          <Card.Header style={{ marginTop: "4em" }}>
            {product.title}
          </Card.Header>
          <Card.Header style={{ marginTop: "1em" }}>
            {product.price} TL
          </Card.Header>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Sepete Ekle
            </Button>
            <Button basic color="red">
              Listeme Ekle
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
