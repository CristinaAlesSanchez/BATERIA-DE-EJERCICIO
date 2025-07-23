const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}

/ejercicio 11

const duplicates = ( 'sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda' );
 function removeDuplicates(param) {
    let uniqueItems = [];
        for (let i = 0; i < param.length; i++) {
        if (!uniqueItems.includes(param[i])) {
            uniqueItems.push(param[i]);
        }
    }
    console.log(uniqueItems); 

    removeDuplicates(duplicates);
