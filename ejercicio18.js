const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

//ejercicio 18

const placestotravel = (
   (id: 5, name: 'Japan'),
   (id: 11, name: 'Venecia'),
    (id: 23, name: 'Murcia'),
    (id: 40, name: 'Santander'),
    (id: 44, name: 'Filipinas'),
    (id: 59, name: 'Madagascar'),
)
const idsdelete = (11,40);
for (let i = 0; i< placestotravel,length; i++) {
    if (idsdelete.includes(placestotravel[i].id)) {
        placestotravel.splice(i, 1);
        i--;
    }
} 
console.log(placestotravel);
