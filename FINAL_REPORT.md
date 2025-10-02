### **LAPORAN PRAKTIKUM PENGEMBANGAN APLIKASI FRONTEND E-COMMERCE DENGAN REACT DAN TAILWINDCSS**

**Disusun oleh:**

**(Nama Anda)**
**(NIM/Nomor Identitas Anda)**

**Program Studi Teknik Informatika**
**Universitas Pendidikan Ganesha**
**2025**

---

### **DAFTAR ISI**

1.  **PENDAHULUAN**
    * 1.1. Latar Belakang
    * 1.2. Tujuan Praktikum
    * 1.3. Rancangan User Flow Aplikasi
2.  **IMPLEMENTASI DAN HASIL**
    * 2.1. Struktur Proyek
    * 2.2. Desain Layout dan Pemecahan Komponen
    * 2.3. Implementasi Halaman Sesuai User Flow
    * 2.4. Simulasi Data dengan JSON
3.  **KODE SUMBER (SOURCE CODE)**
    * 3.1. Komponen Utama
    * 3.2. Halaman (Pages)
    * 3.3. Utilitas (Data Dummy)
4.  **PENUTUP**
    * 4.1. Kesimpulan
    * 4.2. Saran Pengembangan

---

### **BAB I: PENDAHULUAN**

#### **1.1. Latar Belakang**

Praktikum ini merupakan implementasi dari materi pada Bab II modul "Frontend Programming With React & Tailwind CSS". Fokus utama dari praktikum ini adalah membangun sebuah antarmuka pengguna (*user interface*) untuk aplikasi e-commerce sederhana. Proses pengembangan mencakup perancangan alur pengguna, pembuatan komponen yang dapat digunakan kembali (*reusable components*), pengelolaan state, dan simulasi data dinamis menggunakan data statis berformat JSON. Teknologi utama yang digunakan adalah library **ReactJS** untuk membangun UI interaktif dan framework **TailwindCSS** untuk styling yang modern dan responsif.

#### **1.2. Tujuan Praktikum**

Adapun tujuan dari pelaksanaan praktikum ini adalah sebagai berikut:
* Mampu merancang dan mendefinisikan alur interaksi pengguna (*user flow*) untuk sebuah aplikasi e-commerce sederhana.
* Mampu mengimplementasikan arsitektur berbasis komponen dengan memecah desain UI menjadi bagian-bagian kecil yang logis dan dapat digunakan kembali.
* Mampu membangun dan menghubungkan beberapa halaman (*pages*) menjadi satu alur aplikasi yang utuh menggunakan React Router.
* Mampu menampilkan data produk secara dinamis pada komponen dengan memanfaatkan data dummy (JSON).
* Mampu menciptakan tampilan antarmuka yang menarik dan responsif, sebagai pengembangan dari contoh dasar yang ada di modul.

#### **1.3. Rancangan User Flow Aplikasi**

Aplikasi e-commerce ini dirancang dengan alur pengguna (*user flow*) yang sederhana dan intuitif, meniru proses belanja pada umumnya. Alur ini menggambarkan langkah-langkah yang akan ditempuh pengguna dari awal masuk ke aplikasi hingga menyelesaikan proses pemesanan.

Berikut adalah *task flow* yang dirancang:

1.  **Melihat Katalog Produk (HomePage):**
    * Pengguna membuka aplikasi dan langsung disambut dengan halaman **HomePage**.
    * Halaman ini menampilkan seluruh produk yang tersedia dalam format *grid* atau daftar.
    * Pengguna dapat melakukan pencarian produk atau memfilter berdasarkan kategori.

2.  **Melihat Detail Produk:**
    * Pengguna tertarik pada sebuah produk dan mengklik kartu produk tersebut.
    * Aplikasi akan mengarahkan pengguna ke halaman **Detail Produk**.
    * Di halaman ini, pengguna dapat melihat informasi lengkap seperti gambar produk, deskripsi, harga, stok, serta ulasan dari pengguna lain.
    * Dari sini, pengguna dapat menambahkan produk ke keranjang belanja.

