import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//          res.send("server is ready");
// })

//get a list on 5 jokes
app.get('/api/jokes', (req, res) => {
         const jokes = [
                  {
                           id: 1, 
                           title: "A Joke",
                           content: "This is a joke 1",
                  },
                  {
                           id: 2, 
                           title: "A Joke",
                           content: "This is a joke 2",
                  },
                  {
                           id: 3, 
                           title: "A Joke",
                           content: "This is a joke 3",
                  },
                  {
                           id: 4, 
                           title: "A Joke",
                           content: "This is a joke 4",
                  },
                  {
                           id: 5, 
                           title: "A Joke",
                           content: "This is a joke 5",
                  },
         ]

         res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
         console.log(`server is listening on ${port}`);
});