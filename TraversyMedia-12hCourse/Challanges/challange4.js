
//Challange 4 Objects

const library = [
    {title: "bestseller",
    author: "Pascal Engman",
    status: {
        own: true, 
        reading: false, 
        read: false
    }},
    {title: "kokain",
    author: "Pascal Engman",
    status: {
        own: true, 
        reading: false, 
        read: false
    }},
    {title: "X",
    author: "Pascal Engman",
    status: {
        own: true, 
        reading: false, 
        read: false
    }}
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


const {title: firstBook , ...rest} = library[0];


const libJSON = JSON.stringify(library);

console.log(firstBook);
console.log(libJSON);

