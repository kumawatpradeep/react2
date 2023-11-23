import React from "react";
import { Header } from "./component/header";
import Slider from "./component/slider";
import { Next } from "./component2/image";
import { Text } from "./compont3/text";
import { Com4 } from "./component4/one";
import { Two } from "./component4/two";
import { Main } from "./fouter/main";

function Home(){

    return(
        <>
        <Header/>
        <Slider/>
        <Next/>
        <Text/>
        <Com4/>
        <Two/>
        <Main/>
        </>
    )
}
export{Home}