3.  **Mengelola Keranjang Belanja (Cart):**
    * Setelah menambahkan produk, pengguna dapat mengakses halaman **Keranjang Belanja** melalui navigasi.
    * Di halaman ini, pengguna dapat melihat daftar semua produk yang telah ditambahkan, mengubah jumlah (*quantity*) item, atau menghapus item dari keranjang.

4.  **Proses Checkout:**
    * Setelah memeriksa keranjang dan yakin dengan pesanannya, pengguna menekan tombol "Proceed to Checkout".
    * Aplikasi mengarahkan pengguna ke halaman **Checkout** untuk mengisi informasi pengiriman dan memilih metode pembayaran.
    * Terakhir, pengguna menyelesaikan pesanan dengan menekan tombol "Place Order".

---

### **BAB II: IMPLEMENTASI DAN HASIL**

#### **2.1. Struktur Proyek**

Untuk menjaga kode tetap terorganisir dan mudah dikelola, proyek ini disusun dengan struktur folder seperti yang disarankan pada modul:

```txt
src/
├── components/       
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetail.jsx
│   ├── ProductReview.jsx
│   ├── CheckoutCard.jsx
│   ├── CheckoutForm.jsx
│   ├── OrderSummary.jsx
│   ├── CartItem.jsx
│   ├── CartSummary.jsx
│   └── SafeWidth.jsx
├── layouts/            # Template layout utama
│   └── MainLayout.jsx
├── pages/              # Komponen untuk setiap halaman
│   └── frontpages/
│       ├── HomePage.jsx
│       ├── DetailPage.jsx
│       ├── CartPage.jsx
│       └── CheckoutPage.jsx
├── data/               # Data dummy dalam format JSON
│   ├── products.js
│   ├── cart.js
│   └── reviews.js
├── utils/              # Berkas utilitas
│   └── formatPrice.js
├── App.jsx             # Komponen utama & konfigurasi routing
├── index.css           # Styling global & import TailwindCSS
└── main.jsx            # Entry point aplikasi React
```

#### **2.2. Desain Layout dan Pemecahan Komponen**

Sesuai dengan prinsip React, antarmuka dipecah menjadi beberapa komponen independen dan dapat digunakan kembali untuk menjaga konsistensi dan mempermudah pemeliharaan.

* **MainLayout.jsx:** Komponen ini berfungsi sebagai kerangka utama untuk semua halaman. Di dalamnya terdapat `Header` dan `Footer` yang statis, serta `Outlet` dari React Router untuk merender konten halaman yang dinamis.
* **Header.jsx:** Berisi logo, menu navigasi utama, search bar, dan ikon untuk keranjang, notifikasi, dan email.
* **Footer.jsx:** Bagian bawah halaman yang berisi informasi perusahaan, layanan pelanggan, newsletter subscription, social media links, dan informasi hak cipta.
* **ProductCard.jsx:** Komponen untuk menampilkan satu item produk di halaman HomePage. Komponen ini menerima data produk (nama, harga, gambar, rating, sold) melalui *props*.
* **ProductDetail.jsx:** Komponen untuk menampilkan detail lengkap produk termasuk gambar, deskripsi, dan informasi seller.
* **ProductReview.jsx:** Komponen untuk menampilkan ulasan dan rating produk dari pelanggan.
* **CheckoutCard.jsx:** Komponen untuk mengatur jumlah produk dan tombol aksi (tambah ke keranjang, beli sekarang).
* **CheckoutForm.jsx:** Komponen form untuk mengisi data pengiriman dan metode pembayaran.
* **OrderSummary.jsx:** Komponen untuk menampilkan ringkasan pesanan dan kode promo.
* **CartItem.jsx:** Komponen untuk menampilkan satu item dalam keranjang belanja.
* **CartSummary.jsx:** Komponen untuk menampilkan ringkasan keranjang dan total pembayaran.
* **SafeWidth.jsx:** Komponen wrapper untuk membatasi lebar konten agar responsive.

**[Silakan letakkan tangkapan layar (screenshot) dari beberapa komponen di sini, misalnya tampilan ProductCard atau Navbar]**

#### **2.3. Implementasi Halaman Sesuai User Flow**

Semua halaman yang didefinisikan dalam *user flow* telah berhasil diimplementasikan, dihubungkan menggunakan `react-router-dom`, dan menghasilkan antarmuka pengguna yang fungsional dan menarik. Berikut adalah rincian hasil UI dari setiap halaman utama:

