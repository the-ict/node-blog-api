<h1 align="center">📝 Node Blog API</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Blog_API-green?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/Express.js-Backend-blue?style=for-the-badge&logo=express"/>
  <img src="https://img.shields.io/badge/Multer-File_Uploads-yellow?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Bcrypt-Security-red?style=for-the-badge"/>
</p>

<p align="center"><strong>
Node.js va Express asosida yaratilgan RESTful blog API. Loyihada autentifikatsiya (bcrypt), postlar bilan CRUD amallar va multer orqali fayl yuklash imkoniyati mavjud.
</strong></p>

---

## 🚀 Xususiyatlar

- 📝 Postlar yaratish, tahrirlash, o‘chirish (CRUD)
- 📂 Multer yordamida rasm/media yuklash
- 👤 Foydalanuvchi profilingi
- 🧾 RESTful API tuzilmasi

---

## 🛠 Texnologiyalar

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (media yuklash uchun)
- Bcrypt (parolni xesh qilish)

---

## 📦 O‘rnatish

```bash
git clone https://github.com/the-ict/node-blog-api.git
cd node-blog-api
npm install
cp .env.example .env
# .env faylini PORT, MONGO_URI va boshqa qiymatlar bilan to‘ldiring
npm run dev
``
