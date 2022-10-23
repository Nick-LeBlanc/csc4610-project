import { useParams } from "react-router-dom";
import { getChars } from "../data/characters";


export default function SpecChar() {
    let params = useParams();
    let chars = getChars();
    let specChar;

    chars.forEach(char => {
        if(char.name === params.name){
            specChar = char;
        }
        
    });
        return (
        <main>
            <h2>Name: {specChar.name}</h2>
            


            </main> 
    );}