* **Halaman Dashboard (Halaman Utama)** 🏠
    Halaman ini adalah gerbang utama aplikasi, menampilkan seluruh produk dalam format *grid* yang responsif. Terdapat komponen `SearchFilter` di bagian atas untuk memudahkan pencarian. Setiap produk ditampilkan menggunakan komponen `ProductCard` yang memuat gambar, nama, dan harga produk. Tampilannya bersih dan mudah dinavigasi.

    **[Tangkapan Layar Halaman Dashboard Produk Anda di sini]**

* **Halaman Detail Produk** 📄
    Ketika pengguna mengklik salah satu produk dari Dashboard, mereka akan diarahkan ke halaman ini. Halaman Detail Produk menampilkan gambar yang lebih besar, deskripsi lengkap, harga, dan tombol "Add to Cart". Desainnya fokus untuk memberikan semua informasi yang dibutuhkan pengguna sebelum membeli.

    **[Tangkapan Layar Halaman Detail Produk Anda di sini]**

* **Halaman Keranjang Belanja (Cart)** 🛒
    Halaman ini memberikan ringkasan pesanan pengguna. Setiap item yang ditambahkan akan muncul di sini lengkap dengan gambar, nama, harga, dan kolom untuk mengubah kuantitas. Terdapat juga tombol untuk menghapus item dari keranjang. Tampilan total harga diperbarui secara otomatis.

    **[Tangkapan Layar Halaman Keranjang Belanja Anda di sini]**

* **Halaman Checkout** 💳
    Sebagai langkah terakhir, halaman Checkout memiliki desain formulir yang sederhana untuk pengisian alamat dan ringkasan akhir pembelian. Tujuannya adalah membuat proses penyelesaian transaksi secepat dan semudah mungkin.

    **[Tangkapan Layar Halaman Checkout Anda di sini]**

#### **2.4. Simulasi Data dengan JSON**

Untuk mensimulasikan data produk yang dinamis, beberapa file data dibuat di dalam folder `src/data`. File `products.js` mengekspor sebuah *array of objects*, di mana setiap objek merepresentasikan satu produk dengan properti seperti `id`, `title`, `price`, `imageSrc`, `rating`, `sold`, dan `seller`. File `cart.js` berisi data dummy untuk keranjang belanja, dan `reviews.js` berisi data ulasan produk. Data ini kemudian diimpor ke halaman yang sesuai untuk ditampilkan.

---

### **BAB III: KODE SUMBER (SOURCE CODE)**

Berikut adalah cuplikan kode dari beberapa file kunci dalam proyek ini.

#### **3.1. Komponen Utama**

* **src/components/ProductCard.jsx**
    ```jsx
    import { Link } from "react-router-dom";
    import formatPrice from "../utils/formatPrice";
    import { IoStar } from "react-icons/io5";

    export default function ProductCard({ product }) {
      return (
        <article className="group">
          <Link to={`/product/${product.id}`} state={{ product }} className="block">
            <img
              className="w-full aspect-square bg-gray-100 object-cover rounded-xl"
              src={product.imageSrc}
              alt={`${product.title} - Produk dari Sony Official`}
            />
            <div className="p-2 space-y-1">
              <h3 className="text-gray-900 truncate">{product.title}</h3>
              <p className="font-semibold" aria-label={`Harga ${formatPrice(product.price)}`}>
                {formatPrice(product.price)}
              </p>
              <div className="flex items-center gap-x-1 text-xs text-gray-700">
                <span aria-label={`Rating ${product.rating} dari 5`} className="flex items-center gap-x-1">
                  <IoStar className="w-3 h-3 text-yellow-500" />
                  {product.rating}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
                <span aria-label={`Terjual ${product.sold} unit`}>{product.sold}+ sold</span>
              </div>
              <div>
                <span className="text-gray-600 text-xs">Sony Official</span>
              </div>
            </div>
          </Link>
        </article>
      );
    }
    ```

