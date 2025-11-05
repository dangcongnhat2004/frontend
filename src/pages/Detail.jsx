import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewById } from "../api/reviews";

export default function Detail() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => { getReviewById(id).then(setReview); }, []);

  if (!review) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{review.title}</h1>
      <div className="text-yellow-500 text-2xl mb-6">{"★".repeat(review.rating)}</div>
      <p className="prose text-lg leading-relaxed">{review.content}</p>
    </div>
  );
}
