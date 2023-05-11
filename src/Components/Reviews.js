import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review.js";
import ReviewsForm from "./ReviewsForm.js";

const API = process.env.REACT_APP_API_URL;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/sneakers/${id}/reviews`).then((response) => {
      setReviews(response.data);
    });
  }, [id]);

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/sneakers/${id}/reviews`, newReview)
      .then((response) => {
        setReviews([response.data, ...reviews]);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (reviewId) => {
    axios
      .delete(`${API}/sneakers/${id}/reviews/${reviewId}`)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexDeletedReview = copyReviewArray.findIndex((review) => {
          return review.id === id;
        });
        copyReviewArray.splice(indexDeletedReview, 1);
        setReviews(copyReviewArray);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/sneakers/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewsForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewsForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
};

export default Reviews;
