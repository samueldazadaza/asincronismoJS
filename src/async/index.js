const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Somenthing Async'),3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const Somenthing = await doSomethingAsync();
    console.log(Somenthing);
}

console.log('Before');
doSomething();
console.log('After');

//capturrar los errores del llamado a la api
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');
