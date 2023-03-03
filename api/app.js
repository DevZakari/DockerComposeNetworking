import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express()

app.use(cors())
app.options('*',cors());

 // https://jsonplaceholder.typicode.com/todos/

app.get("/", async (req, res) => {
    try {
        const todos = await axios.get("http://c_mongo_compose:27017");
        //res.send(todos);
        console.log(todos.data);
        res.status(200).send(todos.data);
      } catch (error) {
        res.status(500).send({
          message: `error : ${error.message}`,
        });
      }
})

app.listen(8000, () => {
  console.log('listening for requests on port 8000')
})