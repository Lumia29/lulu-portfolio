export type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

export type Highlight = {
  id: "risk" | "aigc" | "experiment";
  title: string;
  metric: string;
  bullets: string[];
};

export type AboutExperience = {
  company: string;
  period: string;
  role: string;
  detail: string;
};

export type SkillScore = {
  label: string;
  score: number;
};

export type Project = {
  slug: string;
  cover: "multimodal" | "workflow" | "agent" | "huiwa" | "growth" | "userops";
  title: string;
  company: string;
  oneLiner: string;
  background: string;
  role: string;
  actions: string[];
  results: string[];
  insight: string;
  tags: string[];
};

export type Experiment = {
  title: string;
  status: string;
  oneLiner: string;
  modules: string[];
  future: string[];
};

export const siteMeta = {
  name: "刘露露",
  email: "henry135235@gmail.com",
  wechat: "uulllllluu",
  title: "字节跳动模型运营，正转向 AI 产品方向。",
  description:
    "做过广告安全治理、AIGC 产品优化、增长与用户运营，正在把复杂系统经验迁移到 AI 产品方向。",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" },
];

export const highlights: Highlight[] = [
  {
    id: "risk",
    title: "风险治理与自动化",
    metric: "准确率 99.13%，TVVR 0.82%",
    bullets: [
      "拆解小语种口播、联系方式导流等复杂风险链路",
      "结合 ASR、OCR、语义理解和规则编排做精细化判断",
      "在准确率、召回和审核成本之间找到真正可落地的平衡",
    ],
  },
  {
    id: "aigc",
    title: "AIGC 产品评测与优化",
    metric: "官网访问 25w+，获客成本降20%",
    bullets: [
      "把 1000+ 用户反馈和 badcase 结构化成问题类型",
      "搭建测试集、评分维度和竞品评测框架",
      "支持局部修复、商品参考图等方向的优化判断",
    ],
  },
  {
    id: "experiment",
    title: "个人 AI 工作流实验",
    metric: "4 小时工作压缩到 30 分钟",
    bullets: [
      "持续用 Agent 和 Workflow 处理总结、标注和琐碎工单",
      "验证一个人如何和工具协作，而不是被工具牵着走",
      "把实验沉淀成更稳定的工作方法和产品感觉",
    ],
  },
];

export const about = {
  intro:
    "我目前在字节做模型运营，也正在把重心转向 AI 产品方向。面对复杂问题，我习惯先定义场景和判断标准，再决定该用模型、规则还是流程解决。",
  education:
    "设计本硕背景给了我审美和用户感知，蔚来和长亭补上了业务现场与增长视角，阿里和字节让我学会用数据、评测和落地结果说话。",
  philosophy: "好的 AI 产品，不是把技术堆给用户，而是让复杂度在背后被消化。",
  experiences: [
    {
      company: "字节跳动",
      period: "2025.07 - 至今",
      role: "模型运营",
      detail: "负责抖音广告安全的多模态治理、Agent 自动化点审与复杂风险问题的策略落地。",
    },
    {
      company: "阿里淘天",
      period: "2024.09 - 2025.03",
      role: "AIGC 产品实习",
      detail: "围绕绘蛙工具的反馈分析、评测体系搭建和功能优化，连接用户需求与产品迭代。",
    },
    {
      company: "长亭科技",
      period: "2024.06 - 2024.09",
      role: "海外产品实习",
      detail: "从 0 到 1 搭建社媒矩阵和增长闭环，让冷启动策略真正产生装机和收入增量。",
    },
  ] satisfies AboutExperience[],
  hardSkills: [
    "多模态识别",
    "Prompt Engineering",
    "Agent / Workflow 设计",
    "需求分析",
    "竞品评测",
    "A/B 测试",
    "Python（基础）",
    "Figma",
    "Google Analytics",
    "OpenClaw / Coze",
  ],
  softSkills: ["结构化分析", "跨团队协作", "审美判断"],
  radar: [
    { label: "AI / 模型", score: 4.8 },
    { label: "产品方法", score: 4.6 },
    { label: "工具链", score: 4.2 },
    { label: "审美判断", score: 4.7 },
    { label: "跨团队协作", score: 4.5 },
  ] satisfies SkillScore[],
  beyondWork: [
    "持续记录和试用新工具，把个人站点当成长期实验场",
    "保持对视觉和表达的敏感，这也是我做产品的重要判断依据",
    "希望长期做 AI 产品，尤其是那些既有业务价值也有体验门槛的问题",
  ],
};

