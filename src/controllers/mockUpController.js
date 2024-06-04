// Connect DB
const { connect, getClient } = require("../connection/connect"); // Adjust the path based on your project structure

// Connect to MongoDB
connect();
const client = getClient();

async function getAll(req, res) {
    try {
        // get ALL data
        const mockUpCollection = client.db("mock_data_db").collection("mock_data_collection");
        const data = await mockUpCollection.find({}).toArray();

        res.status(200).json({ data });
    } catch (error) {
        const result = {
            status_code: 500,
            error_msg: "Internal Server Error",
        };
        res.status(500).json(result);
    }
}


module.exports = {
    getAll,
};
