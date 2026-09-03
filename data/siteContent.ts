export type NavItem = {
  href: string;
  label: string;
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  evidence: string;
  href: string;
  linkLabel: string;
};

export type ProjectVisual = "analyzer" | "risk" | "huiwa";

export type FeaturedProject = {
  slug: string;
  number: string;
  title: string;
  organization: string;
  role: string;
  oneLiner: string;
  result: string;
  tags: string[];
  visual: ProjectVisual;
  flagship?: boolean;
};

export type Experience = {
  company: string;
  period: string;
  role: string;
  detail: string;
  tags?: string[];
};

export const siteMeta = {
  name: "刘露露",
  title: "AI 产品 / AI 策略作品集",
  description: "AI 产品与策略实践者，现任字节跳动大模型机审运营，实践覆盖 AI 风险策略、Agent / Workflow、AIGC 产品评测与独立 AI 产品构建。",
};

export const navigation: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export const contact = {
  email: "henry135235@gmail.com",
  resumeLink: "/resume.pdf",
  wechatQr: "/images/wechat-qr.jpg",
};

export const resumeIsPublic = true;

export const capabilities: Capability[] = [
  {
    id: "01",
    title: "先定义问题与判断标准",
    description: "把模糊需求拆成场景、目标、约束和可验证条件，再决定产品边界。",
    evidence: "Analyzer",
    href: "/projects/ai-job-match-analyzer?from=home#problem",
    linkLabel: "查看 AI 岗位匹配分析器 Problem 章节",
  },
  {
    id: "02",
    title: "为 AI 划定事实与决策边界",
    description: "判断哪些交给模型，哪些必须由规则、Evidence 或人工确认。",
    evidence: "风险治理",
    href: "/projects/ai-risk-governance?from=home#reframe",
    linkLabel: "查看 AI 风险治理工具闭环 AI Reframe 章节",
  },
  {
    id: "03",
    title: "把反馈变成可评测问题",
    description: "将用户反馈与 badcase 转成分类、测试用例和能够支持判断的证据。",
    evidence: "绘蛙",
    href: "/projects/huiwa-aigc?from=home#evaluation",
    linkLabel: "查看绘蛙 AIGC 产品评测与优化 Evaluation Design 章节",
  },
  {
    id: "04",
    title: "把重复流程产品化",
    description: "识别高频人工步骤，再用 Agent、Workflow、规则和人工节点重构。",
    evidence: "风险治理",
    href: "/projects/ai-risk-governance?from=home#loop",
    linkLabel: "查看 AI 风险治理工具闭环 Closed Loop 章节",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "ai-job-match-analyzer",
    number: "01",
    title: "AI 岗位匹配分析器",
    organization: "独立项目",
    role: "独立完成产品定义、AI 链路、实现、评测与迭代",
    oneLiner: "把重复的岗位判断、简历调整、面试准备和投递资料沉淀成持续工作的个人求职系统。",
    result: "从 Prompt Demo 迭代为 Local-first AI 求职工作台",
    tags: ["Product Definition", "Grounded AI", "Local-first"],
    visual: "analyzer",
    flagship: true,
  },
  {
    slug: "ai-risk-governance",
    number: "02",
    title: "AI 风险治理工具闭环",
    organization: "字节跳动",
    role: "大模型机审运营 · AI 策略与 Workflow 实践",
    oneLiner: "识别风险治理中的重复流程，用 Agent、Workflow、规则与人工节点重构归因、策略和验证链路。",
    result: "将多个实际工具与治理流程抽象为可复用闭环",
    tags: ["AI Strategy", "Agent / Workflow", "Evaluation"],
    visual: "risk",
  },
  {
    slug: "huiwa-aigc",
    number: "03",
    title: "绘蛙 AIGC 产品评测与优化",
    organization: "阿里淘天",
    role: "AI 产品运营实习",
    oneLiner: "将用户反馈和 badcase 结构化为可评测的问题，并据此沉淀产品优化方向。",
    result: "从零散反馈形成可比较、可讨论的产品判断",
    tags: ["Model Evaluation", "Badcase", "Product Insight"],
    visual: "huiwa",
  },
];

const chaitinExperience = {
  company: "长亭科技",
  period: "2024.06 — 2024.09",
  role: "海外产品运营实习",
} as const;

const nioExperience = {
  company: "蔚来汽车",
  period: "2024.03–2024.06",
  role: "用户运营实习",
} as const;

export const careerExperiences: Experience[] = [
  {
    company: "字节跳动",
    period: "2025.07 — 至今",
    role: "大模型机审运营",
    detail: "在真实商业风险场景中进行 AI 风险策略、Agent / Workflow 和模型优化实践。",
  },
  {
    company: "阿里淘天",
    period: "2024.09 — 2025.03",
    role: "AI 产品运营实习",
    detail: "参与绘蛙 AIGC 产品的用户反馈、badcase、模型评测与产品优化方向工作。",
  },
  {
    ...chaitinExperience,
    detail: "在海外产品冷启动中建立业务现场、内容增长和跨团队协作视角。",
  },
  {
    ...nioExperience,
    detail: "从用户数据、需求分析和活动协作中建立对真实用户现场的理解。",
  },
];

export const additionalExperiences: Experience[] = [
  {
    ...chaitinExperience,
    detail: "参与海外产品冷启动、内容与渠道增长，理解产品价值如何进入真实市场。",
    tags: ["海外增长", "产品运营"],
  },
  {
    ...nioExperience,
    detail: "围绕用户数据、需求分析与活动协作，建立对用户现场和业务流程的第一手理解。",
    tags: ["用户洞察", "业务协作"],
  },
];

export const about = {
  intro: "我关注的不是先决定使用 AI，而是先把问题、判断标准和责任边界定义清楚，再决定应该使用模型、规则还是流程。",
  story: [
    "设计本硕训练让我习惯从用户体验与系统关系出发观察问题；用户运营和海外产品运营让我进入真实业务现场，理解一个方案还需要被沟通、协作和落地。",
    "在阿里淘天参与绘蛙 AIGC 产品期间，我把用户反馈和 badcase 转成可评测的问题；在字节，我进一步处理 AI 风险策略、模型效果与重复治理流程。独立构建 AI 岗位匹配分析器，则让我把问题定义、产品取舍、AI 链路、实现和评测连接成一条完整路径。",
  ],
  method: "这些经历指向同一套方法：先定义问题和判断标准，再决定该交给模型、规则还是流程。",
};
