
import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Macam Mana Saya Survive Gaji RM1,800 di KL",
      date: "12 Julai 2025",
      summary: "Kisah sebenar seorang graduan baru bekerja dengan bajet ketat dan harapan besar.",
    },
    {
      title: "Red Flag Masa Interview – Pengalaman Benar",
      date: "4 Julai 2025",
      summary: "Jangan abaikan tanda-tanda awal dalam sesi temuduga yang boleh jadi petunjuk suasana kerja toksik.",
    },
    {
      title: "Kerja Tak Sesuai Dengan Course? Normal Je!",
      date: "30 Jun 2025",
      summary: "Ramai graduan mula kerja dalam bidang lain, tapi tetap berkembang dan berjaya.",
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Blog & Kisah Benar</h2>
      {posts.map((post, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-600">{post.title}</h3>
          <p className="text-sm text-gray-400">{post.date}</p>
          <p className="text-gray-700 mt-2">{post.summary}</p>
          <button className="mt-4 text-blue-600 hover:underline">Baca Lagi →</button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
