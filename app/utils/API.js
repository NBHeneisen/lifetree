import axios from "axios";

const API = {
  // Retrieves species information from database
  getSpeciesInfo: function(species) {
    return axios.get("/api/lifesearch", {params: {species}});
  },
};

export default API;
