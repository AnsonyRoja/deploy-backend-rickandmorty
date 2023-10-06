const { User } = require('../DB_connection');


const email = "user@gmail.com";
const password = "123456789";



const createUser = async () => {



    const user = await User.create({
        email,
        password
    });

    return "User created";



}

module.exports = { createUser }