import { useState } from "react";
import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = {
  mahasiswa: [
    "Website responsif (optimal di laptop, tablet, dan smartphone)",
    "Backup data gratis",
    "1 kali revisi gratis",
    "Website multipage hingga 5 halaman",
  ],
  basic: [
    "Website responsif (optimal di laptop, tablet, dan smartphone)",
    "Hosting 1 bulan + Domain .com gratis",
    "Backup data gratis",
    "1 kali revisi gratis",
    "Website multipage hingga 5 halaman",
    "Garansi hingga masa hosting berakhir",
    "Free maintenance selama 1 bulan",
  ],
  pro: [
    "Website responsif (optimal di semua perangkat)",
    "Hosting 3 bulan + Domain .com gratis",
    "Gratis backup data untuk keamanan",
    "3 kali revisi gratis",
    "Website multipage (5-8 halaman)",
    "Garansi hingga masa hosting berakhir",
    "Free maintenance 3 bulan",
  ],
  bisnis: [
    "Website responsif (optimal di laptop, tablet, dan smartphone)",
    "Hosting 6 bulan + Domain .com gratis",
    "Backup data gratis",
    "5 kali revisi gratis untuk memastikan hasil sesuai visi Anda",
    "Website multipage (8+ halaman)",
    "Garansi hingga masa hosting berakhir",
    "Free maintenance selama 6 bulan",
  ],
};

const whatsappLink = (plan, price) => {
  const message = `PESANAN ANDA\n\n` +
    `Nama Paket  : ${plan.charAt(0).toUpperCase() + plan.slice(1)}\n` +
    `Harga Paket : Rp. ${price}\n\n` +
    `Fitur Paket:\n${pricingData[plan].map((item, idx) => `${idx + 1}. ${item}`).join("\n")}\n\n` +
    `Total Harga : Rp. ${price}\n\n` +
    `Saya tertarik memesan paket ini. Mohon informasi lebih lanjut. Terima kasih!`;
  return `https://wa.me/6285933648537?text=${encodeURIComponent(message)}`;
};

export const Pricing = () => {
  return (
    <section className="w-screen flex justify-center bg-gray-50 relative py-20">
      <div className="absolute -top-16" id="pricing" />
      <div className="2xl:w-[1300px] lg:w-[1100px] md:w-4/5 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <span className="block-subtitle text-accent">Temukan Paket yang Tepat untuk Anda</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold text-black">
              Pilih Paket yang Sesuai dengan Kebutuhan Anda
            </h2>
            <p className="mb-6 text-black">
              Pilih paket yang sesuai dengan kebutuhan Anda dan manfaatkan layanan terbaik dari kami. Paket website kami dirancang untuk mendukung tujuan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {["mahasiswa", "basic", "pro", "bisnis"].map((plan, idx) => (
              <div
                key={plan}
                className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[500px] bg-bgLight rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col mx-auto"
              >
                <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                  <h3 className="mb-4 text-xl sm:text-2xl font-bold text-black text-left">
                    {plan.charAt(0).toUpperCase() + plan.slice(1)}
                  </h3>
                  <div className="flex items-end mb-4">
                    <div className="text-3xl sm:text-4xl font-bold text-black">
                      Rp. {plan === "mahasiswa" ? "450.000" : plan === "basic" ? "650.000" : plan === "pro" ? "850.000" : "1.500.000"}
                    </div>
                  </div>
                  <p className="mb-6 text-gray-900 font-semibold leading-relaxed flex-grow text-sm sm:text-base">
                    {plan === "mahasiswa"
                      ? "Ideal untuk mahasiswa yang ingin memulai perjalanan digital dengan website yang efektif."
                      : plan === "basic"
                        ? "Paket yang memberikan lebih banyak fitur untuk memperkuat keberadaan digital Anda."
                        : plan === "pro"
                          ? "Solusi canggih untuk website profesional dengan kebutuhan kustom dan fitur tambahan."
                          : "Paket lengkap untuk bisnis yang ingin berkembang dengan website yang dapat mendukung pertumbuhan jangka panjang."}
                  </p>
                  <ul className="mb-6 text-gray-900 font-semibold leading-relaxed flex-grow text-sm sm:text-base">
                    {pricingData[plan].map((text, index) => (
                      <li className="mb-4 flex items-center" key={`${text}-${index}`}>
                        <CheckArrowIcon className="text-accent mr-2" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className="w-full py-2 sm:py-3 px-4 sm:px-6 mt-auto bg-[#4895D1] text-white font-bold rounded-xl transition-all hover:bg-accent focus:outline-none text-center"
                    href={whatsappLink(plan, plan === "mahasiswa" ? "450.000" : plan === "basic" ? "650.000" : plan === "pro" ? "850.000" : "1.500.000")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};