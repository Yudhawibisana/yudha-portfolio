
import { useEffect, useState } from 'react'
import profileImg from './assets/Ydha_foto.png'
import './App.css'

const navItems = [
  ['about', 'Tentang Saya'],
  ['skills', 'Keahlian'],
  ['projects', 'Proyek'],
  ['experience', 'Pengalaman'],
  ['education', 'Pendidikan'],
  ['certificates', 'Sertifikat'],
  ['contact', 'Kontak'],
]

const techSkills = [
  { name: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'React.js', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
  {name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26',},
  {name: 'CSS3', logo: 'https://cdn.simpleicons.org/css/1572B6',},
]

const skillGroups = [
  {
    title: 'Pengembangan Web',
    subtitle: 'Pengembangan aplikasi dan website',
    icon: '⌘',
    items: [
      { name: 'Laravel' },
      { name: 'PHP'},
      { name: 'JavaScript'},
      { name: 'React.js'},
      { name: 'Python'},
    ],
  },
  {
    title: 'Database & Tools',
    subtitle: 'Pengelolaan data dan alat pengembangan',
    icon: '⌘',
    items: [
      { name: 'MySQL'},
      { name: 'Git'},
    ],
  },
  {
    title: 'Dukungan TI & Jaringan',
    subtitle: 'Pemeliharaan perangkat dan infrastruktur',
    icon: '⌘',
    items: [
      { name: 'Troubleshooting Perangkat'},
      { name: 'Instalasi Windows'},
      { name: 'Jaringan Komputer'},
      { name: 'Konfigurasi CCTV & NVR'},
      { name: 'Perakitan & Upgrade Hardware'},
    ],
  },
]

const projects = [
  {
    number: '01',
    title: 'LiterasiID',
    type: 'Tugas Akhir',
    description:
      'Merancang dan mengembangkan aplikasi ujian literasi digital untuk siswa sekolah dasar menggunakan Laravel. Menerapkan algoritma Fisher-Yates untuk mengacak urutan soal serta mengintegrasikan Electron.js untuk mendukung pelaksanaan ujian melalui aplikasi desktop.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'Electron.js'],
  },
  {
    number: '02',
    title: 'Study Group Platform',
    type: 'Aplikasi Web',
    description:
      'Mengembangkan platform berbasis web yang membantu mahasiswa menemukan dan bergabung dengan kelompok belajar sesuai minat pembelajaran. Platform ini memudahkan mahasiswa mencari teman belajar dan berkolaborasi dalam kegiatan akademik.',
    tech: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    number: '03',
    title: 'Website Manajemen Perpustakaan',
    type: 'Aplikasi Web',
    description:
      'Mengembangkan sistem manajemen perpustakaan berbasis web untuk mendukung pengelolaan informasi perpustakaan dan data buku melalui satu platform terpusat.',
    tech: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    number: '04',
    title: 'Website Absensi Karyawan',
    type: 'Proyek Magang',
    description:
      'Berkontribusi dalam pengembangan website absensi karyawan menggunakan Laravel, termasuk pengerjaan fitur aplikasi dan pengelolaan data.',
    tech: ['Laravel', 'PHP', 'MySQL'],
  },
]

const experiences = [
  {
    period: 'Freelance',
    role: 'IT Support',
    company: 'PT Global Alfa Solusindo',
    description:
      'Melakukan staging dan konfigurasi CCTV ke NVR, termasuk penggantian HDD pada perangkat NVR. Menangani persiapan laptop dan PC dalam jumlah besar untuk berbagai perusahaan, termasuk penggantian RAM pada laptop.',
  },
  {
    period: 'Organisasi · 2024 – 2025',
    role: 'Anggota PSDM',
    company: 'Himpunan Mahasiswa Informatika',
    description:
      'Terlibat dalam kegiatan pengembangan sumber daya mahasiswa, pelaksanaan program kerja organisasi, serta kegiatan internal untuk meningkatkan kemampuan dan mempererat hubungan antaranggota.',
  },
  {
    period: 'Magang',
    role: 'Fullstack Developer',
    company: 'PT Winnicode Garuda Teknologi',
    description:
      'Mengembangkan website absensi karyawan berbasis web menggunakan Laravel. Terlibat dalam pengembangan fitur aplikasi, pembuatan dan pengelolaan basis data, serta implementasi fungsi pada sisi frontend dan backend untuk mendukung proses pencatatan kehadiran karyawan.',
  },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yudha-wibisana/',
    className: 'linkedin',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
        />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6288809069308',
    className: 'whatsapp',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.16 1.6 5.97L.04 24l6.25-1.64a11.94 11.94 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.18-3.5-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.46 4.44-9.9 9.89-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.87-9.91 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/xyudh19_/',
    className: 'instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
        />
      </svg>
    ),
  },
]

