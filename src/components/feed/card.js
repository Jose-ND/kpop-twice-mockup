import React from 'react';
import axios from 'axios';


const Card = ({ listOfArrivals }) => {


    // const postPromise = fetch('http://127.0.0.1:5000/products', {mode: 'no-cors'})
    

    // postPromise
    //     .then(data => data.json())
    //     .then(data => {
    //         data.forEach((item) => {
    //             console.log(item.id);
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     });


    return (
        <div>
            {/* {listOfArrivals.map(item => {
                return(
                    <ul key={item.id}>
                        <li>{item.title}</li>
                    </ul>
                )
            })} */}
        </div>
            

    )
}

export default Card;
