import Section1 from "./container-1"
import Section2Main from "./container-2"
import Header from "../Header/Header"
import { useState } from "react"
import Foo from "../Footer/footer"


export default function Home(){
    const[Heading,setHeading] = useState("Instagram Downloader")
    return(
        <>
        <Header setHeading={setHeading}/>
        <Section1 Heading={Heading} setHeading={setHeading}/>
        <Section2Main Heading={Heading} setHeading={setHeading}/>
        <Foo/>

        </>
    )
}