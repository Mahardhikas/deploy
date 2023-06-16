import LayananImage1 from "../assets/img/calculator.png";
import LayananImage2 from "../assets/img/diet_gizi.png";
import LayananImage3 from "../assets/img/calorie.png";

import People1 from "../assets/img/testimonial/people-1.jpg";
import People2 from "../assets/img/testimonial/people-2.jpg";
import People3 from "../assets/img/testimonial/people-3.jpg";

import Laila from "../assets/img/Laila.jpeg"
import Arisandi from "../assets/img/Arisandi.jpeg"
import Vian from "../assets/img/Vian.jpeg"
import Dhika from "../assets/img/Dhika.jpeg"
import Rahmadi from "../assets/img/Rahmadi.jpeg"

export const navLinks = [{
        id: 1,
        path: "/home",
        text: "Beranda",
    },
    {
        id: 2,
        path: "/layanan",
        text: "Layanan",
    },
    {
        id: 3,
        path: "/artikel",
        text: "Artikel",
    },
    {
        id: 4,
        path: "/faq",
        text: "FAQ",
    },
    {
        id: 5,
        path: "/about",
        text: "Tentang Kami",
    }
];

export const semuaLayanan = [{
        id: 1,
        image: LayananImage1,
        title: "Perhitungan Index Massa Tubuh",
        path: "/layanan/bmi",
        try: "Coba Sekarang",
        delay: "1300",
    },
    {
        id: 2,
        image: LayananImage2,
        title: "Rekomendasi Diet Gizi Seimbang",
        path: "/artikel",
        try: "Coba Sekarang",
        delay: "1600",
    },
    {
        id: 3,
        image: LayananImage3,
        title: "Perhitungan Kebutuhan Kalori Harian",
        path: "/layanan/kalori",
        try: "Coba Sekarang",
        delay: "1900",
    },
]

export const dataSwiper = [{
        id: 1,
        desc: "Aplikasi rekomendasi diet gizi seimbang sangat membantu saya dalam mencapai tujuan kesehatan saya. Dengan fitur-fitur yang informatif dan mudah digunakan, saya dapat memilih makanan yang sehat dan memenuhi kebutuhan gizi harian saya.",
        image: People1,
        name: "Nurul Mariana",
        skill: "Masyarakat Umum",
    },
    {
        id: 2,
        desc: "Saya telah menggunakan berbagai aplikasi diet sebelumnya, tetapi aplikasi rekomendasi diet gizi seimbang adalah yang terbaik. Dengan saran yang disesuaikan dengan preferensi dan kondisi kesehatan saya, saya merasa lebih energik dan mencapai berat badan yang sehat.",
        image: People2,
        name: "Alex Bhizer",
        skill: "Karyawan Swasta",
    },
    {
        id: 3,
        desc: "Aplikasi rekomendasi diet gizi seimbang benar-benar mengubah pola makan saya. Saya sekarang lebih sadar akan nutrisi yang masuk ke tubuh saya dan mampu menjaga keseimbangan makanan sehari-hari. Hasilnya, saya merasa lebih sehat dan bersemangat.",
        image: People3,
        name: "Gunawan   Cahya",
        skill: "Atlet",
    }, {
        id: 4,
        desc: "Aplikasi ini memiliki fitur pelacakan kemajuan yang sangat berguna. Saya dapat memantau asupan kalori, nutrisi, dan berat badan saya secara teratur. Dengan demikian, saya dapat melihat perubahan positif dalam penurunan berat badan dan gaya hidup saya secara keseluruhan.",
        image: People1,
        name: "Titin Suritin",
        skill: "Ibu Rumah Tangga",
    }
];

export const faq = [{
        id: 1,
        eventKey: 0,
        title: "Apakah ini Berlangganan?",
        desc: "Tidak perlu, anda hanya perlu membuat akun untuk menikmati semua fitur di website kami",
    },
    {
        id: 2,
        eventKey: 1,
        title: "Mengapa Harus mengukur BMI",
        desc: "Mengetahui BMI membantu Anda untuk menjaga rasio lemak tubuh yang terkait dengan tinggi badan Anda. BMI juga memberi peringatan peluang risiko penyakit yang mungkin mengintai kesehatan Anda. BMI yang sehat umumnya mengarah pada kualitas hidup yang lebih bahagia dan lebih sehat. Sementara BMI yang tinggi berkaitan erat dengan risiko penyakit seperti diabetes tipe 2, penyakit jantung, dan tekanan darah tinggi. Mengetahui BMI berarti memberi pertimbangan bagi Anda dan tenaga kesehatan dalam mengambil keputusan mengenai kondisi kesehatan tubuh Anda.",
    },
    {
        id: 3,
        eventKey: 2,
        title: "Apakah nilai BMI menjadi indikator yang baik untuk mengukur lemak tubuh?",
        desc: "BMI dan tingkat kegemukan tubuh mungkin memiliki korelasi yang kuat, tetapi bukan berarti dua orang dengan BMI yang sama memiliki hasil tingkat lemak tubuh yang sama juga. Hal ini tergantung pada tipe tubuh, usia, jenis, kelamin, dan tingkat kebugaran.Bahkan pada BMI yang sama, atlet memiliki lebih sedikit lemak tubuh dibandingkan mereka yang bukan atlet.Bahkan, orang yang lebih tua akan memiliki lemak yang lebih banyak dibandingkan orang yang lebih mudah termasuk wanita memiliki lebih banyak lemak tubuh dibandingkan pria.Tenaga kesehatan yang terlatih akan mengevaluasi kesehatan individu berdasarkan status dan risikonya.",
    },
    {
        id: 4,
        eventKey: 3,
        title: "Apakah Ada Grup Diskusi Konsultasi?",
        desc: "Ya, kami memiliki grup diskusi konsultasi yang tersedia untuk membantu Anda. Grup diskusi ini adalah tempat di mana anggota dapat berbagi pengetahuan, pengalaman, dan memberikan saran dalam berbagai topik yang relevan. Bergabung dengan grup diskusi konsultasi akan memberi Anda kesempatan untuk berinteraksi dengan para ahli dan mendapatkan pandangan yang beragam. Jangan ragu untuk bergabung dan berpartisipasi dalam grup diskusi konsultasi kami.",
    },
    {
        id: 5,
        eventKey: 4,
        title: "Apakah dapat di Akses Selamanya?",
        desc: "Ya, Anda dapat memiliki akses selamanya.",
    },
    {
        id: 6,
        eventKey: 5,
        title: "Apakah harus mendaftar?",
        desc: "Untuk menggunakan fitur utama kami anda harus memiliki akun terlebih dahulu",
    },
];

