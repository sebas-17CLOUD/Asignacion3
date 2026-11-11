const express = require('express');
const connectDB = require('./config/database');
const TFIRoute = require('./routes/TFIRoute');
const app = express();

app.use(express.json());
app.use('/api/TFI' , TFIRoute);

module.exports = app;

const startServer = async () => 
{
    try
    {
        await connectDB();

        app.listen(3000, () =>
        {
            console.log('Server is running o Port 3000')
        });
    }
    catch (error)
    {
        console.log(error.message);
    }
}

startServer();