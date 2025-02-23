import styled from "styled-components";
import {Cocktail} from "../interfaces/Cocktails.ts";

// Container for all drink cards
const AllDrinkDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

// Styled component for each cocktail card
const SingleDrinkDiv=styled.div<{$glassType: string}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 28%;
    padding: 0;
    margin: 1%;
    background-color: ${(props) => (props.$glassType === "Cocktail glass" ? '#589bff' : '#f5c4ee')};
    color: ${(props) => (props.$glassType !== "Cocktail glass" ? '#333' : 'white')};
    border: 2px rgba(16, 17, 17, 0.87) solid;
    font: normal  bold calc(1px + 1vw) Geneva, Helvetica Neue;
    text-align: center;
    box-shadow: 0 2px 20px rgba(64, 77, 91, 0.6);
    border-radius: 10px;
    overflow: hidden;

`;

export default function TheCocktail(props : { data:Cocktail[] } ){
    return (
        <AllDrinkDiv>
            {
                props.data.map((drink: Cocktail) =>
                    <SingleDrinkDiv key={drink.idDrink} $glassType={drink.strGlass}>
                        <img src={drink.strDrinkThumb} alt={`image of ${drink.strDrink}`} />
                        <h1>{drink.strDrink}</h1>
                        <p>{drink.strIBA !== "Null" ? drink.strIBA : ""}</p>
                        <p>Category: {drink.strCategory}</p>
                    </SingleDrinkDiv>
                )
            }
        </AllDrinkDiv>
    );
}

