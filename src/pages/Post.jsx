import { useState } from "react";

export default function Post() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);

  const categories = [
    { value: "Travel", label: "旅行" },
    { value: "Food", label: "食べ物" },
    { value: "Books", label: "本" },
    { value: "Other", label: "その他" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = { title, category, rating, content };

    await fetch(`${import.meta.env.VITE_API_BASE}/api/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    setSuccess(true);

    // Reset form
    setTitle("");
    setCategory("");
    setRating(0);
    setContent("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
        <h2 className="text-3xl font-bold text-center mb-10">新規レビュー投稿</h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              タイトル
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-soft bg-blush/30 focus:ring-2 focus-ring-blush transition"
              placeholder="例：大阪で一番おいしいコーヒー"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              カテゴリー
            </label>
            <select
              className="w-full p-3 rounded-lg border border-soft bg-blush/30 focus:ring-2 focus-ring-blush transition"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">カテゴリーを選択...</option>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              評価
            </label>
            <div className="flex space-x-1 text-4xl cursor-pointer text-gray-300">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "text-yellow-500" : ""}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              あなたのレビュー
            </label>
            <textarea
              rows="8"
              className="w-full p-3 rounded-lg border border-soft bg-blush/30 focus:ring-2 focus-ring-blush transition"
              placeholder="あなたの経験を共有してください..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blush text-navy p-3 rounded-lg font-semibold text-lg hover:bg-pink-200 transition-colors"
          >
            レビューを送信
          </button>
        </form>
      </div>

      {/* ✅ Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold text-navy mb-4">
              レビューが送信されました！
            </h3>
            <button
              className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
              onClick={() => setSuccess(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
