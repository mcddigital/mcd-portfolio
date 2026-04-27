import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  Instagram,
  Phone,
  Palette,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import logoFull from "../imports/MCD_(3).png";
import imgMCD from "../imports/ChatGPT_Image_24_de_abr._de_2026,_11_10_15.png";
import imgOfEnergy from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_00_53.png";
import imgAbsoluta from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_02_31.png";
import imgHistoriaPod from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_04_50.png";
import imgEsterDamares from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_06_47.png";
import imgDraGabriela from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_08_26.png";
import imgCampanhaClinica from "../imports/ChatGPT_Image_26_de_abr._de_2026,_11_53_18.png";
import imgLancamentoServico from "../imports/ChatGPT_Image_26_de_abr._de_2026,_11_57_16.png";
import imgCampanhaSazonal from "../imports/ChatGPT_Image_26_de_abr._de_2026,_11_58_16.png";
import imgGoogleAds from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_19_04.png";
import imgFacebookAds from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_19_10.png";
import imgInstagramAds from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_19_14.png";
import imgStoriesReels from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_31_26.png";
import imgInstagramDentista from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_32_39.png";
import imgMultiPlataforma from "../imports/ChatGPT_Image_26_de_abr._de_2026,_12_32_44.png";

const identidadeVisualProjects = [
  {
    title: "MCD Digital",
    description: "Identidade visual completa com sistema de comunicação estratégica, paleta vibrante e aplicações digitais.",
    year: "2025",
    image: imgMCD,
  },
  {
    title: "OF Energy Eletricista",
    description: "Manual de marca completo com logo, variações, paleta laranja e azul, aplicações e papelaria profissional.",
    year: "2024",
    image: imgOfEnergy,
  },
  {
    title: "Dra. Gabriela Lagrota Paiva",
    description: "Identidade elegante para fisioterapeuta com tons verde petróleo e dourado, transmitindo confiança e cuidado.",
    year: "2025",
    image: imgDraGabriela,
  },
];

const marcaProjects = [
  {
    title: "Absoluta T-Shirt",
    description: "Brandboard completo com coroa estilizada, paleta rosa e roxa, tipografia delicada e aplicações.",
    year: "2025",
    image: imgAbsoluta,
  },
  {
    title: "História que Pod",
    description: "Manual de marca para podcast com símbolo de microfone, paleta vermelha vibrante e elementos gráficos.",
    year: "2024",
    image: imgHistoriaPod,
  },
  {
    title: "Ester Damares PMU",
    description: "Sistema de identidade com monograma sofisticado, tons terrosos e aplicações em papelaria premium.",
    year: "2024",
    image: imgEsterDamares,
  },
];

const impulsionamentoProjects = [
  {
    title: "Campanha Clínica Médica",
    description: "Impulsionamento de posts para captação de novos pacientes com ROI de 450%.",
    year: "2025",
    image: imgCampanhaClinica,
  },
  {
    title: "Lançamento de Serviço",
    description: "Estratégia de impulsionamento para lançamento de novo serviço odontológico.",
    year: "2024",
    image: imgLancamentoServico,
  },
  {
    title: "Campanha Sazonal",
    description: "Impulsionamento para período específico com aumento de 280% em leads.",
    year: "2025",
    image: imgCampanhaSazonal,
  },
];

const trafegoPagoProjects = [
  {
    title: "Google Ads - Advocacia",
    description: "Campanhas de busca e display gerando 150+ leads qualificados por mês com ROI positivo e performance.",
    year: "2025",
    image: imgGoogleAds,
  },
  {
    title: "Facebook Ads - Estética",
    description: "Funil completo de tráfego pago com custo por lead reduzido em 60% e resultados mensuráveis.",
    year: "2024",
    image: imgFacebookAds,
  },
  {
    title: "Instagram Ads - Nutrição",
    description: "Campanhas de conversão para agendamentos com CPA de R$ 12,00 e público altamente segmentado.",
    year: "2025",
    image: imgInstagramAds,
  },
];

const redesSociaisProjects = [
  {
    title: "Stories e Reels - Clínica",
    description: "Produção de conteúdo dinâmico com média de 50k impressões mensais e engajamento +100%.",
    year: "2024",
    image: imgStoriesReels,
  },
  {
    title: "Instagram - Dentista",
    description: "Gestão completa com crescimento de 0 a 10k seguidores em 8 meses, conteúdo estratégico e identidade visual.",
    year: "2024",
    image: imgInstagramDentista,
  },
  {
    title: "Multi-plataforma - Psicóloga",
    description: "Gerenciamento de Instagram, Facebook e LinkedIn com conteúdo estratégico alinhado e posicionamento forte.",
    year: "2025",
    image: imgMultiPlataforma,
  },
];

