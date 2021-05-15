export const currentTimeStamp = () => {
    return Math.floor(Date.now() / 1000)

}

export const closest = (arr, num) => {
    let emptyArray = []
    arr.map((item, nextItem) => {
        emptyArray.push(item.timestamp)

    })
    // console.log("Empty array is"+emptyArray)
    return emptyArray.reduce((acc, val) => {
        if (Math.abs(val - num) < Math.abs(acc)) {
            return val - num;
        } else {
            return acc;
        }
    }, Infinity) + num;
}

export const getClosestTimestampInfo = (array, timestamp) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].timestamp === timestamp) {
            return array[i];
        }
    }


}

export const getTodayHours = (array,currentTime)=>{
    console.log("curent time is"+currentTime)
let emptyArray=[]

    for(let i=0;i<array.length;i++) {
        if(new Date(array[i].timestamp*1000).getDate() === new Date(currentTime *1000).getDate()) {

            console.log("time is "+new Date(array[i].timestamp*1000).getHours())
            emptyArray.push(array[i]);
        }
    }

    return emptyArray
}

export const getNextDayHours=(array,currentTime,day)=>{
    console.log("curent time is"+currentTime)
    let emptyArray=[]

    for(let i=0;i<array.length;i++) {
        if(new Date(array[i].timestamp*1000).getDate() === new Date(currentTime *1000).getDate()+day) {

            console.log("time is "+new Date(array[i].timestamp*1000).getHours())
            emptyArray.push(array[i]);
        }
    }

    return emptyArray
}
