import { Image } from "@chakra-ui/react";
import { Load } from "./Style";


const Loader = () => {
    return (
        <div>
        <Load>
           <Image height = {"100px"} width = "300px" borderRadius="10px" src="https://i.ibb.co/WkjPYHd/Cart-Bazaar-logo.png" alt="logo"/>
        </Load>
        </div>
    );
};

export default Loader;