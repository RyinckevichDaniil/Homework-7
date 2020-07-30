function odd(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 == 1) {
            result.push(arr[index]);
        } else {
            continue;
        }
        
    }
    return result;
};

function even(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 == 0) {
            result.push(arr[index]);
        } else {
            continue;
        }
        
    }
    return result;
};

function flat(arr) {
    result = [];
        for (let index = 0; index < arr.length; index++) {
            if(Array.isArray (arr)) {
                if(typeof arr[index] === 'number') {
                    result.push(arr[index])
                } 
                else {
        
                    for (let j = 0; j < arr[index].length; j++) {
                        result.push(arr[index][j]);
                    }
                }
            }
        }
        return result;
};

const array =[

    [3,2,6], 4, 5, [9, 7, 10], 11

];


console.log(flat(array));
