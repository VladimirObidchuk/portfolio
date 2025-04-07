import apiInstance from '../service/api.js';

export async function getAllReviews() {
  try {
    const res = await apiInstance.get('/reviews');
    return res.data;
  } catch (error) {
    console.error('Error:', error.status);
    throw error;
    // return error.status;
  }
}

export async function setReview(data) {
  try {
    const addReview = await apiInstance('/request', {
      // data - це маси
      email: data[0],
      comment: data[1],
    });
    return addReview.data;
  } catch (error) {
    console.error('Error:', error.status);
    return error.status;
  }
}
