import axios from "axios";

const API = {
  // Retrieves species information from database
  getSpeciesInfo: function() {
    return axios.get("/api/lifesearch", {species});
  },
};

export default API;
