import React from "react";

const SuperHeroTable = (props) => {
    return (
        <div className='table'>
            <table>
                <tr className='tableHeader'>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
                {props.superheroes.map((superhero) =>{
                    return (
                        <tr className="superDetails"
                    )
                })}
            </table>
        </div>
    )
}