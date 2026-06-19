import api from "../Api/Api";

//  Upload file
export const uploadDocument = async (file) => {
  const formData = new FormData();
  formData.append("documents", file);

  const response = await api.post("itinerary/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

//  Extract and generate itinerary
export const extractItinerary = async (id) => {
  const response = await api.post(`/${id}/extract`);
  return response.data;
};

//get itinerary
export const getItineraryById = async (id) => {
  const response = await api.get(`/itinerary/${id}`);
  return response.data;
};

//  Get all itineraries
export const getAllItineraries = async () => {
  const response = await api.get("/itinerary");
  return response.data;
};