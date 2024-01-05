const numberOfElements = 100000;
const elements = [];
const sizes = [];

for (let i = 0; i <= numberOfElements; i++) {
    elements[i] = i
    sizes[i] = 0;
}


const findRoot = (i)  => {
    while(i != elements[i]){
        i = elements[i]
    }

    return i;
}

const checkIfConnected = (p, q) => findRoot(p) === findRoot(q);
function union(p, q) {
    const pId = elements[p];
    const qId = elements[q];
    if(sizes[pId] < sizes[qId]) {
        elements[pId] = qId;
        sizes[qId] += sizes[pId];
    } else {
        elements[qId] = pId;
        sizes[pId] += sizes[qId];
    }
}

union(1,2)
union(0,200)
union(200,9)
union(0,1)
union(0,111)
union(111,10000)
union(111,9999)
union(112,111)
union(1,111)
console.log(`1 & 2 are connected? ${checkIfConnected(1,2)}`)
console.log(`1 & 9999 are connected? ${checkIfConnected(1,9999)}`)
console.log(`0 & 9 are connected? ${checkIfConnected(0,9)}`)