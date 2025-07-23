const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
}

/ejercicio 11

const mixedElements = ( 6, 1, 'rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub' );
function averageWord(param) {
    let sum = 0;
    for (let i = 0, i < param,length; i++) {
        if (typeof param[i] === 'number') {
            sum += param[i];
        } else if (typeof param(i) === 'string') {
            sum += param[i].length;
        }
        console.log(sum) 

    }

