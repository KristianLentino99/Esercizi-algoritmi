const numberOfElements = 10;
const elements = [];

for (let i = 0; i <= numberOfElements; i++) {
    elements[i] = i
}

const checkIfConnected = (p, q) => elements[p] == elements[q];
function union(p, q) {
    const pId = elements[p];
    const qId = elements[q];
    for (let i = 0; i <= elements.length; i++) {
        if(elements[i] == pId){
            elements[i] = qId;
        }
    }
}

console.log(elements)
union(1,2)
console.log(checkIfConnected(1,2))