function PortfolioCard({
  title,
  description,
  year,
  image,
  onImageClick,
}: {
  title: string;
  description: string;
  year: string;
  image?: string;
  onImageClick?: () => void;
}) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#082517] transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/30 hover:shadow-xl hover:shadow-lime-400/10">
      {image ? (
        <div
          className="relative h-64 cursor-pointer overflow-hidden border-b border-white/10 bg-white"
          onClick={onImageClick}
        >
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute right-4 top-4 rounded-full bg-[#031d12]/80 px-3 py-1 text-xs font-semibold text-lime-400 backdrop-blur-sm">
            {year}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
            <span className="rounded-full bg-lime-400/90 px-4 py-2 text-sm font-semibold text-[#031d12]">Ver imagem completa</span>
          </div>
        </div>
      ) : (
        <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,rgba(115,255,0,0.14),rgba(3,29,18,0.2))]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-20 w-20 text-lime-400/30 transition-all duration-500 group-hover:scale-110 group-hover:text-lime-400/50" />
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-lime-400/20 px-3 py-1 text-xs font-semibold text-lime-400">
            {year}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-lime-400">{title}</h3>
        <p className="mt-3 leading-7 text-white/70">{description}</p>
      </div>
    </div>
  );
}

function PortfolioSection({
  id,
  icon: Icon,
  title,
  subtitle,
  projects,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  projects: Array<{ title: string; description: string; year: string; image?: string }>;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id={id} className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-12 flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 ring-1 ring-lime-400/20">
              <Icon className="h-8 w-8 text-lime-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-white/70">{subtitle}</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                description={project.description}
                year={project.year}
                image={project.image}
                onImageClick={project.image ? () => setSelectedImage(project.image!) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#031d12] text-white selection:bg-lime-400 selection:text-[#031d12]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-lime-400/20 blur-[120px]" />
          <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-lime-400/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-lime-400/5 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <header className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logoFull} alt="MCD Digital" className="h-12 object-contain lg:h-14" />
            </div>

            <nav className="hidden items-center gap-8 lg:flex">
              <a href="#identidade-visual" className="text-sm font-medium text-white/70 transition hover:text-lime-400">
                Identidade Visual
              </a>
              <a href="#criacao-marca" className="text-sm font-medium text-white/70 transition hover:text-lime-400">
                Marca
              </a>
              <a href="#trafego-pago" className="text-sm font-medium text-white/70 transition hover:text-lime-400">
                Tráfego Pago
              </a>
              <a href="#redes-sociais" className="text-sm font-medium text-white/70 transition hover:text-lime-400">
                Social Media
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/mcd.marketingdigital"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition hover:border-lime-400/30 hover:bg-white/10 lg:flex"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#contato"
                className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-[#031d12] transition hover:bg-lime-300"
              >
                Contato
              </a>
            </div>
          </header>

          <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center py-16 text-center lg:py-20">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2.5 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
              <span className="text-sm font-medium text-lime-300">Disponível para novos projetos</span>
            </div>

            <h1 className="max-w-5xl text-6xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
              Design que{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-lime-400">transforma</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C100 3 200 3 298 10"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-pulse stroke-lime-400 opacity-80"
                  />
                </svg>
              </span>{" "}
              marcas em resultados
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
              Especialista em identidade visual, branding e estratégias digitais que conectam sua marca ao público certo
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#identidade-visual"
                className="group flex items-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-sm font-semibold text-[#031d12] shadow-2xl shadow-lime-400/30 transition hover:scale-105"
              >
                <span>Ver portfólio</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contato"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Iniciar projeto
              </a>
            </div>

            <div className="mt-20 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-lime-400/30 hover:bg-white/[0.05]">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                  <Palette className="h-6 w-6 text-lime-400" />
                </div>
                <p className="text-4xl font-bold text-lime-400">5</p>
                <p className="mt-2 text-sm text-white/60">Especialidades em design e marketing</p>
              </div>
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-lime-400/30 hover:bg-white/[0.05]">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                  <Sparkles className="h-6 w-6 text-lime-400" />
                </div>
                <p className="text-4xl font-bold text-lime-400">200+</p>
                <p className="mt-2 text-sm text-white/60">Projetos entregues com excelência</p>
              </div>
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-lime-400/30 hover:bg-white/[0.05]">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                  <TrendingUp className="h-6 w-6 text-lime-400" />
                </div>
                <p className="text-4xl font-bold text-lime-400">100%</p>
                <p className="mt-2 text-sm text-white/60">Clientes satisfeitos e resultados</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/40">Role para explorar</span>
              <ArrowRight className="h-4 w-4 rotate-90 text-lime-400" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-lime-400">Portfólio</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Navegue pelas áreas de trabalho
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <a
              href="#identidade-visual"
              className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:bg-lime-400">
                <Palette className="h-5 w-5 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <span className="font-semibold text-white">Identidade Visual</span>
            </a>
            <a
              href="#criacao-marca"
              className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:bg-lime-400">
                <Sparkles className="h-5 w-5 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <span className="font-semibold text-white">Criação de Marca</span>
            </a>
            <a
              href="#impulsionamento"
              className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:bg-lime-400">
                <TrendingUp className="h-5 w-5 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <span className="font-semibold text-white">Impulsionamento</span>
            </a>
            <a
              href="#trafego-pago"
              className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:bg-lime-400">
                <Target className="h-5 w-5 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <span className="font-semibold text-white">Tráfego Pago</span>
            </a>
            <a
              href="#redes-sociais"
              className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:bg-lime-400">
                <Users className="h-5 w-5 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <span className="font-semibold text-white">Redes Sociais</span>
            </a>
          </div>
        </div>
      </section>

      <PortfolioSection
        id="identidade-visual"
        icon={Palette}
        title="Identidade Visual"
        subtitle="Criação de sistemas visuais completos que comunicam profissionalismo e autoridade"
        projects={identidadeVisualProjects}
      />

      <PortfolioSection
        id="criacao-marca"
        icon={Sparkles}
        title="Criação de Marca"
        subtitle="Desenvolvimento de logos e naming memoráveis que conectam com seu público"
        projects={marcaProjects}
      />

      <PortfolioSection
        id="impulsionamento"
        icon={TrendingUp}
        title="Impulsionamento Digital"
        subtitle="Estratégias de boost em redes sociais para alcançar o público certo"
        projects={impulsionamentoProjects}
      />

      <PortfolioSection
        id="trafego-pago"
        icon={Target}
        title="Tráfego Pago"
        subtitle="Campanhas de anúncios otimizadas para máximo retorno sobre investimento"
        projects={trafegoPagoProjects}
      />

      <PortfolioSection
        id="redes-sociais"
        icon={Users}
        title="Gerenciamento de Redes Sociais"
        subtitle="Gestão completa de conteúdo estratégico para engajamento e crescimento"
        projects={redesSociaisProjects}
      />

      <section id="contato" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-lime-400">Contato</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Vamos criar algo <span className="text-lime-400">incrível juntos</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Entre em contato para discutir seu próximo projeto de branding, design ou marketing digital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/5589994124866"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/30"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-lime-400/10 blur-2xl transition group-hover:bg-lime-400/20" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:scale-110 group-hover:bg-lime-400">
                <Phone className="h-8 w-8 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">WhatsApp</p>
              <p className="mt-2 text-xl font-semibold text-white">(89) 99941-2866</p>
              <p className="mt-3 text-sm text-white/60">Atendimento rápido e direto</p>
              <div className="mt-6 flex items-center gap-2 text-lime-400">
                <span className="text-sm font-semibold">Enviar mensagem</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/mcd.marketingdigital"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/30"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-lime-400/10 blur-2xl transition group-hover:bg-lime-400/20" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:scale-110 group-hover:bg-lime-400">
                <Instagram className="h-8 w-8 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Instagram</p>
              <p className="mt-2 text-xl font-semibold text-white">@mcd.marketingdigital</p>
              <p className="mt-3 text-sm text-white/60">Veja mais trabalhos e bastidores</p>
              <div className="mt-6 flex items-center gap-2 text-lime-400">
                <span className="text-sm font-semibold">Seguir agora</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          <a
            href="mailto:marketing.mcddigital@gmail.com"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/30"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-lime-400/10 blur-2xl transition group-hover:bg-lime-400/20" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 ring-1 ring-lime-400/20 transition group-hover:scale-110 group-hover:bg-lime-400">
                <Mail className="h-8 w-8 text-lime-400 transition group-hover:text-[#031d12]" />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Email</p>
              <p className="mt-2 text-xl font-semibold text-white">marketing.mcddigital@gmail.com</p>
              <p className="mt-3 text-sm text-white/60">Para propostas formais</p>
              <div className="mt-6 flex items-center gap-2 text-lime-400">
                <span className="text-sm font-semibold">Enviar email</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-white/[0.04] to-white/[0.02] p-8 md:p-12">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 ring-1 ring-lime-400/20">
                <BriefcaseBusiness className="h-8 w-8 text-lime-400" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Disponível para novos projetos</p>
                <p className="text-2xl font-semibold text-white">Vamos trabalhar juntos</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5589994124866"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-[#052015] shadow-lg shadow-lime-400/20 transition hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Iniciar Projeto
              </a>
              <a
                href="https://www.instagram.com/mcd.marketingdigital"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                Ver mais trabalhos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
