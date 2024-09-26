import React from "react";
import ItemCard from "../assets/components/itemCard";
import { useParams } from "react-router-dom";
// import AboutSection from '../assets/components/AboutSection';


export default function DeleteLater (){
    const { id } = useParams();

    return (
        <>
        {/* <h1>Simulacro de pantalla principal</h1> */}
        <ItemCard id={id}/>
        </>
    );
}