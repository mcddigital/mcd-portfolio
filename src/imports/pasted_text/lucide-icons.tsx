import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  HeartPulse,
  MessageCircle,
  Scale,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
} from "lucide-react";

const logoIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAIAAABnsVYUAAAAtGVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAaQEPAAIAAAAJAAAAVodpAAQAAAABAAAAXgAAAAAAAqACAAQAAAABAAAHgKADAAQAAAABAAAEOAAAAAD/7QAMUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAABMcAmcAAAAAABABOAAAAAEAAABAAAAAAEJJTQQlAAAAAAAQxkVQeJmJ8YCPnJEl1Q3i3jA4/8AAEQgEOAeAAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhMiUWEHFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7+ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo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";

const niches = [
  {
    title: "Advogados",
    description: "Presença séria, estratégica e confiável para fortalecer autoridade e atrair novos clientes.",
    icon: Scale,
  },
  {
    title: "Contadores",
    description: "Comunicação clara e profissional para destacar serviços, confiança e organização da marca.",
    icon: Calculator,
  },
  {
    title: "Nutricionistas",
    description: "Visual leve, moderno e humanizado para conectar saúde, bem-estar e credibilidade.",
    icon: HeartPulse,
  },
  {
    title: "Psicólogos",
    description: "Identidade acolhedora e elegante para transmitir sensibilidade, ética e profissionalismo.",
    icon: MessageCircle,
  },
  {
    title: "Dentistas",
    description: "Marca sofisticada e campanhas de conversão para evidenciar cuidado, estética e confiança.",
    icon: Sparkles,
  },
  {
    title: "Clínicas de saúde e estética",
    description: "Estratégia visual e digital para ampliar alcance, fortalecer reputação e gerar agendamentos.",
    icon: Stethoscope,
  },
];

export default function MCDDigitalLandingPage() {
  const services = [
    {
      title: "Identidade Visual",
      description:
        "Construção de marcas fortes, coerentes e memoráveis, com direção visual estratégica para posicionar sua empresa no digital.",
    },
    {
      title: "Logos e Marca",
      description:
        "Criação de logo, universo visual e linguagem de marca com estética moderna, profissional e pensada para gerar autoridade.",
    },
    {
      title: "Posts e Conteúdo",
      description:
        "Design de posts criativos, peças promocionais e materiais visuais para fortalecer sua presença nas redes sociais.",
    },
    {
      title: "Campanhas Digitais",
      description:
        "Campanhas inteligentes para atrair, conectar e converter, com foco em crescimento, posicionamento e resultado real.",
    },
    {
      title: "Impulsionamento de Vendas",
      description:
        "Estratégias para ampliar alcance, gerar mais oportunidades e transformar tráfego em contatos qualificados e vendas.",
    },
    {
      title: "Busca de Clientes",
      description:
        "Planejamento de ações para captação de leads, presença local, autoridade profissional e atração do público certo.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Entendemos sua marca, seu mercado e o perfil do cliente que você deseja alcançar.",
    },
    {
      number: "02",
      title: "Estratégia",
      text: "Definimos a melhor direção visual e digital para posicionar seu negócio com clareza.",
    },
    {
      number: "03",
      title: "Criação",
      text: "Desenvolvemos peças, campanhas e presença digital com estética premium e foco em conversão.",
    },
    {
      number: "04",
      title: "Crescimento",
      text: "Ajustamos a comunicação para fortalecer marca, atrair clientes e gerar novas oportunidades.",
    },
  ];

  const checks = [services.length >= 6, niches.length >= 6, steps.length === 4];

  if (checks.includes(false)) {
    throw new Error("Dados da landing page incompletos.");
  }

  return (
    <div className="min-h-screen bg-[#031d12] text-white selection:bg-lime-400 selection:text-[#031d12]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,255,0,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(132,255,0,0.08),transparent_20%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 ring-1 ring-lime-400/20">
                <img src={logoIcon} alt="Ícone MCD Digital" className="h-10 w-10 object-contain" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">mcd digital</p>
                <p className="text-xs text-white/45">marketing • marca • performance</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/mcd.marketingdigital?igsh=aXpsZXZ1NWF4NzBm&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="#contato"
                className="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-[#052015] transition hover:scale-[1.02]"
              >
                Solicitar proposta
              </a>
            </div>
          </header>

          <div className="grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm text-lime-300">
                Marketing digital com identidade, estratégia e resultado
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Sua marca precisa ser <span className="text-lime-400">vista</span>, lembrada e escolhida.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                Criamos presença digital moderna para profissionais e empresas que desejam se posicionar com autoridade, atrair clientes e vender mais.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#servicos"
                  className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-[#052015] shadow-2xl shadow-lime-500/20 transition hover:-translate-y-0.5"
                >
                  Ver serviços
                </a>
                <a
                  href="#nichos"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Público ideal
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-lime-400">+Marca</p>
                  <p className="mt-2 text-sm text-white/70">Posicionamento visual e estratégico</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-lime-400">+Alcance</p>
                  <p className="mt-2 text-sm text-white/70">Campanhas para gerar visibilidade</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-lime-400">+Clientes</p>
                  <p className="mt-2 text-sm text-white/70">Comunicação focada em conversão</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-lime-400/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] border border-lime-400/20 bg-[#082517] p-6">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="rounded-3xl bg-lime-400/10 p-3 ring-1 ring-lime-400/20">
                        <img src={logoIcon} alt="Ícone MCD Digital" className="h-14 w-14 object-contain" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/50">Direção criativa</p>
                        <h3 className="text-2xl font-semibold">Visual sofisticado para negócios que querem crescer no digital.</h3>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-white/70">
                      Design minimalista, comunicação inteligente e campanhas pensadas para gerar percepção de valor, autoridade e conversão.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/55">Foco</p>
                      <p className="mt-2 text-lg font-medium">Presença digital profissional</p>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">