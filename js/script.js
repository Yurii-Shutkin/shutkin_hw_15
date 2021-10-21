const arr = [1, 2, 3, -1, -2, -3];

function getPosNum (arr) {
    const posNumArr = [];
    if (arr.length === 0) return 'Передан пустой массив';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) posNumArr.push(arr[i]);
    }

    return posNumArr.length === 0 ? null : posNumArr;
}

console.log (getPosNum(arr));