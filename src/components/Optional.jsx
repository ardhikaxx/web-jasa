import { motion } from "framer-motion";
import { FaServer, FaFileAlt, FaEdit, FaTools } from "react-icons/fa";

const optionalServices = [
  {
    icon: <FaServer className="text-4xl text-blue-600" />,
    title: "Hosting Tambahan",
    description: "Dapatkan hosting tambahan untuk kebutuhan Anda.",
    price: "Rp100.000/bulan atau Rp250.000/tahun",
  },
  {
    icon: <FaFileAlt className="text-4xl text-green-500" />,
    title: "Halaman Tambahan",
    description: "Tambah halaman sesuai kebutuhan proyek Anda.",
    price: "Rp50.000/halaman",
  },
  {
    icon: <FaEdit className="text-4xl text-yellow-500" />,
    title: "Revisi Tambahan",
    description: "Tambahkan revisi untuk memastikan hasil terbaik.",
    price: "Rp30.000/revisi",
  },
  {
    icon: <FaTools className="text-4xl text-purple-600" />,
    title: "Maintenance Tambahan",
    description: "Pastikan website Anda tetap optimal.",
    price: "Rp100.000/bulan",
  },
];

export const Optional = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Opsional Tambahan</h2>
          <p className="text-lg text-gray-600 mt-4">
            Pilih layanan tambahan untuk memenuhi kebutuhan spesifik proyek Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {optionalServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-medium text-gray-900">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);