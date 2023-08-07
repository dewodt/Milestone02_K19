<p align="center">
<img src="https://ganesha-space.vercel.app/link-preview.png" alt="Ganesha Space Logo" width="500">
</p>

# 📍 Description

Ganesha space bertujuan untuk membantu mahasiswa ITB yang merasakan kesulitan untuk mencari tempat makan ataupun coworking space di deket ITB. Website ini memberikan list beberapa cafe dengan jarak 3 km dari ITB serta rekomendasi cafe yang bagus dan sesuai untuk kebutuhan mahasiswa. Selain itu, pembuatan website ini juga ditujukan untuk memenuhi tugas milestones SPARTA HMIF 2022. Semoga dengan pembuatan website ini diharapkan dapat memberikan manfaat bagi mahasiswa ITB.

# ⚙️ How to Use

Untuk menggunakan website ganeshaspace, klik [link](https://ganesha-space.vercel.app/) ini.

# 🛠️ Frameworks / Tools Used

- NextJS App Router (Fullstack Framework)
- React (JS Library)
- TailwindCSS (CSS Framework)
- Typescript (Typesafe for JavaScript)
- Sanity (Content Management System)

# 🌐 Pages

- Home Page: Memperlihatkan beberapa tempat-tempat yang paling populer (review terbanyak), paling dicintai (rating tertinggi), harga mulai paling murah, dan juga tempat rekomendasi kami.

- Cafe & Coworking Space List Page: Memperlihatkan list semua cafe yang tersedia di CMS. Tersedia juga search bar untuk mencari cafe dan juga pagination.

- Cafe & Coworoking Space Detail Page: Memperlihatkan informasi lebih detail dari suatu cafe/coworking space seperti reivew, alamat, kisaran harga menu, beberapa gambar tempat, jarak dari ITB, jam buka, fasilitas-fasilitas yang tersedia, deskripsi mengenai tempat tersebut, dan juga embed gooogle maps.

- About Us Page: Memperlihatkan informasi mengenai alasan dan tujuan website ganesha space dibuat.

# 🚪 API End Point

Hanya tersedia satu API Endpoint yaitu `/api/revalidate` yang berguna untuk On Demand Revalidation menggunakan webhook data CMS yang di render secara statis (static rendering).
