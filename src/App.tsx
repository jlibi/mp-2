import TheCocktail from "./components/TheCocktail.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Cocktail} from "./interfaces/Cocktails.ts";

const ParentDiv=styled.div`
    //width: 80vw;
    margin: auto;
    background-color: #35383b;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Cocktail[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
            const {drinks} : {drinks: Cocktail[]} = await rawData.json();
            setData(drinks);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []); // Empty dependency array to run only once on mount.

    return(
        <ParentDiv>
            <TheCocktail data={data}/>
        </ParentDiv>
    )
}

