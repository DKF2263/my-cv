import { FaGithub, FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <footer className="bg-[#0b0b0d] text-white py-12 px-6 text-center border-t border-gray-800">
      <h2 className="text-2xl font-bold text-blue-400 uppercase tracking-wide mb-6">
        Contact Me
      </h2>

      
      <div className="flex justify-center gap-10 text-3xl mb-6">
        {/* Email */}
        <a
          href="mailto:lehoangdangkhoa2842003@gmail.com"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
          title="Email"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/DKF2263"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
          title="GitHub"
        >
          <FaGithub />
        </a>
        {/* FB */}
        <a
          href="https://www.facebook.com/le.hoang.ang.khoa.610666/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
          title="Facebook"
        >
          <FaFacebook />
        </a>

        {/* SĐT */}
        <a
          href="tel:+84947085416"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
          title="Phone"
        >
          <FaPhone />
        </a>
      </div>

      {/* Nút download */}
      <div className="mt-6">
        <a
          href="CV_LeHoangDangKhoa.pdf"
          download = "CV_LeHoangDangKhoa.pdf"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-black font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </a>
      </div>

      {/* Footer */}
      <p className="text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} Lê Hoàng Đăng Khoa — All Rights Reserved.
      </p>
    </footer>
  );
}

export default Contact;
