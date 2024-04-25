import Card from "./сard";
import { word } from "./words";
function Cards (){
    return (
    <section id="container">
    {
                    word.map((word, index) => {
                        return (
                            < Card word = {word} key = {index} />
                        )                
                    })
                }
    </section>
    );
    }
    
    export default Cards;
    