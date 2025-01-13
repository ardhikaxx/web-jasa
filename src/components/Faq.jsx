import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Apa saja yang termasuk dalam paket Mahasiswa, Basic, Pro, dan Bisnis?",
    answer:
      "Setiap paket memiliki fitur yang berbeda. Paket Mahasiswa cocok untuk proyek sederhana, Basic untuk website personal, Pro untuk bisnis kecil, dan Bisnis untuk kebutuhan perusahaan. Semua paket termasuk hosting, domain gratis, backup data, dan maintenance. Detail fitur dapat dilihat di halaman pemesanan.",
  },
  {
    question: "Bagaimana cara memesan paket yang saya inginkan?",
    answer:
      "Anda dapat memesan paket langsung melalui halaman pemesanan kami. Pilih paket yang diinginkan, lengkapi formulir, dan lakukan pembayaran sesuai instruksi. Tim kami akan segera menghubungi Anda untuk langkah berikutnya.",
  },
  {
    question: "Apakah saya bisa meminta revisi jika ada perubahan pada website?",
    answer:
      "Tentu saja! Semua paket termasuk revisi gratis. Jumlah revisi tergantung pada paket yang dipilih. Tim kami akan memastikan semua perubahan sesuai dengan kebutuhan Anda.",
  },
  {
    question: "Apakah saya bisa upgrade paket setelah website selesai dibuat?",
    answer:
      "Ya, Anda dapat meng-upgrade paket kapan saja. Hubungi tim kami melalui email atau kontak yang tersedia, dan kami akan membantu proses upgrade dengan penyesuaian biaya.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk pembuatan website?",
    answer:
      "Durasi pembuatan tergantung pada paket dan tingkat kompleksitas proyek. Secara umum, pembuatan website memakan waktu antara 3-14 hari kerja. Kami akan memberi tahu estimasi waktu saat diskusi awal.",
  },
  {
    question: "Apakah saya akan mendapatkan panduan penggunaan website?",
    answer:
      "Ya, kami menyediakan panduan penggunaan website, termasuk cara mengelola konten dan fitur. Panduan ini akan diberikan setelah website selesai dibuat.",
  },
  {
    question: "Bagaimana cara mendapatkan support jika ada masalah di website saya?",
    answer:
      "Anda dapat menghubungi kami melalui email atau kontak resmi kami untuk mendapatkan bantuan. Paket Anda mencakup free maintenance untuk durasi tertentu, sehingga kami akan memastikan website Anda berjalan dengan baik.",
  },
  {
    question: "Apakah tersedia opsional tambahan untuk layanan ini?",
    answer:
      `Ya, kami menyediakan beberapa opsi tambahan untuk menyesuaikan layanan dengan kebutuhan Anda:
      📦 Opsional Tambahan:
      🔧 Hosting tambahan: Rp100.000/bulan atau Rp250.000/tahun.
      📄 Halaman tambahan: Rp50.000/halaman.
      ✏️ Revisi tambahan: Rp30.000/revisi.
      🔍 Maintenance tambahan: Rp100.000/bulan.
      Silakan hubungi tim kami jika Anda memerlukan layanan tambahan ini.`,
  },
];

export const Faq = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-gray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Punya pertanyaan?</p>
          <h2 className="mb-16 block-big-title text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-white shadow-lg transition-transform transform hover:translate-y-1 mb-4 relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2 justify-center items-start">
        <h3 className="content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-black pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500 ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4895D1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};