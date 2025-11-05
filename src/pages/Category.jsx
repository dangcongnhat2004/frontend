import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../api/reviews";
import ReviewCard from "../components/ReviewCard";

export default function Category() {
  const { type } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(all => {
      if (type === "All") setReviews(all);
      else setReviews(all.filter(r => r.category === type));
    });
  }, [type]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">{type} レビュー</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
      </div>
    </div>
  );
}
