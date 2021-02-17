const somethinWillHappen = () => {
    return new  Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whooops!');
        }
    });
};

somethinWillHappen()
    .then(response => console.error(response))
    .catch(err => console.error(err));

//otro ej2

const somethinWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Uppps');
            reject(error);
        }
    });
}

somethinWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//correr varias promesas (parra correr en Power Shell= npm run promise)

Promise.all([somethinWillHappen(), somethinWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    }) 
    .catch(err => {
        console.error(err);
    })