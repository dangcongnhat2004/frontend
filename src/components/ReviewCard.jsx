import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
  return (
    <Link to={`/detail/${review.id}`} className="block p-4 bg-white rounded shadow hover:shadow-md">
      <h3 className="font-semibold text-lg">{review.title}</h3>
      <p className="text-sm text-gray-600">{review.category} • ⭐ {review.rating}</p>
      <p className="mt-2 text-gray-700">{review.content.slice(0, 100)}...</p>
    </Link>
  );
}
