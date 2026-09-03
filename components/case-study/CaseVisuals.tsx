export function SearchWorkMap() {
  const steps = ["判断岗位", "调整简历", "准备面试", "查找项目材料"];
  return <div className="work-map">{steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong><p>每遇到一个新岗位，都要重复完成。</p></div>)}</div>;
}

export function ProductBoundary() {
  return (
    <div className="boundary-map">
      <div className="boundary-column is-in"><span>V1 要解决</span><ul><li>岗位分析与简历建议</li><li>面试 Project Grounding</li><li>Jobs 记录与持续管理</li></ul></div>
      <div className="boundary-core"><span>产品定义</span><strong>Local-first<br />AI 求职工作台</strong><p>模型不补充不存在的个人经历</p></div>
      <div className="boundary-column is-out"><span>V1 明确不做</span><ul><li>招聘平台与自动投递</li><li>账号系统与云端数据库</li><li>通用 SaaS 与功能堆叠</li></ul></div>
    </div>
  );
}

export function AnalyzerFlow() {
  const lanes = [
    { label: "岗位判断", nodes: ["JD + Resume", "岗位分析", "简历建议"] },
    { label: "面试准备", nodes: ["Question + Projects", "Project Grounding", "Grounded Answer"] },
    { label: "持续管理", nodes: ["Analysis Result", "Jobs", "Status / Snapshot"] },
  ];
  return <div className="flow-lanes">{lanes.map((lane) => <div key={lane.label} className="flow-lane"><strong>{lane.label}</strong><div>{lane.nodes.map((node, index) => <span key={node}>{node}{index < lane.nodes.length - 1 ? <i aria-hidden="true">→</i> : null}</span>)}</div></div>)}<p className="flow-rule"><b>边界：</b>Projects 补充面试语境，但不参与岗位匹配评分。</p></div>;
}

export function ScoreGenerationSplit() {
  return <div className="split-diagram"><div><span>Deterministic</span><strong>要求拆解 · Evidence 校验 · 整数评分</strong><p>稳定、可追溯、可重复检查</p></div><i aria-hidden="true">＋</i><div><span>Generative</span><strong>优势 · 缺口 · 简历建议 · 面试准备</strong><p>在已验证事实边界内组织表达</p></div></div>;
}

export function LocalFirstDiagram() {
  return <div className="local-first-diagram"><div className="local-device"><span>Browser</span><strong>Resume · JD · Projects · Jobs</strong><p>保存在用户本地</p></div><div className="local-boundary"><span>V1 Trade-off</span><p>减少账号与云端依赖，优先验证核心链路，同时接受跨设备同步缺失。</p></div></div>;
}

export function GovernanceLoop() {
  const nodes = ["自动取数与风险归因", "自动生成策略", "模型优化与验证", "新 badcase 回流"];
  return <div className="governance-loop">{nodes.map((node, index) => <div key={node}><span>0{index + 1}</span><strong>{node}</strong></div>)}<p><b aria-hidden="true">↺</b> 回流让新问题重新进入归因与验证</p></div>;
}

export function FeedbackTaxonomy() {
  const raw = ["零散问题", "不一致描述", "个体体验"];
  const structured = ["问题类型", "使用场景", "观察维度", "可复现条件"];
  return <div className="feedback-taxonomy"><div className="feedback-input"><span>Raw / Scattered</span>{raw.map((item) => <p key={item}>{item}</p>)}</div><div className="feedback-arrow"><span>抽象</span><i aria-hidden="true">→</i><span>统一描述</span></div><div className="taxonomy-output"><span>Structured / Discussable</span>{structured.map((item) => <strong key={item}>{item}</strong>)}</div></div>;
}

export function EvaluationDesignFlow() {
  const items = [
    ["Source", "反馈 / badcase"],
    ["Dimension", "统一观察维度"],
    ["Comparison", "测试 case 对比"],
    ["Insight", "可讨论的产品假设"],
  ];
  return <div className="huiwa-evaluation-flow">{items.map(([label, value], index) => <div key={label}><span>{label}</span><strong>{value}</strong>{index < items.length - 1 ? <i aria-hidden="true" /> : null}</div>)}</div>;
}

export function HuiwaEvaluationMatrix() {
  const rows = [
    ["指令理解", "指令与结果", "语义准确性", "对比观察"],
    ["主体稳定", "连续生成", "画面一致性", "多轮对比"],
    ["商品贴合", "商品与人物关系", "关系贴合度", "badcase 回看"],
    ["局部修复", "局部调整", "结果可控性", "前后对照"],
  ];
  return <figure className="huiwa-evaluation-matrix"><div className="huiwa-matrix-head"><span>问题类型</span><span>场景</span><span>观察维度</span><span>验证方式</span></div>{rows.map((row) => <div key={row[0]} className="huiwa-matrix-line">{row.map((cell, index) => index === 0 ? <strong key={cell}>{cell}</strong> : <span key={cell}>{cell}</span>)}</div>)}<figcaption>脱敏重构示意 · 基于实际评测工作抽象，不展示内部原始文档或数据</figcaption></figure>;
}