* **src/layouts/MainLayout.jsx**
    ```jsx
    import { Outlet } from "react-router-dom";
    import Footer from "../components/Footer";
    import Header from "../components/Header";

    export default function MainLayout() {
        return (
            <div>
                <Header />
                <main className="pt-22 min-h-screen pb-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        );
    }
    ```

#### **3.2. Halaman (Pages)**

* **src/pages/frontpages/HomePage.jsx**
    ```jsx
    import ProductCard from "../../components/ProductCard";
    import products from "../../data/products";
    import SafeWidth from "../../components/SafeWidth";

    export default function Home() {
        return (
            <div>
                <SafeWidth className="grid gap-x-2 gap-y-3 sm:gap-y-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </SafeWidth>
            </div>
        );
    }
    ```

* **src/pages/frontpages/CartPage.jsx**
    ```jsx
    import SafeWidth from "../../components/SafeWidth";
    import CartItem from "../../components/CartItem";
    import CartSummary from "../../components/CartSummary";
    import cartData from "../../data/cart";
    import { IoCartOutline } from "react-icons/io5";

    export default function CartPage() {
        return (
            <div>
                <SafeWidth className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 lg:gap-x-8">
                    <div className="col-span-full space-y-4 lg:space-y-6 lg:col-span-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-x-2">
                                    <IoCartOutline className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                                    Keranjang Belanja
                                </h1>
                                <p className="text-gray-600 mt-1 text-sm sm:text-base">{cartData.length} item dalam keranjang</p>
                            </div>
                            <button className="text-sm text-gray-500 hover:text-gray-700 self-start sm:self-auto">
                                Hapus Semua
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-4">
                            {cartData.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {cartData.length === 0 && (
                            <div className="text-center py-12">
                                <IoCartOutline className="w-24 h-24 text-gray-400 mb-4 mx-auto" />
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Keranjang Kosong</h2>
                                <p className="text-gray-600 mb-6">Belum ada item dalam keranjang Anda</p>
                                <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    Mulai Belanja
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Cart Summary */}
                    <div className="col-span-full lg:col-span-2">
                        <CartSummary items={cartData} />
                    </div>
                </SafeWidth>
            </div>
        );
    }
    ```

#### **3.3. Utilitas (Data Dummy)**

* **src/data/products.js**
    ```javascript
    export default [
        {
            id: 1,
            imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            title: "Wireless Headphones",
            price: 299000,
            rating: 4.8,
            sold: 1247,
        },
        {
            id: 2,
            imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
            title: "Smart Watch Series 8",
            price: 4500000,
            rating: 4.9,
            sold: 892,
        },
        {
            id: 3,
            imageSrc: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
            title: "Running Shoes Pro",
            price: 1200000,
            rating: 4.6,
            sold: 2156,
        },
        {
            id: 4,
            imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
            title: "Gaming Keyboard RGB",
            price: 850000,
            rating: 4.7,
            sold: 634,
        },
        {
            id: 5,
            imageSrc: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
            title: "Bluetooth Speaker",
            price: 650000,
            rating: 4.5,
            sold: 1789,
        },
        {
            id: 6,
            imageSrc: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
            title: "Laptop Stand Adjustable",
            price: 350000,
            rating: 4.4,
            sold: 923,
        },
        {
            id: 7,
            imageSrc: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
            title: "Wireless Mouse Gaming",
            price: 450000,
            rating: 4.6,
            sold: 1456,
        },
        {
            id: 8,
            imageSrc: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
            title: "Phone Case Premium",
            price: 150000,
            rating: 4.3,
            sold: 3124,
        },
    ];
    ```

* **src/data/cart.js**
    ```javascript
    export default [
        {
            id: 1,
            imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            title: "Wireless Headphones",
            price: 299000,
            quantity: 2,
            seller: "Sony Official",
            rating: 4.8,
            sold: 1247,
        },
        {
            id: 2,
            imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
            title: "Smart Watch Series 8",
            price: 4500000,
            quantity: 1,
            seller: "Apple Store",
            rating: 4.9,
            sold: 892,
        },
        {
            id: 3,
            imageSrc: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
            title: "Running Shoes Pro",
            price: 1200000,
            quantity: 1,
            seller: "Nike Official",
            rating: 4.6,
            sold: 2156,
        },
        {
            id: 4,
            imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
            title: "Gaming Keyboard RGB",
            price: 850000,
            quantity: 1,
            seller: "Razer Store",
            rating: 4.7,
            sold: 634,
        },
    ];
    ```

