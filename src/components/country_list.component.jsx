import React from 'react';


const CountryList = ({lists, histories, toWhere, continent}) => {
    console.log("coming list is" + lists.length)
    const setLocalStoredSettings=(toWhereData)=>{
        return toWhereData==='/country'?localStorage.setItem('continent',continent):''

    }

    const historyData =(pathname,detail,continent,id)=>{
        histories.push({
            pathname: pathname,
            state: {
                detail: detail,
                continent: continent,
                id: id ? id : ''

            }
        })
        setLocalStoredSettings()
        localStorage.setItem('lastLocationId',id)
    }


    return (
        lists.map((list, nextList) => (
            <li onClick={() => (

                toWhere ?(
                        // () => {
                    historyData(toWhere,list.name,continent,list.id)
                        // histories.push({
                        //     pathname: toWhere,
                        //     state: {
                        //         detail: list.name,
                        //         continent: continent,
                        //         id: list.id ? list.id : ''
                        //
                        //     }
                        // })
                        // localStorage.setItem('lastLocationId',list.id)
                   )

                   : "")}>{list.name}</li>

        ))
    )

}

export default CountryList
