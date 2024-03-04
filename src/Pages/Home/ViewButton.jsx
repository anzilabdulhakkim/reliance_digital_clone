import React from "react";
import { Text, Button } from "@chakra-ui/react";

const ViewButton = () => {
  return (
    <Button
      background="#003380"
      color="whiteAlpha.900"
      borderRadius="20px"
      border="1px"
      p="3"
      ml="10px"
      mt={5}
      _hover={{
        background: "whiteAlpha.900",
        color: "#003380",
        borderRadius: "20px",
        p: "4",
        border: "1px",
        variant: "outline",
      }}
    >
      <Text fontSize="md" fontWeight="500">
        View All
      </Text>
    </Button>
  );
};

export default ViewButton;
