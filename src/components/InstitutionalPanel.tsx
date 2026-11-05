import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  Phone, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  Printer, 
  Users, 
  Laptop, 
  FileText, 
  Landmark,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactItem {
  id: string;
  category: 'gestao_pessoas' | 'ti_telefonia' | 'sistemas' | 'gabinetes';
  categoryLabel: string;
  title: string;
  sector: string;
  acronym?: string;
  ramais?: string;
  phoneExternal?: string;
  whatsapp?: string;
  email?: string;
  hours?: string;
  accessMethod?: string;
  description: string;
  importantNote?: string;
}

const INSTITUTIONAL_CONTACTS: ContactItem[] = [
  // 1. Gestão de Pessoas por Perfil / Vínculo de Trabalho
  {
    id: 'gp-estagiarios',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Estagiários',
    sector: 'Serv. Gestão de Estágios',
    acronym: 'SGEST',
    ramais: '5823',
    phoneExternal: '(61) 3303-5823',
    whatsapp: '556133035823',
    email: 'sgest@senado.leg.br',
    description: 'Cadastro inicial, correção de e-mail pessoal, movimentação e dúvidas funcionais de estagiários.'
  },
  {
    id: 'gp-terceirizados',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Terceirizados e Aprendizes',
    sector: 'Gestão Contratos Terceirização',
    acronym: 'NGCOT',
    ramais: '2062 / 6025 / 6077',
    email: 'ngcot@senado.leg.br',
    description: 'Gestão cadastral de terceirizados e menores aprendizes para liberação e sincronização de acessos.'
  },
  {
    id: 'gp-efetivos',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Servidores Efetivos',
    sector: 'Registro Pessoal Efetivo',
    acronym: 'SERCOPE',
    ramais: '2080',
    whatsapp: '5561998167546',
    email: 'sercope@senado.leg.br',
    description: 'Assuntos funcionais, lotação, cadastro de efetivos e suporte a problemas do Ergon Online/PMS.'
  },
  {
    id: 'gp-comissionados',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Servidores Comissionados',
    sector: 'Registro Pessoal Comissionado',
    acronym: 'SEPCOM',
    ramais: '3032',
    whatsapp: '5561998442624',
    email: 'sepcom@senado.leg.br',
    description: 'Cadastro, posse, atualização de dados e lotação de servidores comissionados.'
  },
  {
    id: 'gp-comissionados-rh',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Comissionados (RH)',
    sector: 'Adm. de Pessoal',
    acronym: 'COAPES',
    ramais: '3160',
    email: 'coapes@senado.leg.br',
    description: 'Suporte a problemas de envio de processos no Ergon Online para servidores comissionados.'
  },
  {
    id: 'gp-inativos',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Inativos e Pensionistas',
    sector: 'Atendimento a Inativos',
    acronym: 'COBEP',
    ramais: '3390',
    email: 'pessoalinativo@senado.leg.br',
    description: 'Atendimento geral, atualização cadastral e suporte a inativos e pensionistas do Senado.'
  },
  {
    id: 'gp-prestadores-sis',
    category: 'gestao_pessoas',
    categoryLabel: 'Gestão de Pessoas',
    title: 'Prestadores SIS / Clínicas',
    sector: 'Saúde (SIS)',
    acronym: 'SIS',
    ramais: '5023',
    phoneExternal: '(61) 2398-1201',
    email: 'prestadorsis@senado.leg.br',
    description: 'Credenciamento e atendimento a prestadores de serviço do plano de saúde (credenciamentosis@senado.leg.br).'
  },

  // 2. Central de TI, Telefonia e Suporte Operacional Geral
  {
    id: 'ti-prodasen',
    category: 'ti_telefonia',
    categoryLabel: 'TI & Telefonia',
    title: 'Central de TI (PRODASEN)',
    sector: 'Suporte Técnico e Infraestrutura',
    acronym: 'PRODASEN',
    ramais: '2000',
    phoneExternal: '(61) 3330-2000',
    hours: 'Seg a Sex, 7h–22h',
    description: 'Suporte técnico para computadores, rede, impressoras, mouse/monitor e orientação técnica.'
  },
  {
    id: 'ti-telefonia',
    category: 'ti_telefonia',
    categoryLabel: 'TI & Telefonia',
    title: 'Telefonia (COOTELE)',
    sector: 'Coordenação de Telefonia',
    acronym: 'COOTELE',
    ramais: '7000',
    hours: 'Expediente',
    description: 'Atendimento de telefonia e alteração do ramal do órgão/gabinete na Intranet (deve ser solicitado via Chefe).'
  },
  {
    id: 'ti-busca-ramais',
    category: 'ti_telefonia',
    categoryLabel: 'TI & Telefonia',
    title: 'Busca de Ramais',
    sector: 'Central Telefônica',
    ramais: '9000',
    hours: 'Expediente',
    description: 'Localização de ramais telefônicos de setores ou colaboradores não achados na busca da Intranet.'
  },
  {
    id: 'ti-atendimento-pessoal',
    category: 'ti_telefonia',
    categoryLabel: 'TI & Telefonia',
    title: 'Atendimento Pessoal (SEATUS)',
    sector: 'Serviço de Atendimento aos Usuários',
    acronym: 'SEATUS',
    phoneExternal: '(61) 3303-1000',
    email: 'seatus@senado.leg.br',
    hours: 'Expediente',
    description: 'Dúvidas sobre Ergon Online e senhas bloqueadas.'
  },
  {
    id: 'ti-atendimento-sis',
    category: 'ti_telefonia',
    categoryLabel: 'TI & Telefonia',
    title: 'Atendimento SIS (Saúde)',
    sector: 'Plano de Saúde dos Servidores',
    acronym: 'SIS',
    ramais: '5000',
    hours: 'Expediente',
    description: 'Esclarecimento de dúvidas sobre extrato do Plano de Saúde (SIS) e coparticipações.'
  },

  // 3. Suporte a Sistemas Corporativos do Senado
  {
    id: 'sis-sigad',
    category: 'sistemas',
    categoryLabel: 'Sistemas Corporativos',
    title: 'Gestão Arquivística Documentos (SIGAD)',
    sector: 'Suporte SIGAD',
    acronym: 'SIGAD',
    ramais: '3719 / 1563',
    email: 'sigadsuporte@senado.leg.br',
    accessMethod: 'Acesso pela Intranet com login/senha de rede. Solicitação via e-mail.',
    description: 'Gestão de processos arquivísticos, documentos e tramitações oficiais no Senado.'
  },
  {
    id: 'sis-spalm',
    category: 'sistemas',
    categoryLabel: 'Sistemas Corporativos',
    title: 'Patrimônio e Almoxarifado (SPALM)',
    sector: 'Administração de Bens e Suprimentos',
    acronym: 'SPALM',
    ramais: '4181 / 4182',
    email: 'spalmadm@senado.leg.br',
    accessMethod: 'Exige navegador Conectaa Browser (ramal 2000). Acesso via Gestor SGU.',
    description: 'Gestão patrimonial, inventário, transferências de bens e requisições ao almoxarifado.'
  },
  {
    id: 'sis-vip',
    category: 'sistemas',
    categoryLabel: 'Sistemas Corporativos',
    title: 'Transmissão Plenário/Comissões (VIP)',
    sector: 'Transmissão e Multimídia',
    acronym: 'VIP',
    ramais: '2000 (Central)',
    accessMethod: 'Acesso via intra.senado.leg.br/vip/. Problemas tratados pela Central de TI.',
    description: 'Sistemas de transmissão e gravação audiovisual das sessões plenárias e reuniões de comissões.'
  },
  {
    id: 'sis-prosti',
    category: 'sistemas',
    categoryLabel: 'Sistemas Corporativos',
    title: 'Gerentes de Relacionamento TI (PROSTI)',
    sector: 'Relacionamento Estratégico de TI',
    acronym: 'PROSTI',
    accessMethod: 'Via Intranet / Central de Serviços (PRODASEN)',
    description: 'Profissionais dedicados para intermediar e planejar soluções de TI do PRODASEN ajustadas a cada setor.'
  },

  // 4. Apoio aos Gabinetes Parlamentares e Senadores
  {
    id: 'gab-foto',
    category: 'gabinetes',
    categoryLabel: 'Apoio a Gabinetes',
    title: 'Foto Oficial do Senador',
    sector: 'Coordenação de Divulgação',
    acronym: 'CODIV',
    ramais: '1234',
    email: 'divulga@senado.leg.br',
    description: 'Envio e atualização da foto oficial para a página do parlamentar no portal institucional.'
  },
  {
    id: 'gab-biografia',
    category: 'gabinetes',
    categoryLabel: 'Apoio a Gabinetes',
    title: 'Informações Biográficas',
    sector: 'Pesquisa e Memória Institucional',
    acronym: 'SEPESA',
    ramais: '4624',
    description: 'Atualização do histórico profissional, acadêmico e dados biográficos do senador no site institucional.'
  },
  {
    id: 'gab-endereco',
    category: 'gabinetes',
    categoryLabel: 'Apoio a Gabinetes',
    title: 'Endereço e Ramais do Gabinete',
    sector: 'Telefonia',
    acronym: 'COOTELE',
    ramais: '7000',
    description: 'Atualização do endereço físico e telefones de contato oficiais exibidos na página oficial do parlamentar.'
  },
  {
    id: 'gab-site-email',
    category: 'gabinetes',
    categoryLabel: 'Apoio a Gabinetes',
    title: 'Site Pessoal / E-mail do Senador',
    sector: 'Central de Serviços de TI',
    acronym: 'PRODASEN',
    accessMethod: 'Solicitação registrada pelo Chefe de Gabinete na Intranet.',
    description: 'Criação e gerenciamento de contas de e-mail institucional e páginas pessoais no domínio do Senado.'
  },
  {
    id: 'gab-escritorios',
    category: 'gabinetes',
    categoryLabel: 'Apoio a Gabinetes',
    title: 'Escritórios de Apoio no Estado',
    sector: 'Apoio à Mesa Diretora',
    acronym: 'NAMAP',
    ramais: '4568',
    accessMethod: 'Ofício formal endereçado à Mesa Diretora.',
    description: 'Comunicação oficial de criação, alteração ou mudança de endereço de escritório de apoio regional nos estados.'
  }
];

