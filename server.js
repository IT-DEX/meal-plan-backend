const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 7000 || process.env.PORT;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})



//  vvryabova   axftqvkG5KtwI421
//  mongodb+srv://vvryabova:<password>@cluster0.arrdrhn.mongodb.net/?retryWrites=true&w=majority