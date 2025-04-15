import './homepage-style.css';
import logo from '../image/mission3-login-logo.png';
import banner1 from '../image/learning-edu.png';
import authorImg from '../image/author-picture.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';


const Home = () => {

    const [dropdwon, setDropdown] = useState(false);
    const [dropdwonB, setDropdownB] = useState(false);
    const [dropdwonC, setDropdownC] = useState(false);

    const handleDropdownA = () => {
        setDropdown(!dropdwon);
        setDropdownB(false);
        setDropdownC(false);
    }
    const handleDropdownB = () => {
        setDropdownB(!dropdwonB);
        setDropdown(false);
        setDropdownC(false);
    }
    const handleDropdownC = () => {
        setDropdownC(!dropdwonC);
        setDropdown(false);
        setDropdownB(false);
    }

    const [menu, setMenu] = useState(false);
    const CloseMenu = () => {
        setMenu(false);
    }

    const homepageButton = () => {
        window.location.href = '/'
    }

    const cardsData = [
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
        {
            title: 'Big 4 Auditor Financial Analyst',
            description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kelas yang fleksibel.',
            imageUrl: banner1,
            author: 'Jenna Ortega',
            authorImg: authorImg,
            position: 'Senior Accountant',
            company: 'Gojek',
            rating: '3.5',
            people: '86',
            price: 'Rp 300K'

        },
    ];


    return (
        <div className="out-container">
            <Helmet>
                <title>Videobelajar.com</title>
            </Helmet>
            <header>
                <div className="card-header">
                    <div className="logo" onClick={homepageButton}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="option">
                        <Link to="/login">Masuk</Link>
                        <Link to="/signup">Daftar</Link>
                    </div>
                    <div className="option-mobile">
                        <span className="show-menu" onClick={() => setMenu(!menu)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12H19.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M4.5 17.7692H19.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M4.5 6.23077H19.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>
                        </span>
                        <div className={menu ? 'list-option-mobile active' : 'list-option-mobile'}>
                            <div className="card-top-opt-mobile">
                                <div className="logo-option">
                                    <img src={logo} alt="logo" />
                                </div>
                                <span className="close-menu" onClick={CloseMenu}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 19L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className="list-content-option-mobile">
                                <Link to="/login">Masuk</Link>
                                <Link to="/signup">Daftar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="box-container">
                <div className="box-hero">
                    <section className="hero">
                        <h1>
                            Revolusi Pembelajaran: Temukan Ilmu Baru Platform Video Interaktif!
                        </h1>
                        <p>
                            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
                            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
                            berpartisipasi dalam latihan interaktif yang akan meningkatkan
                            pemahaman Anda.
                        </p>
                        <button type="button">Temukan Video Course untuk Dipelajari!</button>
                    </section>
                </div>
                <section className="box-middle">
                    <h3>Koleksi Video Pembelajaran Unggulan</h3>
                    <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                    <div className="list-opt-category">
                        <button type="button" className="active">Semua Kelas</button>
                        <button type="button">Pemasaran</button>
                        <button type="button">Desain</button>
                        <button type="button">Pengembangan Diri</button>
                        <button type="button">Bisnis</button>
                    </div>
                    <div className="list-card-content">
                        {cardsData.map((course, index) => (
                            <div className="card-content" key={index}>
                                <div className="out-top-content">
                                    <div className="content-banner">
                                        <img src={course.imageUrl} alt="img" />
                                    </div>
                                    <div className="box-top-content">
                                        <div className="title-desc-content">
                                            <h4>{course.title}</h4>
                                            <p>{course.description}</p>
                                        </div>
                                        <div className="author-content">
                                            <div className="author-picture">
                                                <img src={course.authorImg} alt="author picture" />
                                            </div>
                                            <div className="author-name">
                                                <p>{course.author}</p>
                                                <p>{course.position} <span>{course.company}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rate-price-content">
                                    <div className="rate-content">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1358_595)">
                                                    <path d="M21.95 10.605C21.87 10.934 21.6964 11.2328 21.45 11.465L18.15 14.685C18.1166 14.7201 18.0895 14.7607 18.07 14.805C18.0603 14.8512 18.0603 14.8988 18.07 14.945L18.85 19.505C18.9151 19.8409 18.8804 20.1886 18.75 20.505C18.6296 20.8176 18.4168 21.0862 18.14 21.275C17.871 21.4735 17.5529 21.5945 17.22 21.625H17.09C16.7969 21.6256 16.5083 21.5535 16.25 21.415L12.15 19.275C12.1074 19.2504 12.0591 19.2375 12.01 19.2375C11.9608 19.2375 11.9126 19.2504 11.87 19.275L7.77 21.425C7.46245 21.586 7.11633 21.6587 6.77 21.635C6.43365 21.6063 6.11179 21.4852 5.84 21.285C5.56581 21.0892 5.354 20.8183 5.23 20.505C5.10347 20.1877 5.06881 19.8411 5.12999 19.505L5.91 14.955C5.92455 14.9095 5.92455 14.8605 5.91 14.815C5.89445 14.7709 5.8707 14.7302 5.84 14.695L2.54 11.455C2.30026 11.2232 2.13048 10.9287 2.05 10.605C1.95273 10.2788 1.95273 9.93128 2.05 9.60504C2.15993 9.28394 2.35793 9.0002 2.62139 8.78625C2.88486 8.5723 3.20317 8.43672 3.54 8.39502L8.04 7.73504C8.08483 7.73391 8.12762 7.71603 8.16 7.68499C8.19811 7.65579 8.22892 7.61815 8.25 7.57501L10.35 3.39502C10.4934 3.09519 10.7188 2.84212 11 2.66503C11.2136 2.53016 11.4533 2.44198 11.7034 2.40637C11.9535 2.37076 12.2083 2.38847 12.451 2.45837C12.6938 2.52827 12.919 2.64879 13.1118 2.81195C13.3047 2.9751 13.4608 3.17721 13.57 3.40502L15.65 7.565C15.6751 7.61118 15.7091 7.65195 15.75 7.68499C15.7864 7.71596 15.8322 7.73365 15.88 7.73504L20.45 8.39502C20.7822 8.44548 21.0939 8.58748 21.35 8.80505C21.6013 9.02205 21.791 9.30142 21.9 9.61505C22.0064 9.93435 22.0237 10.2766 21.95 10.605Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1358_595">
                                                        <rect width="20" height="19.21" fill="white" transform="translate(2 2.39502)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <p>{course.rating} ({course.people})</p>
                                    </div>
                                    <div className="price-content">
                                        <span>{course.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                        )}

                    </div>
                </section>
                <section className="box-bottom">
                    <div className="call-to-action">
                        <div className="card-form">
                            <form method="POST">
                                <p className="title-c-t-a">NEWSLETTER</p>
                                <h3 className="tagline-c-t-a">Mau Belajar Lebih Banyak</h3>
                                <p className="subtag-c-t-a">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik videobelajar.com</p>
                                <div className="card-inp">
                                    <input type="email" name="email" id="email-c-t-a" placeholder="Masukan Emailmu" required autoComplete='false' />
                                    <button type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <div className="box-footer">
                    <div className="top-footer">
                        <div className="card-left-footer">
                            <div className="logo-footer">
                                <img src={logo} alt="logo" />
                            </div>
                            <h4>Gali Potensi Anda Melalui Pembelajaran Video di videobelajar.com</h4>
                            <p className="address-footer">Jl. Usman Effendi No. 50 Lowokwaru, Malang <br /> +62 877-7123-1234</p>
                        </div>
                        <div className="card-right-footer">
                            <div className="option-footer">
                                <span>Kategori</span>
                                <a href="#">Digital & Teknologi</a>
                                <a href="#">Pemasaran</a>
                                <a href="#">Manajeman Bisnis</a>
                                <a href="#">Pengembangan Diri</a>
                                <a href="#">Desain</a>
                            </div>
                            <div className="option-footer">
                                <span>Perusahaan</span>
                                <a href="#">Tentang Kami</a>
                                <a href="#">FAQ</a>
                                <a href="#">Kebijakan Privasi</a>
                                <a href="#">Ketentuan Layanan</a>
                                <a href="#">Bantuan</a>
                            </div>
                            <div className="option-footer">
                                <span>Komunitas</span>
                                <a href="#">Tips Sukses</a>
                                <a href="#">Blog</a>
                            </div>
                        </div>
                        <div className="list-option-mobile-footer">
                            <div className="btn-show-opt-footer">
                                <button type='button' onClick={handleDropdownA}>
                                    <p>Kategori</p>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <ul className={dropdwon ? 'box-opt-mobile-footer active' : 'box-opt-mobile-footer'}>
                                    <li>
                                        <a href="#">Digital & Teknologi</a>
                                    </li>
                                    <li>
                                        <a href="#">Pemasaran</a>
                                    </li>
                                    <li>
                                        <a href="#">Manajeman Bisnis</a>
                                    </li>
                                    <li>
                                        <a href="#">Pengembangan Diri</a>
                                    </li>
                                    <li>
                                        <a href="#">Desain</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-show-opt-footer">
                                <button type="button" onClick={handleDropdownB}>
                                    <p>Perusahaan</p>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <ul className={dropdwonB ? 'box-opt-mobile-footer active' : 'box-opt-mobile-footer'}>
                                    <li>
                                        <a href="#">Tentang Kami</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Kebijakan Privasi</a>
                                    </li>
                                    <li>
                                        <a href="#">Ketentuan Layanan</a>
                                    </li>
                                    <li>
                                        <a href="#">Bantuan</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-show-opt-footer">
                                <button type="button" onClick={handleDropdownC}>
                                    <p>Komunitas</p>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <ul className={dropdwonC ? 'box-opt-mobile-footer active' : 'box-opt-mobile-footer'}>
                                    <li>
                                        <a href="#">Tips Sukses</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <p className="copyright">@2023 videobelajar.com All Right Reserved.</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.303 2.25H6.69698C5.51757 2.25 4.38647 2.71852 3.5525 3.55249C2.71853 4.38646 2.25 5.51757 2.25 6.69698V17.303C2.25 18.4824 2.71853 19.6135 3.5525 20.4475C4.38647 21.2815 5.51757 21.75 6.69698 21.75H17.303C18.4824 21.75 19.6136 21.2815 20.4475 20.4475C21.2815 19.6135 21.75 18.4824 21.75 17.303V6.69698C21.75 5.51757 21.2815 4.38646 20.4475 3.55249C19.6136 2.71852 18.4824 2.25 17.303 2.25ZM8.84265 17.9923C8.84568 18.0467 8.83757 18.1011 8.81882 18.1523C8.80007 18.2035 8.77106 18.2502 8.73359 18.2898C8.69612 18.3293 8.65097 18.3608 8.6009 18.3823C8.55084 18.4038 8.49691 18.4149 8.44243 18.4148H6.66363C6.55647 18.4119 6.45468 18.3673 6.37992 18.2904C6.30517 18.2136 6.26336 18.1106 6.2634 18.0034V10.5992C6.26191 10.5457 6.27118 10.4925 6.29063 10.4426C6.31007 10.3928 6.3393 10.3473 6.37662 10.309C6.41393 10.2706 6.45857 10.2402 6.50787 10.2193C6.55716 10.1985 6.61012 10.1878 6.66363 10.1879H8.44243C8.49593 10.1878 8.54889 10.1985 8.59819 10.2193C8.64749 10.2402 8.69212 10.2706 8.72944 10.309C8.76675 10.3473 8.796 10.3928 8.81544 10.4426C8.83489 10.4925 8.84414 10.5457 8.84265 10.5992V17.9923ZM7.51968 8.63141C7.22991 8.62922 6.94729 8.54129 6.70743 8.37871C6.46757 8.21613 6.2812 7.98618 6.17183 7.71784C6.06246 7.4495 6.03499 7.15479 6.09286 6.87086C6.15073 6.58693 6.29137 6.32649 6.49704 6.12236C6.70271 5.91824 6.9642 5.77957 7.24856 5.72385C7.53292 5.66812 7.82742 5.69782 8.09492 5.80921C8.36242 5.9206 8.59096 6.10869 8.75173 6.34978C8.91249 6.59086 8.99829 6.87414 8.9983 7.16391C8.9983 7.35757 8.95998 7.54931 8.88554 7.72808C8.8111 7.90685 8.702 8.06913 8.56455 8.20554C8.4271 8.34196 8.26401 8.44982 8.08467 8.52291C7.90534 8.59601 7.71332 8.63288 7.51968 8.63141ZM18.3369 17.9812C18.337 18.0825 18.2975 18.1798 18.2269 18.2525C18.1564 18.3251 18.0602 18.3674 17.959 18.3703H16.0801C15.9788 18.3674 15.8827 18.3251 15.8121 18.2525C15.7415 18.1798 15.7021 18.0825 15.7021 17.9812V14.557C15.7021 14.0456 15.8578 12.3335 14.3458 12.3335C13.1673 12.3335 12.9339 13.5342 12.8894 14.0678V18.059C12.8894 18.1603 12.85 18.2576 12.7794 18.3303C12.7088 18.403 12.6127 18.4452 12.5114 18.4481H10.6882C10.6371 18.4481 10.5865 18.4381 10.5392 18.4185C10.492 18.3989 10.4491 18.3703 10.413 18.3342C10.3769 18.298 10.3482 18.2551 10.3287 18.2079C10.3091 18.1607 10.299 18.1101 10.299 18.059V10.5658C10.3019 10.4646 10.3442 10.3685 10.4169 10.2979C10.4895 10.2273 10.5869 10.1878 10.6882 10.1879H12.5114C12.6127 10.1878 12.71 10.2273 12.7827 10.2979C12.8554 10.3685 12.8976 10.4646 12.9005 10.5658V11.2107C13.1667 10.8212 13.5341 10.5119 13.9632 10.316C14.3922 10.12 14.8666 10.045 15.3352 10.0989C18.3703 10.0989 18.3592 12.9339 18.3592 14.5459L18.3369 17.9812Z" fill="#2565BD" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2342 2.25006H6.74327C6.14849 2.25001 5.55963 2.36752 5.01083 2.59577C4.46203 2.82402 3.96422 3.15847 3.54627 3.57972C3.12832 4.00096 2.79855 4.50062 2.57609 5.04972C2.35363 5.59881 2.24291 6.18641 2.25034 6.77843V17.2216C2.24291 17.8136 2.35363 18.4012 2.57609 18.9503C2.79855 19.4994 3.12832 19.9991 3.54627 20.4203C3.96422 20.8416 4.46203 21.176 5.01083 21.4043C5.55963 21.6325 6.14849 21.75 6.74327 21.75H11.5058V14.7841H9.68613C9.57293 14.7841 9.46436 14.7394 9.38432 14.6597C9.30427 14.58 9.25931 14.4719 9.25931 14.3593V12.123C9.25931 12.0074 9.30546 11.8965 9.38761 11.8147C9.46976 11.7329 9.58118 11.687 9.69736 11.687H11.5058V9.50663C11.4555 8.99188 11.5186 8.4724 11.6907 7.98442C11.8628 7.49644 12.1398 7.05171 12.5023 6.68124C12.8648 6.31078 13.3042 6.0235 13.7897 5.83945C14.2753 5.6554 14.7953 5.579 15.3135 5.61559H17.1669C17.2239 5.61557 17.2803 5.62692 17.3328 5.64896C17.3854 5.67101 17.4329 5.70331 17.4727 5.74396C17.5125 5.7846 17.5437 5.83277 17.5645 5.88562C17.5853 5.93847 17.5952 5.99492 17.5937 6.05165V7.94127C17.5937 8.05395 17.5487 8.16202 17.4687 8.24171C17.3886 8.32139 17.2801 8.36615 17.1669 8.36615H16.0436C14.8081 8.36615 14.5722 8.94757 14.5722 9.79734V11.6758H17.2679C17.329 11.6752 17.3896 11.6878 17.4454 11.7125C17.5012 11.7373 17.551 11.7737 17.5915 11.8193C17.632 11.8649 17.6621 11.9186 17.6799 11.9768C17.6978 12.0349 17.7028 12.0963 17.6948 12.1566L17.4252 14.3928C17.4141 14.4976 17.3642 14.5945 17.2853 14.6647C17.2065 14.735 17.1042 14.7735 16.9984 14.773H14.5834V21.7388H17.2567C17.8515 21.7389 18.4403 21.6214 18.9891 21.3931C19.538 21.1649 20.0358 20.8304 20.4537 20.4092C20.8717 19.9879 21.2014 19.4883 21.4239 18.9392C21.6463 18.3901 21.7571 17.8025 21.7496 17.2104V6.77843C21.7571 6.18452 21.6457 5.59508 21.4218 5.04451C21.1979 4.49395 20.8662 3.99328 20.4458 3.57173C20.0255 3.15019 19.525 2.8162 18.9736 2.58928C18.4222 2.36236 17.8309 2.24704 17.2342 2.25006Z" fill="#1778F2" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8233 12.234C13.8071 12.5838 13.6922 12.9219 13.4918 13.209C13.2904 13.5057 13.0003 13.731 12.663 13.8525C12.3292 13.9886 11.9617 14.0192 11.61 13.9403C11.2565 13.8647 10.9337 13.6847 10.6838 13.4235C10.4362 13.151 10.2735 12.8121 10.2158 12.4485C10.1505 12.096 10.1947 11.7319 10.3425 11.4053C10.4866 11.0775 10.724 10.7995 11.025 10.6058C11.3325 10.4152 11.687 10.3139 12.0488 10.3133C12.5256 10.3394 12.9749 10.5449 13.3065 10.8885C13.4782 11.0669 13.6124 11.2778 13.7011 11.5089C13.7899 11.74 13.8314 11.9866 13.8233 12.234Z" fill="url(#paint0_linear_1120_18)" />
                                            <path d="M17.265 8.00251C17.1512 7.72147 16.9821 7.46616 16.7677 7.25177C16.5533 7.03738 16.298 6.86827 16.017 6.75451C15.734 6.6439 15.4336 6.58448 15.1297 6.57901H8.96775C8.35828 6.58158 7.7745 6.82483 7.34353 7.25579C6.91256 7.68676 6.66931 8.27054 6.66675 8.88001V15.159C6.66718 15.4621 6.72772 15.762 6.84487 16.0415C6.96202 16.321 7.13346 16.5745 7.34925 16.7873C7.78005 17.2145 8.36105 17.456 8.96775 17.46H15.1297C15.7365 17.456 16.3174 17.2145 16.7482 16.7873C16.964 16.5745 17.1355 16.321 17.2526 16.0415C17.3698 15.762 17.4303 15.4621 17.4307 15.159V8.88976C17.4286 8.58652 17.3725 8.28608 17.265 8.00251ZM14.8275 13.443C14.6807 13.808 14.4619 14.1396 14.184 14.418C13.9033 14.7005 13.5727 14.9286 13.209 15.0908C12.8413 15.2452 12.4475 15.3279 12.0487 15.3345C11.592 15.3435 11.139 15.2507 10.7225 15.0631C10.306 14.8754 9.93649 14.5974 9.64066 14.2493C9.34483 13.9012 9.1301 13.4917 9.01204 13.0504C8.89397 12.6091 8.87551 12.1471 8.958 11.6978C9.07814 11.1002 9.36554 10.5491 9.78675 10.1085C10.2167 9.67755 10.7637 9.38224 11.3599 9.25919C11.9561 9.13613 12.5753 9.19075 13.1407 9.41626C13.7083 9.64548 14.1917 10.0437 14.5252 10.557C14.8625 11.0518 15.0457 11.6353 15.0517 12.234C15.066 12.6485 14.9894 13.0612 14.8275 13.443ZM15.9 8.62651C15.9105 8.705 15.904 8.78482 15.8811 8.86063C15.8582 8.93643 15.8194 9.00647 15.7673 9.06605C15.7151 9.12562 15.6508 9.17337 15.5787 9.20608C15.5066 9.23879 15.4283 9.25571 15.3491 9.25571C15.2699 9.25571 15.1917 9.23879 15.1196 9.20608C15.0474 9.17337 14.9831 9.12562 14.931 9.06605C14.8788 9.00647 14.84 8.93643 14.8171 8.86063C14.7942 8.78482 14.7878 8.705 14.7982 8.62651C14.7878 8.54802 14.7942 8.4682 14.8171 8.39239C14.84 8.31659 14.8788 8.24655 14.931 8.18697C14.9831 8.1274 15.0474 8.07965 15.1196 8.04694C15.1917 8.01423 15.2699 7.99731 15.3491 7.99731C15.4283 7.99731 15.5066 8.01423 15.5787 8.04694C15.6508 8.07965 15.7151 8.1274 15.7673 8.18697C15.8194 8.24655 15.8582 8.31659 15.8811 8.39239C15.904 8.4682 15.9105 8.54802 15.9 8.62651Z" fill="url(#paint1_linear_1120_18)" />
                                            <path d="M16.875 2.25H7.125C5.83207 2.25 4.59209 2.76361 3.67785 3.67785C2.76361 4.59209 2.25 5.83207 2.25 7.125V16.875C2.25 18.1679 2.76361 19.4079 3.67785 20.3221C4.59209 21.2364 5.83207 21.75 7.125 21.75H16.875C18.1679 21.75 19.4079 21.2364 20.3221 20.3221C21.2364 19.4079 21.75 18.1679 21.75 16.875V7.125C21.75 5.83207 21.2364 4.59209 20.3221 3.67785C19.4079 2.76361 18.1679 2.25 16.875 2.25ZM18.942 15.0615C18.9512 15.5729 18.8549 16.0807 18.6593 16.5533C18.2637 17.5007 17.5104 18.2539 16.563 18.6495C16.0904 18.8452 15.5826 18.9414 15.0712 18.9323H9.075C8.56368 18.9406 8.05605 18.8444 7.58325 18.6495C7.1146 18.4523 6.68776 18.1678 6.3255 17.811C5.96665 17.4504 5.6818 17.0232 5.487 16.5533C5.28129 16.0828 5.17507 15.5749 5.175 15.0615V9.0165C5.16665 8.50518 5.26287 7.99755 5.45775 7.52475C5.8445 6.57362 6.59073 5.81338 7.5345 5.409C8.02498 5.21821 8.549 5.12866 9.075 5.14575H15.12C15.6268 5.14127 16.1294 5.23816 16.5982 5.43071C17.067 5.62327 17.4926 5.9076 17.85 6.267C18.2068 6.62926 18.4913 7.0561 18.6885 7.52475C18.8834 7.99755 18.9796 8.50518 18.9713 9.0165L18.942 15.0615Z" fill="url(#paint2_linear_1120_18)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_1120_18" x1="13.8243" y1="10.3133" x2="10.1548" y2="13.9513" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#F64F50" />
                                                    <stop offset="1" stopColor="#FF6D42" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1120_18" x1="17.4307" y1="6.57901" x2="6.68773" y2="17.4807" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#E0437C" />
                                                    <stop offset="1" stopColor="#FFA14B" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_1120_18" x1="21.75" y1="1.86071" x2="2.25" y2="21.75" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#791CC9" />
                                                    <stop offset="0.24887" stopColor="#C938A8" />
                                                    <stop offset="0.546875" stopColor="#FE5340" />
                                                    <stop offset="0.953125" stopColor="#FFD854" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.78001 6.91L16.46 17.02H15.27L7.51001 6.91H8.78001Z" fill="black" />
                                            <path d="M17 2H7C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7V17C2 18.3261 2.52678 19.5979 3.46447 20.5355C4.40215 21.4732 5.67392 22 7 22H17C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17V7C22 5.67392 21.4732 4.40215 20.5355 3.46447C19.5979 2.52678 18.3261 2 17 2ZM14.68 18.3L11.3 13.9L7.42 18.3H5.28L10.28 12.59L5 5.7H9.43L12.49 9.7L16 5.7H18.14L13.48 11L19 18.3H14.68Z" fill="black" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Home;