export function InstitutionalPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'gestao_pessoas' | 'ti_telefonia' | 'sistemas' | 'gabinetes'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredContacts = useMemo(() => {
    return INSTITUTIONAL_CONTACTS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchTerm.trim()) return true;

      const q = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.sector.toLowerCase().includes(q) ||
        (item.acronym && item.acronym.toLowerCase().includes(q)) ||
        (item.ramais && item.ramais.toLowerCase().includes(q)) ||
        (item.phoneExternal && item.phoneExternal.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q)
      );
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 animate-in fade-in duration-200">
      {/* Cabeçalho */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-6">
          <Building2 className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs tracking-wider uppercase mb-1">
              <Landmark className="h-4 w-4" />
              Senado Federal • Guia Estratégico Oficial
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Guia de Referência e Contatos Úteis
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Canais de atendimento, gestão de pessoas, sistemas corporativos, telefonia e apoio aos gabinetes parlamentares.
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all border border-white/20 self-start md:self-center shadow-xs cursor-pointer backdrop-blur-xs"
            title="Imprimir Guia de Contatos"
          >
            <Printer className="h-4 w-4" />
            Imprimir Resumo
          </button>
        </div>
      </div>

      {/* Cards de Consulta Rápida (Ramais Críticos) */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Resumo de Consulta Rápida (Ramais Mais Frequentes)
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Card 2000 */}
          <div className="bg-white border border-blue-200 rounded-xl p-3.5 shadow-2xs hover:shadow-xs hover:border-blue-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                PRODASEN
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('2000', 'quick-2000')}
                className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                title="Copiar Ramal 2000"
              >
                {copiedId === 'quick-2000' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="text-lg font-black text-slate-900 tracking-tight">Ramal 2000</div>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              PC, Impressora, Rede e Suporte Técnico. (Ext: 61 3330-2000)
            </p>
          </div>

          {/* Card 9000 */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                Telefônica
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('9000', 'quick-9000')}
                className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                title="Copiar Ramal 9000"
              >
                {copiedId === 'quick-9000' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="text-lg font-black text-slate-900 tracking-tight">Ramal 9000</div>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              Localização de ramais não achados na busca da Intranet.
            </p>
          </div>

          {/* Card 7000 */}
          <div className="bg-white border border-indigo-200 rounded-xl p-3.5 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                COOTELE
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('7000', 'quick-7000')}
                className="text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                title="Copiar Ramal 7000"
              >
                {copiedId === 'quick-7000' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="text-lg font-black text-slate-900 tracking-tight">Ramal 7000</div>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              Telefonia e alteração de ramal de setor na Intranet (via Chefe).
            </p>
          </div>

          {/* Card 5823 */}
          <div className="bg-white border border-purple-200 rounded-xl p-3.5 shadow-2xs hover:shadow-xs hover:border-purple-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                SGEST
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('5823', 'quick-5823')}
                className="text-slate-400 hover:text-purple-600 transition-colors cursor-pointer"
                title="Copiar Ramal 5823"
              >
                {copiedId === 'quick-5823' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="text-lg font-black text-slate-900 tracking-tight">Ramal 5823</div>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              Estagiários: cadastro, e-mail pessoal e dúvidas funcionais.
            </p>
          </div>

          {/* Card 5000 */}
          <div className="bg-white border border-emerald-200 rounded-xl p-3.5 shadow-2xs hover:shadow-xs hover:border-emerald-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                SIS Saúde
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard('5000', 'quick-5000')}
                className="text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                title="Copiar Ramal 5000"
              >
                {copiedId === 'quick-5000' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="text-lg font-black text-slate-900 tracking-tight">Ramal 5000</div>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              Plano de Saúde (SIS), extrato e dúvidas de coparticipação.
            </p>
          </div>
        </div>
      </div>

      {/* Barra de Filtro e Busca */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por setor, sigla (ex: SGEST, PRODASEN, SPALM), ramal, e-mail ou assunto..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
            />
          </div>

          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-500 hover:text-slate-700 px-3 py-2 border border-slate-200 rounded-lg bg-white"
            >
              Limpar busca
            </button>
          )}
        </div>

        {/* Abas de Categorias */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 text-xs">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos os Contatos ({INSTITUTIONAL_CONTACTS.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('gestao_pessoas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
              activeCategory === 'gestao_pessoas'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            1. Gestão de Pessoas (7)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('ti_telefonia')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
              activeCategory === 'ti_telefonia'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            2. TI & Telefonia (5)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('sistemas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
              activeCategory === 'sistemas'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Laptop className="h-3.5 w-3.5" />
            3. Sistemas Corporativos (4)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('gabinetes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
              activeCategory === 'gabinetes'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Landmark className="h-3.5 w-3.5" />
            4. Apoio aos Gabinetes (5)
          </button>
        </div>
      </div>

      {/* Lista de Contatos */}
      {filteredContacts.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-slate-200 p-12 text-center">
          <AlertCircle className="h-8 w-8 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-bold text-slate-700">Nenhum contato encontrado</h3>
          <p className="text-sm text-slate-500 mt-1">
            Não encontramos resultados para a busca "{searchTerm}".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredContacts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho do Card */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80 inline-block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {item.sector} {item.acronym ? `(${item.acronym})` : ''}
                    </p>
                  </div>

                  {item.acronym && (
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
                      {item.acronym}
                    </span>
                  )}
                </div>

                {/* Atribuição Principal */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                  {item.description}
                </p>

                {/* Forma de Acesso / Horário se houver */}
                {item.accessMethod && (
                  <div className="text-[11px] text-slate-600 mb-3 bg-amber-50/70 border border-amber-200/70 p-2 rounded-lg">
                    <span className="font-bold text-amber-900">Acesso: </span>
                    {item.accessMethod}
                  </div>
                )}
                {item.hours && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>Horário: <strong className="text-slate-700">{item.hours}</strong></span>
                  </div>
                )}
              </div>

              {/* Bloco de Contatos e Ações */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                {/* Ramais */}
                {item.ramais && (
                  <div className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <Phone className="h-3.5 w-3.5 text-blue-600" />
                      <span>Ramal: <strong className="text-slate-900">{item.ramais}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.ramais!, `ramal-${item.id}`)}
                      className="text-slate-400 hover:text-blue-600 transition-colors p-1 cursor-pointer"
                      title="Copiar ramal"
                    >
                      {copiedId === `ramal-${item.id}` ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                )}

                {/* Telefone Externo */}
                {item.phoneExternal && (
                  <div className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <Phone className="h-3.5 w-3.5 text-indigo-600" />
                      <span>Tel. Externo: <strong className="text-slate-900">{item.phoneExternal}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.phoneExternal!, `phone-${item.id}`)}
                      className="text-slate-400 hover:text-indigo-600 transition-colors p-1 cursor-pointer"
                      title="Copiar telefone externo"
                    >
                      {copiedId === `phone-${item.id}` ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                )}

                {/* WhatsApp */}
                {item.whatsapp && (
                  <div className="flex items-center justify-between bg-emerald-50/60 px-3 py-1.5 rounded-lg border border-emerald-200/70 text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 font-medium">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                      <span>WhatsApp Atendimento</span>
                    </div>
                    <a
                      href={`https://wa.me/${item.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1 hover:underline text-[11px]"
                    >
                      Abrir WhatsApp
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}

                {/* E-mail Oficial */}
                {item.email && (
                  <div className="flex items-center justify-between bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 font-medium truncate mr-2">
                      <Mail className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                      <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline truncate" title={item.email}>
                        {item.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.email!, `email-${item.id}`)}
                      className="text-slate-400 hover:text-blue-600 transition-colors p-1 cursor-pointer shrink-0"
                      title="Copiar e-mail"
                    >
                      {copiedId === `email-${item.id}` ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
