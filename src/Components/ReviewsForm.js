import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewsForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    sneaker_id: id,
  });

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setReview(prevState => ({ ...prevState, [id]: value }));
  };
  

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      console.log("review id", reviewDetails.id);
      props.toggleView(); // specifies whether we are editing or creating
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      sneaker_id: id,
    });
  };
  
  return (
    <div className="Edit">
          {/* renders the children elements of this component */}
          {/* <ReviewForm> some child element </ReviewForm> */}
        {props.children}
        <form onSubmit={handleSubmit}>
         <label htmlFor="reviewer">Name:</label>
         <input
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
         /> 

         <label htmlFor="title">Title:</label> 
         <input
          id="title"
          type="text"
          required
          value={review.title}
          onChange={handleTextChange}
         /> 

         <label htmlFor="rating">Rating:</label>
         <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={review.rating}
          onChange={handleTextChange}
         />

         <label htmlFor="content">Review:</label>
         <textarea
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think about these sneakers?"
          onChange={handleTextChange}
         />

         
         <br />

         <input type="submit" />
        </form>
    </div>
  );
};

export default ReviewsForm;