export const projects: Project[] = [
  {
    slug: "multimodal-risk",
    cover: "multimodal",
    title: "多模态风险识别方案",
    company: "字节跳动",
    oneLiner: "用 ASR + OCR + 语义融合，解决短视频小语种口播漏判难题。",
    background:
      "抖音广告里，有些黑产会用小语种口播加无字幕的方式逃避审核。传统关键词方案覆盖不住，人工又听不过来。",
    role: "方案设计者 + 落地推动者",
    actions: [
      "设计 ASR、OCR、语义理解三层融合方案，建立统一判断链路",
      "微调 Prompt，让模型学会区分真人口播和 BGM 干扰",
      "接入 AED 垂类模型做语种识别，减少日韩语误判",
      "持续灰度测试阈值和规则，校准识别精度与召回平衡",
    ],
    results: [
      "模型准确率 99.13%",
      "TVVR 从 2.78% 降到 0.82%",
      "目标达成率 265.49%",
      "日均拒绝风险内容 1248+ 条",
    ],
    insight: "技术不是越复杂越好，而是刚好解决问题。我们没用最贵的模型，但用了最对的组合。",
    tags: ["ASR", "OCR", "语义融合", "风险治理"],
  },
  {
    slug: "contact-review-workflow",
    cover: "workflow",
    title: "联系方式智能审核 Workflow",
    company: "字节跳动",
    oneLiner: "搭建规则初筛 → 视频抽帧 → 语义判断工作流，日均风险从 2000+ 降到 30+。",
    background:
      "黑产把手机号藏在路牌、门牌、衣服印花等背景区域里，传统 OCR 一扫一大片，误伤严重，审核员每天要看 2000+ 条风险漏放。",
    role: "Workflow 架构师 + 规则设计师",
    actions: [
      "设计三层漏斗：代码正则初筛、标题电话判断、视频抽帧复核",
      "提出前景区域识别，只关注连续出现且位置固定的数字",
      "结合 Caption 判断号码是否与商家场景相关",
      "灰度测试 3 帧、5 帧、8 帧，最终收敛到最优阈值",
    ],
    results: [
      "日均风险从 2000+ 降到 30+",
      "模型准确率 99%",
      "人工复核工作量减少 80%+",
    ],
    insight: "细节决定成败。一个 5 帧阈值的设定，背后是几十次灰度实验和数据对比。",
    tags: ["Workflow", "审核策略", "抽帧", "语义判断"],
  },
  {
    slug: "im-traffic-agent",
    cover: "agent",
    title: "IM 私信导流治理 Agent",
    company: "字节跳动",
    oneLiner: "设计串联式大模型判断逻辑，让 LLM 无效调用率降低 60%。",
    background:
      "商家会在私信里引导用户加微信或 QQ，传统并行判断方案误杀多、调用贵，既伤体验又伤成本。",
    role: "Agent 产品设计师 + 流程优化者",
    actions: [
      "重构为串联式逻辑，先判断导流意图，再判断发起方",
      "设计精细化规则：商家主动才处罚，用户自发留资不罚",
      "主导 Agent 自动化点审方案落地，形成模型识别 + 自动处置 + 人工兜底",
      "把能力复用到其他高频场景，验证通用性",
    ],
    results: [
      "LLM 无效调用率降低 60%",
      "处置效率提升至 95%",
      "审核效率整体提升 75%",
    ],
    insight: "好的 Agent 设计，是让大模型只做它擅长的事，剩下的交给规则和流程。",
    tags: ["LLM", "Agent", "流程优化", "成本治理"],
  },
  {
    slug: "huiwa-aigc",
    cover: "huiwa",
    title: "绘蛙 AIGC 工具优化",
    company: "阿里淘天",
    oneLiner: "基于 1000+ 用户反馈梳理问题，推动局部修复、商品参考图等方向迭代。",
    background:
      "绘蛙服务商家内容生产，但用户持续反馈人物崩坏、商品贴合度差、指令听不懂。问题很多，却没有一套可转成产品决策的方法。",
    role: "需求分析师 + 评测体系搭建者",
    actions: [
      "结构化整理 1000+ 反馈，按场景和类型分类",
      "搭建测试集、评分维度和 badcase 分类规则",
      "横向评测竞品，找到差距和机会点",
      "推动局部修复、商品参考图、AI 文案优化等方向落地",
    ],
    results: [
      "建立可支撑产品决策的评测体系",
      "明确哪些问题最影响体验，哪些能力最值得投入",
      "官网累计访问 25w+，获客成本降低 20%+",
    ],
    insight: "用户反馈不是用来看一眼的，而是要变成可讨论、可评测、可优化的问题。",
    tags: ["AIGC", "评测体系", "产品优化", "用户反馈"],
  },
  {
    slug: "global-growth",
    cover: "growth",
    title: "海外增长冷启动",
    company: "长亭科技",
    oneLiner: "从 0 搭建海外社媒矩阵，装机量新增 100 倍，首月收入突破 30w。",
    background:
      "SafeLine 出海起步时几乎没有预算，需要用内容和渠道策略撬动增长，而不是靠投放硬砸。",
    role: "海外增长负责人 + 内容创作者",
    actions: [
      "在 Medium 和 Dev.to 发布技术内容，累计阅读量 5w+",
      "搭建 Twitter / Discord 社群，积累粉丝 3w+",
      "设计内容获客、注册转化、渠道追踪闭环",
      "把增长动作与产品价值表达绑定，提升长期承接效率",
    ],
    results: [
      "装机量新增 100 倍",
      "首月付费用户占比 15%",
      "首月收入突破 30w",
    ],
    insight: "ToB 产品也能做增长，关键是找到对的内容和对的渠道。",
    tags: ["海外增长", "内容营销", "社媒矩阵", "冷启动"],
  },
  {
    slug: "nio-user-ops",
    cover: "userops",
    title: "蔚来用户运营项目",
    company: "蔚来汽车",
    oneLiner: "围绕用户数据、需求分析和活动落地协作，补齐我对用户现场和业务协同的第一手理解。",
    background:
      "在进入 AI 与产品方向之前，我先在蔚来的用户运营场景里接触了真实业务现场。相比纯设计训练，这段经历让我第一次更直接地面对用户数据、业务需求和跨团队推进。",
    role: "用户运营实习生 + 需求协同支持者",
    actions: [
      "参与用户数据调研，梳理不同类型用户反馈和行为特征",
      "协助做需求分析，把零散反馈转成可以讨论的业务问题",
      "参与活动策划与执行，理解从方案到落地的协同链路",
      "在跨团队配合中学习如何平衡用户感受、业务目标和执行节奏",
    ],
    results: [
      "建立了对用户运营现场和业务流程的基础理解",
      "补齐了从设计视角走向业务视角的重要一段经历",
      "为后续做增长、AIGC 产品和模型运营打下了用户与协同基础",
    ],
    insight: "这段经历不一定是最亮眼的项目，但它让我第一次真正进入业务现场，知道问题不是只靠想法解决，而要靠协作和落地。",
    tags: ["用户运营", "需求分析", "活动协同", "业务理解"],
  },
];

