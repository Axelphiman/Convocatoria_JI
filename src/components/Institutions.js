import React, { useState } from "react";
import PointOne from "./PointOne";
import PointTwo from "./PointTwo";
import PointThree from "./PointThree";
import PointFour from "./PointFour";

 export const fetchData = async (uri) => {
    const response = await fetch(`https://inspirehep.net/api/${uri}`) 
    const data = await response.json();
    return data;
      /*.then(response => response.json())
      .then(data => setResult(() => data.hits.hits))
      .catch(error => console.log(error));*/
};


const Institutions = () => {
    
    const [pointOne, setPointOne] = useState(true);
    const [pointTwo, setPointTwo] = useState(false);
    const [pointThree, setPointThree] = useState(false);
    const [pointFour, setPointFour] = useState(false);

    const handlerButton = (pointOne, pointTwo, pointThree, pointFour) => {
        setPointOne(pointOne);
        setPointTwo(pointTwo);
        setPointThree(pointThree);
        setPointFour(pointFour);
    };

    return (
        <div>
            <div>
                <button onClick={() => handlerButton(true, false, false, false)}>Point One</button>
                <button onClick={() => handlerButton(false, true, false, false)}>Point Two</button>
                <button onClick={() => handlerButton(false, false, true, false)}>Point Three</button>
                <button onClick={() => handlerButton(false, false, false, true)}>Point Four</button>
            </div>
            {pointOne && <PointOne />}
            {pointTwo && <PointTwo />}
            {pointThree && <PointThree />}
           
        </div>

    );
}
export default Institutions;