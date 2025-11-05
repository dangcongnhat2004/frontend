export default function Header() {
  return (
    <header className="border-b bg-cream px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-navy">
          Kotonohа（言の葉）
        </a>

        <nav className="flex space-x-6 text-navy">
          <a href="/">ホーム</a>
          <a href="/category">カテゴリー</a>
          <a href="/about">Kotonohaについて</a>

          <a
            href="/post"
            className="bg-blush px-4 py-2 rounded-full hover:bg-pink-200 transition"
          >
            レビューを投稿
          </a>
        </nav>
      </div>
    </header>
  );
}