const certificates = [
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    description: 'Jaringan Komputer dan Dasar-Dasar Teknologi Informasi',
    logo: '/certificates/Cisco.png',
    file: '/certificates/CCNA-_Introduction_to_Networks_certificate_Yudha-Wibisana.pdf',
  },
  {
    title: 'Sertifikat PHKM',
    issuer: 'Universitas Mercu Buana',
    description: 'Sertifikat Partisipasi',
    logo: '/certificates/Logo-Umb.png',
    file: '/certificates/PHKM_YUDHA.pdf',
  },
   {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google – Coursera',
    description: 'Fundamental data analytics, pengenalan data, dan proses analisis data.',
    logo: '/certificates/Cousera.png',
    file: '/certificates/Sert-Coursera+YudhaWibisana.pdf',
  },
  {
    title: 'Sertifikat Magang Fullstack Developer',
    issuer: 'PT Winnicode Garuda Teknologi',
    description: 'Pengalaman magang dalam pengembangan website absensi karyawan berbasis Laravel',
    logo: '/certificates/winni-logo.jpg',
    file: '/certificates/Magang.pdf',
  },
   {
    title: 'Data Quest',
    issuer: 'Universitas Mercu Buana',
    description: 'Pelatihan dan pengembangan keterampilan di bidang data.',
    logo: '/certificates/Logo-Umb.png',
    file: '/certificates/DataQuest.pdf',
  },
  {
    title: 'AI Fundamentals',
    issuer: 'Data Camp',
    description: 'Pengenalan dasar kecerdasan buatan (Artificial Intelligence), konsep, dan penerapannya.',
    logo: '/certificates/datacamp.png',
    file: '/certificates/AiFundamentals-Yudha.pdf',
  },
]

