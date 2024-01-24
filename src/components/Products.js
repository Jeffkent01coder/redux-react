import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // api
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card className="h-100" style={{ width: "18rem" }} key={product.id}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>$ {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  console.log(products);

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
}

export default Products;
