const mongoose = require('mongoose');
const connection = 'mongodb+srv://naranjosebastian399_db_user:Admin1234@cluster1castrocarazo.fomqu8x.mongodb.net/Inventario';

const connectDB = async () =>
{
    try 
    {
        await mongoose.connect(connection);
        console.log("la base de datos actual es: " , mongoose.connection.name);
    }
    catch(error)
    {
        console.log(error.message)
    }
};

module.exports = connectDB;