function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          title={social.name}
          className={social.className}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (id, smooth = true) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = window.innerWidth <= 700 ? 75 : 105
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? 'smooth' : 'auto',
      })
    }
  }

  const navigateTo = (id) => {
    window.history.pushState('', '', `/${id}`)
    setActiveSection(id)
    scrollToSection(id, true)
  }

  useEffect(() => {
    // Handle initial load dengan path (misal /about) tanpa #
    const path = window.location.pathname.replace('/', '')
    if (path && navItems.some(([secId]) => secId === path)) {
      setActiveSection(path)
      setTimeout(() => {
        scrollToSection(path, false)
      }, 120)
    }

    const sections = document.querySelectorAll('main section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-100px 0px -50% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Sync URL pathname saat activeSection berubah dari scroll
  useEffect(() => {
    if (window.location.pathname !== `/${activeSection}`) {
      window.history.replaceState('', '', `/${activeSection}`)
    }
  }, [activeSection])

  return (
    <div className="page">
      <header className="floating-header">
        <nav className="floating-nav" aria-label="Navigasi utama">
          <a href="about" className="nav-brand">
            Y
          </a>

          <div className="nav-links">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`/${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigateTo(id)
                }}
                className={activeSection === id ? 'active' : ''}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="content">
        <section id="about" className="intro">
          <div className="hero-layout">
            <div className="hero-text">
              <p className="eyebrow">
                Halo, saya Yudha Wibisana, lulusan S1 Informatika dari
                Universitas Mercu Buana.
              </p>

              <h1>Pengembangan Web & Dukungan TI.</h1>

              <div className="prose">
                <p>
                  Saya memiliki ketertarikan pada bidang pengembangan web
                  dan dukungan teknologi informasi, serta senang mempelajari
                  hal baru dan mengembangkan solusi melalui teknologi.
                </p>

                <p>
                  Saat ini, saya terus mengasah kemampuan melalui berbagai
                  proyek dan pengalaman di bidang teknologi.
                </p>

                <p>
                  Di waktu luang, saya senang mencoba hal baru,
                  mengeksplorasi teknologi, dan mengembangkan ide menjadi
                  sesuatu yang bisa digunakan.
                </p>
              </div>

              <div className="tech-stack">
                <span className="tech-stack-label">
                  TEKNOLOGI & KEAHLIAN
                </span>

                <div className="tech-stack-list">
                  {techSkills.map((skill) => (
                    <div
                      className="tech-item"
                      key={skill.name}
                      title={skill.name}
                    >
                      <img
                        src={skill.logo}
                        alt={`Logo ${skill.name}`}
                        loading="lazy"
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <SocialLinks />

              <div className="intro-actions">
                <a href="projects" className="secondary-link">
                  Lihat Proyek Saya ↓
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img src={profileImg} alt="Yudha Wibisana" />
              <span className="photo-caption">Yudha Wibisana</span>
            </div>
          </div>

          <div className="intro-bottom">
            <span>Berdomisili di Jakarta Pusat</span>

            <span className="availability">
              <span className="status-dot" />
              Terbuka untuk peluang kerja
            </span>
          </div>
        </section>

        <section id="skills" className="block">
          <div className="section-heading">
            <span>01 / KEMAMPUAN</span>
            <h2>Keahlian</h2>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <span className="skill-group-icon">{group.icon}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>
                </div>

                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="leader" />
                      <span className="level">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="block">
          <div className="section-heading">
            <span>02 / HASIL KARYA</span>
            <h2>Proyek</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <ul className="tags">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="block">
          <div className="section-heading">
            <span>03 / RIWAYAT KEGIATAN</span>
            <h2>Pengalaman</h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-item"
                key={experience.company}
              >
                <div className="experience-period">
                  {experience.period}
                </div>

                <div>
                  <h3>{experience.role}</h3>
                  <p className="company">{experience.company}</p>

                  <p className="experience-description">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="block">
          <div className="section-heading">
            <span>04 / LATAR BELAKANG</span>
            <h2>Pendidikan</h2>
          </div>

          <div className="education-card">
            <div className="education-info">
              <div className="education-logo">
                <img
                  src="/certificates/Logo-Umb.png"
                  alt="Logo Universitas Mercu Buana"
                />
              </div>

              <div className="education-text">
                <span className="education-status">LULUS</span>
                <h3>Sarjana Informatika (S1)</h3>
                <p>Universitas Mercu Buana</p>
              </div>
            </div>

            <div className="education-detail">
              <span>IPK</span>
              <strong>
                3.66 <small>/ 4.00</small>
              </strong>
            </div>
          </div>
        </section>

        <section id="certificates" className="block">
          <div className="section-heading">
            <span>05 / SERTIFIKASI</span>
            <h2>Sertifikat</h2>
          </div>

          <div className="certificate-list">
            {certificates.map((certificate) => (
              <article
                className="certificate-card"
                key={certificate.title}
              >
                <div className="certificate-icon">
                  {certificate.logo ? (
                    <img
                      src={certificate.logo}
                      alt="Logo Universitas Mercu Buana"
                    />
                  ) : (
                    <span>{certificate.icon}</span>
                  )}
                </div>

                <div className="certificate-content">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>
                  <span>{certificate.description}</span>

                  <div className="certificate-actions">
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-button"
                    >
                      <span>Lihat Sertifikat ↗</span>
                    </a>

                    <a
                      href={certificate.file}
                      download
                      className="certificate-download"
                    >
                      <span>↓ Unduh</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="block contact">
          <span className="contact-eyebrow">
            PUNYA PROYEK ATAU PELUANG KERJA?
          </span>

          <h2>Mari Terhubung.</h2>

          <p>
            Saya terbuka untuk berdiskusi mengenai peluang kerja,
            kolaborasi, maupun hal lainnya yang berkaitan dengan teknologi.
          </p>

          <SocialLinks />
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Yudha Wibisana</p>
        </footer>
      </main>
    </div>
  )
}

export default App
