import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Header from "./components/Header";   // ✅ Thêm dòng này

export default function App() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ✅ Header luôn ở trên cùng */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
      </Routes>

    </div>
  );
}
