import Image from "next/image";

import type { ProjectVisual } from "@/data/siteContent";

export function AnalyzerVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`analyzer-visual ${compact ? "is-compact" : ""}`}>
      <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>Local-first AI 求职工作台</span></div>
      <div className="analyzer-shot-shell">
        <Image src="/images/projects/analyzer/analysis-overview.png" alt="AI 岗位匹配分析器的岗位分析界面" fill sizes={compact ? "(max-width: 760px) 100vw, 48vw" : "(max-width: 760px) 100vw, 60vw"} className="analyzer-shot" />
      </div>
    </div>
  );
}

export function RiskLoopVisual({ compact = false }: { compact?: boolean }) {
  const nodes = ["风险归因", "策略生成", "优化 / 验证"];
  return (
    <div className={`risk-sequence-preview ${compact ? "is-compact" : "is-home"}`} aria-label="风险归因、策略生成、优化验证与 badcase 回流组成治理流程">
      <div className="risk-sequence-track">
        {nodes.map((node, index) => (
          <div key={node} className="risk-sequence-stage"><span>0{index + 1}</span><strong>{node}</strong></div>
        ))}
      </div>
      <div className="risk-sequence-return"><span aria-hidden="true">↻</span><strong>badcase 回流</strong></div>
    </div>
  );
}

export function RiskProcessVisual() {
  const nodes = ["风险归因", "策略生成", "优化 / 验证"];
  return (
    <div className="risk-process-visual" aria-label="风险归因、策略生成、优化验证与 badcase 回流组成连续闭环">
      <div className="risk-process-track">
        {nodes.map((node, index) => (
          <div key={node} className="risk-process-stage">
            <span>0{index + 1}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
      <div className="risk-process-return"><span aria-hidden="true">↺</span><strong>新 badcase 回流</strong><small>重新进入风险归因</small></div>
    </div>
  );
}

export function HuiwaMatrixVisual() {
  const rows = [
    ["指令理解", "语义"],
    ["主体稳定", "一致性"],
    ["商品贴合", "贴合度"],
    ["局部修复", "可控性"],
  ];
  return (
    <div className="huiwa-matrix" aria-label="反馈分类与评测矩阵示意">
      <div className="matrix-header"><span>问题类别</span><span>观察维度</span><span>方向</span></div>
      {rows.map(([category, dimension], index) => (
        <div key={category} className="matrix-row"><strong>{category}</strong><i>{dimension}</i><span className={`matrix-status s${index + 1}`} /></div>
      ))}
    </div>
  );
}

export function HuiwaTaxonomyVisual() {
  const rows = [
    ["指令理解", "语义准确"],
    ["主体稳定", "画面一致"],
    ["商品贴合", "关系贴合"],
    ["局部修复", "结果可控"],
  ];
  return (
    <div className="huiwa-taxonomy-visual" aria-label="AIGC 问题类别、观察维度与观察方向的脱敏重构示意">
      <div className="taxonomy-visual-header"><span>问题类别</span><span>观察维度</span><span>观察方向</span></div>
      {rows.map(([category, dimension], index) => (
        <div key={category} className="taxonomy-visual-row"><strong><i className={`taxonomy-dot d${index + 1}`} />{category}</strong><span>{dimension}</span><em>重点观察</em></div>
      ))}
      <p>脱敏重构示意</p>
    </div>
  );
}

export function ProjectVisualGraphic({ visual, compact = false }: { visual: ProjectVisual; compact?: boolean }) {
  if (visual === "analyzer") return <AnalyzerVisual compact={compact} />;
  if (visual === "risk") return <RiskLoopVisual compact={compact} />;
  return <HuiwaMatrixVisual />;
}
