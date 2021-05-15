
import React from 'react';


const CountryList=({lists,histories,toWhere,continent})=>{
console.log("coming list is"+lists.length)
    return (
        lists.map((list,nextList)=>(
            <li onClick={()=>(
                toWhere?
histories.push({
                    pathname:toWhere,
                    state:{
                        detail:list.name,
                        continent:continent,
                        id:list.id?list.id:''

                    }
                }):""            )} >{list.name}</li>

        ))
    )

}

export default CountryList
