import { useParams } from "react-router-dom";
import { getPlayers } from "../data/players";


export default function Specplayer() {
    let params = useParams();
    let players = getPlayers();
    let specplayer;

    players.forEach(player => {
        if(player.name === params.name){
            specplayer = player;
        }
        
    });
        return (
        <main>
            <h2>Name: {specplayer.name}</h2>
            


            </main> 
    );}