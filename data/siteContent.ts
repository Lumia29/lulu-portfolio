export type Highlight = {
  title: string;
  metric: string;
  description: string;
};

export type TimelineItem = {
  name: string;
  role: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  tags: string[];
};

export type Experiment = {
  title: string;
  status: string;
  description: string;
};

export const siteMeta = {
  name: "刘露露",
  title: "用 AI 让工作更性感的模型运营 | 正在探索 AI 产品经理，用项目证明产品思维",
  email: "1272362081@qq.com",
};

export const navigation = [
  { href: "/", label: "首页" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" },
];

export const highlights: Highlight[] = [
  {
    title: "AI 风险治理专家",
    metric: "准确率 99.13%，TVVR 降至 0.82%",
    description: "聚焦审核链路设计与策略打磨，把复杂风险问题拆成可验证、可迭代、可落地的系统方案。",
  },
  {
    title: "AIGC 产品操盘手",
    metric: "官网访问 25w+，获客成本降 20%",
    description: "从产品价值包装到增长策略推进，让 AIGC 工具在真实业务里跑出用户增长和效率增量。",
  },
  {
    title: "自驱型 AI 实验者",
    metric: "OpenClaw 每日节省 1-2 小时",
    description: "持续把 AI 接进自己的工作流，验证自动化、助手化和 Agent 化在个人场景里的长期收益。",
  },
];

export const about = {
  education: "设计本硕背景（工业设计 × 产品设计）",
  skills: ["AI/模型", "产品方法", "工具链", "审美判断", "跨团队协作"],
  experiences: [
    {
      name: "字节跳动",
      role: "模型运营",
      detail: "负责多模态风险治理、审核策略与 Agent 方案优化，推动模型能力与业务目标对齐。",
    },
    {
      name: "阿里淘天",
      role: "绘蛙实习",
      detail: "围绕 AIGC 工具体验和评测体系建设，帮助产品在效果、效率和可用性上收敛。",
    },
    {
      name: "长亭科技",
      role: "海外增长",
      detail: "参与海外冷启动增长策略，关注用户增长、产品表达和市场切入路径。",
    },
  ] satisfies TimelineItem[],
};

export const projects: Project[] = [
  {
    slug: "multimodal-risk",
    title: "多模态风险识别方案",
    summary: "整合 ASR、OCR 与语义理解能力，建立统一判断链路，提升复杂内容的识别精度与召回稳定性。",
    impact: "多模态融合后，风险识别更加完整，减少单模型视角遗漏。",
    tags: ["ASR", "OCR", "语义融合", "风险治理"],
  },
  {
    slug: "contact-review-workflow",
    title: "联系方式智能审核 Workflow",
    summary: "重构审核策略与自动化处理流程，把联系方式风险从分散处置升级为可运营的稳定闭环。",
    impact: "日均风险从 2000+ 降至 30+，显著压缩人工和策略压力。",
    tags: ["Workflow", "审核策略", "自动化", "运营闭环"],
  },
  {
    slug: "im-traffic-agent",
    title: "IM 私信导流治理 Agent",
    summary: "围绕 LLM 调用路径做规则设计、失败分析与策略回收，减少无效推理成本。",
    impact: "LLM 无效调用率降低 60%，让 Agent 更稳、更省、更可控。",
    tags: ["LLM", "Agent", "成本优化", "私信治理"],
  },
  {
    slug: "huiwa-optimization",
    title: "绘蛙 AIGC 工具优化",
    summary: "建立评测体系，连接用户感知、模型效果与产品决策，帮助工具迭代更有抓手。",
    impact: "让 AIGC 效果判断从主观讨论转向可量化评估。",
    tags: ["AIGC", "评测体系", "产品优化", "效果分析"],
  },
  {
    slug: "global-growth",
    title: "海外增长冷启动",
    summary: "参与搭建冷启动增长策略，聚焦官网承接、用户沟通和获客效率提升。",
    impact: "装机量新增 100 倍，为后续增长提供了验证过的起点。",
    tags: ["增长", "冷启动", "官网转化", "海外市场"],
  },
];

export const experiments: Experiment[] = [
  {
    title: "OpenClaw 个人助手",
    status: "稳定使用中",
    description: "把高频信息整理、任务跟进和重复操作接给个人助手，释放更大块的深度工作时间。",
  },
  {
    title: "AI 个人网站建设",
    status: "进行中",
    description: "把作品集、项目叙事和个人品牌表达做成可持续迭代的 AI 原生入口。",
  },
];

export const contact = {
  email: "1272362081@qq.com",
  wechatHint: "扫码添加",
  coffeeLink: "mailto:1272362081@qq.com?subject=%E9%A2%84%E7%BA%A6%E5%92%96%E5%95%A1%E8%81%8A",
  resumeLink: "/resume.pdf",
};
