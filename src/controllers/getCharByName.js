const URL = "https://rickandmortyapi.com/api/character";
const axios = require('axios');




const getCharByName = async (req, res) => {

    const { name } = req.params;

    console.log(name);

    try {


        const response = await axios.get(`${URL}/?name=${name}`)

        const { data } = response;

        if (data.error) throw new Error(data.error);

        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({ error: error.message });


    }


}

module.exports = getCharByName;