export const teamMembers = [{
        id: 1,
        image: Vian,
        name: "Alvian Nugroho",
        position: "Back-End Developer",
        qoute: "\"Hidup adalah tentang menemukan arti dalam setiap napas yang kita hirup.\"",
        delay: "1300",
    },
    {
        id: 2,
        image: Arisandi,
        name: "Arisandi Satria",
        position: "Back-End Developer",
        qoute: "\"Kebahagiaan bukanlah tujuan, tetapi perjalanan.\"",
        delay: "1600",
    },
    {
        id: 3,
        image: Dhika,
        name: "Mahardhika Alif Surya",
        position: "Front-End Developer",
        qoute: "\"Hidup hanya sekali, tetapi jika kita melakukannya dengan benar, satu kali cukup.\"",
        delay: "1900",
    },
    {
        id: 4,
        image: Laila,
        name: "Laila Nur Fardah",
        position: "Front-End Developer",
        qoute: "\"Kegagalan adalah kesempatan untuk memulai lagi, tetapi dengan pengetahuan yang lebih baik.\"",
        delay: "2200",
    },
    {
        id: 5,
        image: Rahmadi,
        name: "Rahmadi Fadillah",
        position: "Front-End Developer",
        qoute: "\"Kesederhanaan adalah keindahan yang tak terbatas.\"",
        delay: "2500",
    },
];

export const productsData = [{
        id: 1,
        img: "https://i.pinimg.com/originals/d2/b8/46/d2b846201c41d3164f0da3ec53c02f74.jpg",
        title: "Alpukat",
        kalori: 160,
        quantity: 1,
    },
    {
        id: 2,
        img: "https://www.masakapahariini.com/wp-content/uploads/2020/01/jenis-jeruk-lemon-mandarin-1024x682.jpg",
        title: "Jeruk",
        kalori: 47,
        quantity: 1,
    },
    {
        id: 3,
        img: "https://www.hdwallpaper.nu/wp-content/uploads/2015/10/Strawberry_wallpaper_017.jpg",
        title: "Strawberry",
        kalori: 32,
        quantity: 1,
    },
    {
        id: 4,
        img: "https://i1.wp.com/pupuknaturalnusantara.net/wp-content/uploads/2020/12/buah-nanas.png?w=750&ssl=1",
        title: "Nanas",
        kalori: 48,
        quantity: 1,
    },
    {
        id: 5,
        img: "https://th.bing.com/th/id/R.f868d013ba442719173779b8539491d3?rik=dNIV3wWcL8558w&riu=http%3a%2f%2fwww.pregonagropecuario.com%2fassets%2fimages%2fupload%2fcerezas_del_valle.jpg&ehk=1VnJJSlysfSp7Mk4eBO4A8okfu%2fNijn3gz76WG%2f4wls%3d&risl=&pid=ImgRaw&r=0",
        title: "Ceri",
        kalori: 50,
        quantity: 1,
    },
    {
        id: 6,
        img: "https://th.bing.com/th/id/R.d6b6aee7013672c1ef3be0ea4c886306?rik=vFJvNS4UINsJsw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-M3FB9VP4_W8%2fVFOulYbdDSI%2fAAAAAAAAYpM%2fkXqBKuisqQ8%2fs1600%2fapel.JPG&ehk=KgBNURZERolCgTIwveTsElguiHOCyp7JS4HYaA%2bOln8%3d&risl=&pid=ImgRaw&r=0",
        title: "Apel",
        kalori: 52,
        quantity: 1,
    },
    {
        id: 7,
        img: "https://www.tagar.id/Asset/uploads2019/1590342528674-anggur.jpg",
        title: "Anggur",
        kalori: 67,
        quantity: 1,
    },
    {
        id: 8,
        img: "https://hawagym.com/wp-content/uploads/2017/09/Semangka-1.jpg",
        title: "Semangka",
        kalori: 30,
        quantity: 1,
    }
];