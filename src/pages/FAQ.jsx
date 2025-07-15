
import React from "react";

const FAQ = () => {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Soalan Lazim & Hubungi Kami</h2>
      <section className="space-y-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-600">Siapa boleh guna GradStart?</h3>
          <p className="text-gray-700">Semua graduan, pelajar tahun akhir, dan individu yang mencari kerja pertama.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-600">Adakah pengalaman saya anonymous?</h3>
          <p className="text-gray-700">Ya. Semua maklumat akan dirahsiakan dan tiada nama sebenar dipaparkan.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-600">Bagaimana data dikumpul?</h3>
          <p className="text-gray-700">Kami kumpulkan secara sukarela dari pengguna melalui borang kongsi pengalaman.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-600">Saya ada masalah, bagaimana nak hubungi?</h3>
          <p className="text-gray-700">Hantar emel kepada <a href="mailto:support@gradstart.my" className="text-blue-600 underline">support@gradstart.my</a> atau isi borang di bawah.</p>
        </div>
      </section>
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">📩 Hubungi Kami</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Nama Anda" className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" placeholder="Emel" className="w-full px-4 py-2 border rounded-lg" />
          <textarea placeholder="Mesej" className="w-full px-4 py-2 border rounded-lg"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">Hantar</button>
        </form>
      </section>
    </div>
  );
};

export default FAQ;
