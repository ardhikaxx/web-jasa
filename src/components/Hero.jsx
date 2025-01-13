import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {


  return (
    <section
      className="w-screen flex justify-center items-center bg-gray-50 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#4895D1] to-[#78B1E5] text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            Mitra Terbaik Anda dalam Pengembangan Website
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl font-bold text-black px-8">
            <h1>Website Terbaik</h1>
            <h2 className="mt-2 text-4xl sm:text-6xl">Untuk <span className="text-[#4895D1]">Bisnis dan Proyek</span></h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-gray-600 text-sm lg:text-base sm:text-base mt-6 px-12 sm:px-48">
            Website custom, responsif, dan scalable untuk kebutuhan Anda. Solusi aman dan ramah pengguna.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-16 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => window.location.href = "/#pricing"}
              aria-label="Get started"
            >
              Mulai Proyek Kamu
            </button>
            <a
              href="https://yanuar-ardhika.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 transition"
              aria-label="Live demo"
            >
              Lihat Portofolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};