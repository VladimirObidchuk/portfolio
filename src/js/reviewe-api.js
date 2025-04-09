import apiInstance from '../service/api.js';

export async function getAllReviews() {
  try {
    const res = await apiInstance.get('/reviews');
    return res.data;
  } catch (error) {
    console.error('Error:', error.status);
    throw error;
  }
}

export async function setReview(data) {
  try {
    const response = await apiInstance.post('/requests', {
      email: data.email,
      comment: data.comment,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