export const experiments: Experiment[] = [
  {
    title: "OpenClaw 个人助手 Agent",
    status: "稳定使用中",
    oneLiner: "独立设计个人 AI 助手，自动化处理日常任务与垂直业务场景。",
    modules: [
      "消息总结、待办提取、会议预订、调休提醒等日常任务自动化",
      "数据标注 SOP 自动化，形成自动标注、跑数测试、结果校验闭环",
      "广告审核误伤工单豁免提取，集中处理琐碎工单",
    ],
    future: ["封装成可复用技能分享给团队", "继续探索周报、待办跟进等垂直场景"],
  },
  {
    title: "AI 个人网站建设",
    status: "进行中",
    oneLiner: "用 AI 工具链从 0 搭建个人作品集网站，验证人 + AI 协作建站的方法论。",
    modules: [
      "用语料库与 AI 共同生成网站文案和项目包装",
      "把站点作为 A/B 测试平台，记录不同呈现方式的效果差异",
      "持续优化个人品牌表达，让作品和叙事一起升级",
    ],
    future: ["沉淀成可复用的方法论", "把网站做成持续迭代的个人品牌入口"],
  },
];

export const blogTopics = [
  "如何用 OpenClaw 把个人效率提升 2 倍",
  "AIGC 工具评测：绘蛙 vs 可灵 vs Runway",
  "从设计师到 AI 产品：我的转型之路",
  "Prompt Engineering 实战：我如何教会 AI 理解标注规则",
  "AI 风险治理的 5 个反常识认知",
];

export const contact = {
  email: siteMeta.email,
  phone: "152-7181-8824",
  wechat: siteMeta.wechat,
  coffeeLink: "mailto:henry135235@gmail.com?subject=%E9%A2%84%E7%BA%A6%2015%20%E5%88%86%E9%92%9F%E5%92%96%E5%95%A1%E8%81%8A",
  resumeLink: "/resume.pdf",
  github: "https://github.com/Lumia29/lulu-portfolio",
};

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
