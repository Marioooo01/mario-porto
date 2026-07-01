import { createFileRoute } from "@tanstack/react-router";

import heroPhoto from "@/assets/hero-photo.jpg.asset.json";
import projectNetwork from "@/assets/project-network.jpg.asset.json";
import projectIotAsset from "@/assets/project-iot-real.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const CV_URL = "/files/CV_Mario_Quaresma_Ferdian.pdf";
const WHATSAPP_URL = "https://wa.me/6285717086134";
const EMAIL = "marioqfer@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/mario-quaresma-ferdian";
const GITHUB_URL = "https://github.com/";

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-200 font-sans selection:bg-brand-accent/30 selection:text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-brand-accent font-medium tracking-tighter text-sm">
            MQF_ENGINEER_V1.0
          </span>
          <div className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-xs font-mono mb-6 uppercase tracking-widest">
            Technical Specialist — Kab. Bogor, Indonesia
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Mario Quaresma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              Ferdian
            </span>
          </h1>
          <p className="text-xl text-slate-400 font-mono mb-8">
            Junior Electronics & Network Engineer <span className="text-brand-accent">|</span> IoT Specialist
          </p>
          <p className="text-slate-500 mb-10 max-w-2xl leading-relaxed">
            Menggabungkan latar belakang Teknik Komputer & Jaringan dengan praktik langsung di bidang elektronika dan IoT — dari perakitan mikrokontroler hingga konfigurasi Mikrotik di lapangan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CV_URL}
              download
              className="px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-sm hover:-translate-y-0.5 transition-transform text-sm tracking-widest"
            >
              DOWNLOAD CV
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-brand-border hover:bg-white/5 font-bold rounded-sm transition-colors text-sm tracking-widest"
            >
              HUBUNGI SAYA
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
          <div className="absolute -inset-2 bg-gradient-to-br from-brand-accent/30 to-blue-500/10 blur-2xl rounded-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-border aspect-[3/4]">
            <img
              src={heroPhoto.url}
              alt="Mario Quaresma Ferdian merakit perangkat elektronika"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>



      {/* About */}
      <section id="about" className="bg-brand-border/30 py-24 border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">Professional Summary</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Saya adalah seorang teknisi dan praktisi IT yang berfokus pada integrasi jaringan dan sistem elektronika. Memiliki pengalaman nyata dalam merancang, merakit, hingga melakukan instalasi lapangan untuk perangkat elektronik berbasis mikrokontroler. Saya terbiasa melakukan troubleshooting sistem dan selalu mengedepankan efisiensi serta standar kualitas tinggi dalam setiap proses produksi.
              </p>
            </div>
            <div className="space-y-6 border-l border-brand-border pl-8">
              <div>
                <h4 className="text-brand-accent font-mono text-xs uppercase mb-2">Primary Focus</h4>
                <p className="text-white">Mikrotik & Arduino Integration</p>
              </div>
              <div>
                <h4 className="text-brand-accent font-mono text-xs uppercase mb-2">Interpersonal</h4>
                <p className="text-white">Analitis, adaptif, komunikasi lintas tim</p>
              </div>
              <div>
                <h4 className="text-brand-accent font-mono text-xs uppercase mb-2">Lokasi</h4>
                <p className="text-white">Kab. Bogor, Jawa Barat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-center text-3xl font-bold text-white mb-16">Technical Core</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            number="01"
            title="Electronics & Automation"
            items={[
              "Arduino IDE / Mikrokontroler",
              "Teknik Solder Timah (Presisi)",
              "Perakitan Elektronika",
              "Konsultasi & Desain Perangkat",
              "Produksi Display Digital / Running Text",
            ]}
          />
          <SkillCard
            number="02"
            title="Network Systems"
            items={[
              "Mikrotik & Winbox Configuration",
              "Konfigurasi Jaringan",
              "Fiber Optic Infrastructure",
              "VirtualBox / Virtualisasi",
              "Administrasi Sistem & Infrastruktur",
            ]}
          />
          <SkillCard
            number="03"
            title="Field Engineering"
            items={[
              "Teknisi Lapangan",
              "Instalasi Perangkat",
              "Troubleshooting Sistem",
              "Maintenance & Perbaikan Berkala",
              "Teknologi Layanan Jaringan",
            ]}
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-white">Key Projects</h2>
          <p className="text-brand-accent font-mono text-sm uppercase hidden sm:block">Portfolio 2023—2026</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            image={projectNetwork.url}
            imageAlt="Produksi jam digital dan running text di PT Sinar Laser Indonesia"
            org="PT SINAR LASER INDONESIA"
            title="Produksi & Instalasi Perangkat Elektronika Digital"
            desc="Menerjemahkan kebutuhan klien menjadi desain produk. Perakitan produk presisi (Jam Digital, Running Text) sesuai standar industri, dilanjutkan instalasi lapangan dan maintenance berkala."
            tags={["Hardware Design", "Perakitan", "Instalasi", "Maintenance"]}
          />
          <ProjectCard
            image={projectIotAsset.url}
            imageAlt="Prototipe IoT berbasis Arduino di DEVACCTO IT"
            org="DEVACCTO IT — MENTOR"
            title="IoT & Jaringan Komputer Sekolah"
            desc="Berperan sebagai mentor IoT untuk peserta. Melakukan pemeliharaan dan troubleshooting jaringan sekolah, serta membimbing pengembangan Sistem Keamanan Berbasis IoT dan Smart Monitoring Arduino."
            tags={["IoT Mentor", "Mikrotik", "Troubleshooting", "Arduino"]}
          />
        </div>
      </section>

      {/* Education & Certs */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-brand-border">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Formal Education</h2>
            <div className="p-6 border border-brand-border bg-slate-900/20 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-5xl text-brand-accent/10 font-black">
                85.27
              </div>
              <h3 className="text-lg font-bold text-white mb-1">SMK Teknik Komputer dan Jaringan</h3>
              <p className="text-brand-accent text-sm font-mono mb-4">Nilai Rata-rata: 85,27 / 100</p>
              <div className="space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-widest">Mata Pelajaran Relevan:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag>Internet of Things (IoT)</Tag>
                  <Tag>Administrasi Sistem Jaringan</Tag>
                  <Tag>Infrastruktur Jaringan</Tag>
                  <Tag>Teknologi Layanan Jaringan</Tag>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Workshops & Sertifikasi</h2>
            <div className="space-y-4">
              <CertCard tag="CERT_KEAHLIAN" name="Sertifikasi Kompetensi Keahlian TKJ (BNSP)" />
              <CertCard tag="WORKSHOP_MIKROTIK" name="Workshop Mikrotik Network Administration" />
              <CertCard tag="WORKSHOP_IOT" name="Workshop Internet of Things (Arduino & Sensor)" />
              <CertCard tag="WORKSHOP_ELECTRO" name="Workshop Perakitan & Solder Elektronika" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-black py-20 border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Let's build something
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Hubungi Saya</h2>
          <a
            href={`mailto:${EMAIL}`}
            className="text-lg font-mono text-slate-300 hover:text-brand-accent transition-colors"
          >
            {EMAIL}
          </a>
          <p className="text-slate-500 mt-2 text-sm">Kab. Bogor, Jawa Barat, Indonesia</p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <FooterLink href={WHATSAPP_URL}>WhatsApp</FooterLink>
            <FooterLink href={LINKEDIN_URL}>LinkedIn</FooterLink>
            <FooterLink href={GITHUB_URL}>GitHub</FooterLink>
            <FooterLink href={CV_URL} download>Download CV</FooterLink>
          </div>

          <div className="pt-12 mt-12 border-t border-brand-border text-[10px] font-mono text-slate-600 tracking-widest uppercase">
            &copy; 2026 Mario Quaresma Ferdian — Built with Technical Precision
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ number, title, items }: { number: string; title: string; items: string[] }) {
  return (
    <div className="p-8 bg-slate-900/50 border border-brand-border rounded-xl hover:border-brand-accent/40 transition-colors">
      <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-6 text-brand-accent font-mono text-sm">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3 text-sm text-slate-400 font-mono">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  image,
  imageAlt,
  org,
  title,
  desc,
  tags,
}: {
  image: string;
  imageAlt: string;
  org: string;
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="group overflow-hidden border border-brand-border rounded-2xl bg-slate-900/30">
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <div className="text-brand-accent text-xs font-mono mb-2 tracking-widest">{org}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10 uppercase font-mono tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-slate-800 px-3 py-1 rounded border border-brand-border font-mono">
      {children}
    </span>
  );
}

function CertCard({ tag, name }: { tag: string; name: string }) {
  return (
    <div className="p-4 border border-brand-border hover:border-brand-accent/50 transition-colors group rounded-lg">
      <div className="text-xs text-brand-accent font-mono mb-1 tracking-widest">{tag}</div>
      <div className="text-white group-hover:text-brand-accent transition-colors">{name}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  download,
}: {
  href: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noreferrer"
      className="px-5 py-2.5 border border-brand-border hover:border-brand-accent hover:text-brand-accent text-slate-300 transition-colors font-mono text-xs uppercase tracking-widest rounded-sm"
    >
      {children}
    </a>
  );
}
