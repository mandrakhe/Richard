import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";

const app = express();
app.use(morgan("dev"));
const PORT = 5000;
const URL = "https://polls.apiblueprint.org/questions";
const URI = "https://jsonplaceholder.typicode.com/todos";
app.use(cors());
axios
    .get(URL)

    // fetch(URL)
    // .then((response) => {
    //     return response.json();
    //   })
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.error('error', error);
    //   });

    // app.get("/", async (req, res) => {
    //   try {
    //     const response = await fetch(URI);
    //     const data = await response.json();
    //     res.json(data);
    //   } catch (error) {
    //     console.log("error" + error);
    //   }
    // });

    .then((response) => {
        const data = JSON.parse(JSON.stringify(response.data));
        console.log(data);
        getUsers: () => data;

        app.get("/", async (req, res) => {
            try {
                const response = await axios
                    .get(URI)
                    .then((response) => {
                        res.json(response.data);
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log("error" + error);
                    });
            } catch (error) {
                console.log(error);
            }
        });
    });
app.listen(PORT, () => console.log(`listening on port ${PORT} `));
