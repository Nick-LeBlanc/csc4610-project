import { useParams } from "react-router-dom";
import { getStages } from "../data/stages";


export default function SpecStage() {
    let params = useParams();
    let stages = getStages();
    let specstage;

    stages.forEach(stage => {
        if(stage.name === params.name){
            specstage = stage;
        }
        
    });
        return (
        <main>
            <h2>Name: {specstage.name}</h2>
            


            </main> 
    );}