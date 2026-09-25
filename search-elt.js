let array = [23,54,12,90,32,58]

function SearchElements(arr,elt){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == elt){
            console.log("array are found at of index: " + i)
        }
    }
}

SearchElements(array,54)