import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {}
const findAllTuits = (req, res) =>
    res.json(tuits);
const updateTuit = (req, res) => {}
const deleteTuit = (req, res) => {}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
