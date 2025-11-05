const BASE = import.meta.env.VITE_API_BASE;

export const getReviews = async () => {
  const res = await fetch(`${BASE}/api/reviews`);
  return res.json();
};

export const getReviewById = async (id) => {
  const res = await fetch(`${BASE}/api/reviews/${id}`);
  return res.json();
};

export const createReview = async (data) => {
  const res = await fetch(`${BASE}/api/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};
