import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [reviews, setReviews] = useState([]);

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews`)
      .then((res) => res.json())
      .then(setReviews)
      .catch((err) => console.error("Fetch reviews failed:", err));
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative h-[50vh] min-h-[320px] w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://cdn-media.sforum.vn/storage/app/media/danh%20lam%20th%E1%BA%AFng%20c%E1%BA%A3nh%20vi%E1%BB%87t%20nam/danh-lam-thang-canh-viet-nam-thumbnail.jpg"
            alt="Huế"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white text-4xl sm:text-5xl font-bold text-shadow">
              あなたの次の物語を見つける
            </h2>
            <p className="text-white text-lg sm:text-xl mt-3 text-shadow">
              旅行、食べ物、本のためのレビュー。
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">カテゴリー</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: "Travel", label: "旅行", icon: "✈️" },
            { name: "Food", label: "食べ物", icon: "🍜" },
            { name: "Books", label: "本", icon: "📚" },
            { name: "Other", label: "その他", icon: "✨" },
          ].map((c) => (
            <Link
              key={c.name}
              to={`/category/${c.name}`}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer text-center"
            >
              <div className="text-5xl mb-3">{c.icon}</div>
              <h4 className="text-lg font-semibold">{c.label}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* RECENT REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h3 className="text-3xl font-bold text-center mb-10">最近のレビュー</h3>

        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">レビューがまだありません。</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <Link
                key={r.id}
                to={`/review/${r.id}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition"
              >
                <img
                  src={r.image_url || `https://placehold.co/600x400?text=${r.category}`}
                  alt={r.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{r.title}</h4>
                  <div className="text-yellow-500 mb-3">
                    {"★".repeat(r.rating) + "☆".repeat(5 - r.rating)}
                  </div>
                  <p className="text-gray-600 line-clamp-3">{r.content}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
