const axios = require('axios');

async function getAllUsers(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return response.data.slice(0 ,3)
}

async function getUserPosts(userId){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return response.data
}

//Secuencial
async function secuencial() {
    console.log('Secuencial')
    console.time("Secuencial");
    const users = await getAllUsers()

    for (const user of users) {
        const posts = await getUserPosts(user.id);
        console.log(`${user.name} tiene ${posts.length}         publicaciones`);
    }
    console.timeEnd("Secuencial");
}

//Concurrente
async function concurrente() {
    console.log('Concurrente')
    console.time("Concurrente");
    const users = await getAllUsers()

    const users_promises = users.map(async (u) => {
        const posts = await getUserPosts(u.id);
        return { name: u.name, length: posts.length }
    })

    const results = await Promise.all(users_promises)
    
    results.forEach((result) =>
        console.log(`${result.name} tiene ${result.length} publicaciones`)
    );
    console.timeEnd("Concurrente");
}

(async () => {
  await secuencial();
  await concurrente();
})();