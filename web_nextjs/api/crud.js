import axios from "axios";

// GET all s
export const GETALL = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching s:", error);
    throw error;
  }
};

// GET  by id
export const GET = async (url, id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw error;
  }
};

// CREATE 
export const POST = async (url, Data) => {
  try {
    const response = await axios.post(url, Data);
    return response.data;
  } catch (error) {
    console.error("Error creating :", error);
    throw error;
  }
};

// UPDATE 
export const UPDATE = async (url, id, Data) => {
  try {
    const response = await axios.put(`${url}/${id}`, Data);
    return response.data;
  } catch (error) {
    console.error("Error updating :", error);
    throw error;
  }
};

// DELETE 
export const DELETE = async (url, id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting :", error);
    throw error;
  }
};
