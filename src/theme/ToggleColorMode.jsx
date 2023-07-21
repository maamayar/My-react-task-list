import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons"

const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Button 
        onClick={() => toggleColorMode()}
        position="relative"
        top=" 1px"
        variant='solid'
        marginTop="10px"
        >
            {colorMode === "dark" ? (
            <SunIcon color ="yellow.300" /> 
            ):( 
            <MoonIcon color="blue.700" />
        )}
        </Button>
    );
};

export default ToggleColorMode;