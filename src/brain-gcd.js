
const NAME = welcome();




const nod = (num1, num2) => {
    if(num2 !== 0) {
        const del = num1 % num2
        return nod(num2, del)
    }
    return num1
}