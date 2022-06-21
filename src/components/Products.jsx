import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Products = () => {
  const [prod, setProd] = React.useState([]);

  React.useEffect(async () => {
    await fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setProd(res));
  }, []);

  return (
    <div>
      {prod.map((ele) => (
        <div>
          <h1>
            -------------------------------------------------------------------------------------------------------------------------------
          </h1>
          <Heading>{ele.name}</Heading>
          <Text fontSize="xl">{ele.description}</Text>
          <Button>Add Item</Button>
          <Button>Increment</Button> <Button>Decrement</Button>
          <Button>Remove</Button>
        </div>
      ))}
    </div>
  );
};

export default Products;