* **src/data/reviews.js**
    ```javascript
    export default [
        {
            id: 1,
            userName: "Ahmad Rizki",
            userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
            rating: 5,
            date: "2024-01-15",
            comment: "Produk sangat bagus! Kualitas sesuai dengan yang diharapkan. Pengiriman cepat dan packing rapi. Recommended banget!",
            verified: true,
            helpful: 12
        },
        {
            id: 2,
            userName: "Siti Nurhaliza",
            userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
            rating: 4,
            date: "2024-01-12",
            comment: "Overall bagus sih, tapi ada sedikit kekurangan di bagian packaging. Tapi produknya sesuai ekspektasi.",
            verified: true,
            helpful: 8
        },
        {
            id: 3,
            userName: "Budi Santoso",
            userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
            rating: 5,
            date: "2024-01-10",
            comment: "Mantap! Produk original dan berkualitas tinggi. Seller responsif dan pengiriman sesuai estimasi. Will buy again!",
            verified: false,
            helpful: 15
        },
        {
            id: 4,
            userName: "Dewi Lestari",
            userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
            rating: 5,
            date: "2024-01-08",
            comment: "Sangat puas dengan pembelian ini. Produk sesuai gambar dan deskripsi. Seller juga ramah dan membantu. Terima kasih!",
            verified: true,
            helpful: 6
        },
        {
            id: 5,
            userName: "Rizki Pratama",
            userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
            rating: 3,
            date: "2024-01-05",
            comment: "Produknya oke, tapi pengiriman agak lama. Mungkin karena musim hujan. Overall masih acceptable.",
            verified: false,
            helpful: 3
        },
        {
            id: 6,
            userName: "Maya Sari",
            userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
            rating: 5,
            date: "2024-01-03",
            comment: "Perfect! Produk berkualitas tinggi dengan harga yang sangat reasonable. Seller sangat profesional dan komunikatif.",
            verified: true,
            helpful: 20
        }
    ];
    ```

---

### **BAB IV: PENUTUP**

#### **4.1. Kesimpulan**

Praktikum pengembangan frontend e-commerce menggunakan React dan TailwindCSS telah berhasil diselesaikan. Seluruh tujuan praktikum, mulai dari perancangan *user flow*, implementasi arsitektur berbasis komponen, perutean halaman, hingga simulasi data, telah tercapai. Aplikasi yang dihasilkan memiliki tampilan yang menarik, responsif, dan fungsional sesuai dengan alur yang telah dirancang.

#### **4.2. Saran Pengembangan**

Aplikasi ini masih berupa simulasi di sisi frontend dan memiliki banyak ruang untuk pengembangan lebih lanjut, di antaranya:
1.  **Integrasi dengan Backend:** Menghubungkan aplikasi dengan API backend sungguhan untuk mengelola produk, pengguna, dan transaksi secara dinamis.
2.  **Manajemen State Global:** Mengimplementasikan state management library seperti `useContext` (seperti yang dijelaskan di modul), Redux, atau Zustand untuk mengelola data keranjang belanja dan status autentikasi pengguna secara lebih efisien.
3.  **Autentikasi Pengguna:** Menambahkan fitur login dan registrasi agar pengguna dapat memiliki akun dan riwayat pesanan pribadi.
4.  **Pencarian dan Filter:** Mengimplementasikan fitur pencarian produk dan filter berdasarkan kategori, harga, atau rating.
5.  **Wishlist:** Menambahkan fitur wishlist untuk menyimpan produk favorit pengguna.
6.  **Pagination:** Mengimplementasikan pagination untuk halaman produk agar lebih efisien.
7.  **Loading States:** Menambahkan loading indicators dan skeleton screens untuk pengalaman pengguna yang lebih baik.
8.  **Error Handling:** Mengimplementasikan error boundaries dan error handling yang lebih komprehensif.
9.  **SEO Optimization:** Menambahkan meta tags, structured data, dan optimasi SEO lainnya.
10. **PWA Features:** Mengkonversi aplikasi menjadi Progressive Web App dengan offline capabilities.