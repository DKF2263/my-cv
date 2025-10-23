function Contact() {
  return (
    <footer className="bg-[#0b0b0d] text-white py-12 px-6 text-center border-t border-gray-800">
      <h2 className="text-2xl font-bold text-blue-400 uppercase tracking-wide mb-6">
        Contact
      </h2>

      <div className="space-y-2 text-gray-300">
        <p>📍 Ho Chi Minh City, Vietnam</p>
        <p>📞 (+84) 947 085 416</p>
        <p>✉️ lehoangdangkhoa2842003@gmail.com</p>
      </div>

      <div className="mt-8">
        <a
          href="/CV_LeHoangDangKhoa.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-400 text-black font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </a>
      </div>

      <p className="text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} Lê Hoàng Đăng Khoa. All rights reserved.
      </p>
    </footer>
  );
}

export default Contact;
