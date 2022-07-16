import { useState } from "react";

const Cards = (props) => {
    const [isFacing, setIsFacing] = useState('down')
    const flipCard = () => { setIsFacing('up')}
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        {Array(props.amount).fill().map(el => <td key={el} onClick={flipCard}>{isFacing}</td>)}
                        {/*<td>down</td>
                        <td>up</td>
                        <td>down</td>
    <td>down</td>*/}
                    </tr>
                </tbody>
            </table>
        </div>
    )
  };

export default Cards;