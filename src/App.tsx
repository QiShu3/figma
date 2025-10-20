import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ReplaceContentDemo from "@/components/ReplaceContentDemo/ReplaceContentDemo";
import ElementPlusDemo from "@/components/ElementPlusDemo/ElementPlusDemo";
import LayoutDemo from "@/pages/LayoutDemo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/replace-content" element={<ReplaceContentDemo />} />
        <Route path="/element-plus" element={<ElementPlusDemo />} />
        <Route path="/layout-demo" element={<LayoutDemo />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}