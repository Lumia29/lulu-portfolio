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
  description: string;
};

export const siteMeta = {
  name: "刘露露",
  title: "用 AI 让工作更性感的模型运营 | 正在探索 AI 产品经理，用项目证明产品思维",
  email: "henry135235@gmail.com",
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
    background:
      "抖音广告里，有些黑产会用小语种口播加无字幕的方式逃避审核。传统关键词方案覆盖不住，人工又听不过来。",
    role: "方案设计者 + 落地推动者",
    actions: [
      "设计 ASR、OCR、语义理解三层融合方案，建立统一判断链路。",
      "微调 Prompt，让模型学会区分真人口播和 BGM 干扰。",
      "接入 AED 垂类模型做语种识别，减少日韩语误判。",
      "持续灰度测试阈值和规则，校准识别精度与召回平衡。",
    ],
    results: [
      "模型准确率 99.13%。",
      "TVVR 从 2.78% 降至 0.82%。",
      "目标达成率 265.49%。",
      "日均拒绝风险内容 1248+ 条。",
    ],
    insight: "技术不是越复杂越好，而是刚好解决问题。我们没用最贵的模型，但用了最对的组合。",
    tags: ["ASR", "OCR", "语义融合", "风险治理"],
  },
  {
    slug: "contact-review-workflow",
    title: "联系方式智能审核 Workflow",
    summary: "重构审核策略与自动化处理流程，把联系方式风险从分散处置升级为可运营的稳定闭环。",
    impact: "日均风险从 2000+ 降至 30+，显著压缩人工和策略压力。",
    background:
      "黑产会把手机号藏在路牌、门牌和衣服印花等背景区域里，传统 OCR 一扫一大片，误伤严重，审核员每天要看 2000+ 条风险漏放。",
    role: "Workflow 架构师 + 规则设计师",
    actions: [
      "设计三层漏斗：代码正则初筛、标题电话判断、视频抽帧复核。",
      "提出前景区域识别，只关注连续出现且位置固定的数字。",
      "结合 Caption 判断号码是否与商家场景相关。",
      "灰度测试 3 帧、5 帧、8 帧，最终收敛到最优阈值。",
    ],
    results: [
      "日均风险从 2000+ 降至 30+。",
      "模型准确率 99%。",
      "人工复核工作量减少 80%+。",
    ],
    insight: "细节决定成败。一个 5 帧阈值的设定，背后是几十次灰度实验和数据对比。",
    tags: ["Workflow", "审核策略", "自动化", "运营闭环"],
  },
  {
    slug: "im-traffic-agent",
    title: "IM 私信导流治理 Agent",
    summary: "围绕 LLM 调用路径做规则设计、失败分析与策略回收，减少无效推理成本。",
    impact: "LLM 无效调用率降低 60%，让 Agent 更稳、更省、更可控。",
    background:
      "商家会在私信里引导用户加微信或 QQ，传统并行判断方案误杀多、调用贵，既伤体验又伤成本。",
    role: "Agent 产品设计师 + 流程优化者",
    actions: [
      "重构为串联式逻辑，先判断导流意图，再判断发起方。",
      "设计精细化规则：商家主动才处罚，用户自发留资不罚。",
      "主导 Agent 自动化点审方案落地，形成模型识别 + 自动处置 + 人工兜底。",
      "把能力复用到其他高频场景，验证通用性。",
    ],
    results: [
      "LLM 无效调用率降低 60%。",
      "处置效率提升至 95%。",
      "审核效率整体提升 75%。",
    ],
    insight: "好的 Agent 设计，是让大模型只做它擅长的事，剩下的交给规则和流程。",
    tags: ["LLM", "Agent", "成本优化", "私信治理"],
  },
  {
    slug: "huiwa-optimization",
    title: "绘蛙 AIGC 工具优化",
    summary: "建立评测体系，连接用户感知、模型效果与产品决策，帮助工具迭代更有抓手。",
    impact: "让 AIGC 效果判断从主观讨论转向可量化评估。",
    background:
      "绘蛙服务商家内容生产，但用户持续反馈人物崩坏、商品贴合度差、指令听不懂。问题很多，却没有一套可转成产品决策的方法。",
    role: "需求分析师 + 评测体系搭建者",
    actions: [
      "结构化整理 1000+ 反馈，按场景和类型分类。",
      "搭建测试集、评分维度和 badcase 分类规则。",
      "横向评测竞品，找到差距和机会点。",
      "推动局部修复、商品参考图、AI 文案优化等方向落地。",
    ],
    results: [
      "建立可支撑产品决策的评测体系。",
      "明确哪些问题最影响体验，哪些能力最值得投入。",
      "官网累计访问 25w+，获客成本降低 20%+。",
    ],
    insight: "用户反馈不是用来看一眼的，而是要变成可讨论、可评测、可优化的问题。",
    tags: ["AIGC", "评测体系", "产品优化", "效果分析"],
  },
  {
    slug: "global-growth",
    title: "海外增长冷启动",
    summary: "参与搭建冷启动增长策略，聚焦官网承接、用户沟通和获客效率提升。",
    impact: "装机量新增 100 倍，为后续增长提供了验证过的起点。",
    background:
      "SafeLine 出海起步时几乎没有预算，需要用内容和渠道策略撬动增长，而不是靠投放硬砸。",
    role: "海外增长负责人 + 内容创作者",
    actions: [
      "在 Medium 和 Dev.to 发布技术内容，累计阅读量 5w+。",
      "搭建 Twitter / Discord 社群，积累粉丝 3w+。",
      "设计内容获客、注册转化、渠道追踪闭环。",
      "把增长动作与产品价值表达绑定，提升长期承接效率。",
    ],
    results: [
      "装机量新增 100 倍。",
      "首月付费用户占比 15%。",
      "首月收入突破 30w。",
    ],
    insight: "ToB 产品也能做增长，关键是找到对的内容和对的渠道。",
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
  email: "henry135235@gmail.com",
  wechatHint: "uulllllluu",
  coffeeLink: "mailto:henry135235@gmail.com?subject=%E9%A2%84%E7%BA%A6%E5%92%96%E5%95%A1%E8%81%8A",
  resumeLink: "/resume.pdf",
};

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
