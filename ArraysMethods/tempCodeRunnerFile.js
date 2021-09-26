
// Metodo Find
const posts = [
    {
        id : 1,
        title: 'Hola numero 1',
        description: 'Hola description '
    },
    {
        id : 2,
        title: 'Hola numero 2',
        description: 'Hola description 2 '
    },
    {
        id : 3,
        title: 'Hola numero 3',
        description: 'Hola description 3 '
    }
];

/* const searchInArray = (key) => {
    const queso = posts.find(post => post.title === key)
    console.log(queso)
}

searchInArray(2)
 */

// Metodo map 
/* 
const roadMap = posts.map(post => post.title)
console.log(roadMap); */

const roadFilter = posts.filter(post => post.description === "Hola")