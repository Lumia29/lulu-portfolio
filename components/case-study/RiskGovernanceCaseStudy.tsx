import { RiskProcessVisual } from "@/components/ProjectVisuals";
import { GovernanceLoop } from "@/components/case-study/CaseVisuals";
import { CaseSection, CaseStudyHero, CaseStudyLayout, type CaseStudyBackLink } from "@/components/case-study/CaseStudyLayout";

const toc = [
  { id: "problem", number: "01", label: "Business Problem" },
  { id: "manual", number: "02", label: "Repeated Work" },
  { id: "reframe", number: "03", label: "AI Reframe" },
  { id: "workflows", number: "04", label: "Tools & Workflows" },
  { id: "loop", number: "05", label: "Closed Loop" },
  { id: "role", number: "06", label: "Role & Collaboration" },
  { id: "reflection", number: "07", label: "Reflection" },
];

export function RiskGovernanceCaseStudy({ backLink }: { backLink: CaseStudyBackLink }) {
  return (
    <>
      <div className="container"><CaseStudyHero eyebrow="ENTERPRISE AI PRACTICE" title="AI 风险治理工具闭环" definition="从多个真实治理工具与流程中，抽象出风险归因、策略生成、模型优化与验证的连续闭环。" role="大模型机审运营 · AI 策略、Agent / Workflow 与治理流程实践" tags={["Risk Strategy", "Agent / Workflow", "Human in the Loop"]} backLink={backLink}><RiskProcessVisual /></CaseStudyHero></div>
      <CaseStudyLayout toc={toc} next={{ href: "/projects/huiwa-aigc", label: "绘蛙 AIGC 产品评测与优化" }}>
        <CaseSection id="problem" number="01" eyebrow="Business Problem" title="真实风险治理不是单点识别，而是多目标约束" intro="风险信号分散在不同内容与场景中，治理既要识别问题，也要同时考虑召回、误伤、审核成本与可落地性。">
          <div className="constraint-strip"><div><span>识别</span><p>从多模态内容和上下文中找到真实风险。</p></div><div><span>策略</span><p>把判断转成可执行、可验证的机审策略。</p></div><div><span>验证</span><p>持续检查误伤、漏判与模型变化。</p></div></div>
        </CaseSection>
        <CaseSection id="manual" number="02" eyebrow="Repeated Work" title="我先识别了治理流程中的重复人工瓶颈" tone="soft">
          <div className="manual-flow">{["取数", "风险归因", "策略编写", "效果验证", "误伤排查"].map((item, index) => <span key={item}>{item}{index < 4 ? <i aria-hidden="true">→</i> : null}</span>)}</div>
          <p>这些步骤并非全部适合交给模型；真正需要重构的是高频信息搬运、重复归因、标准化策略草拟和结果回收。</p>
        </CaseSection>
        <CaseSection id="reframe" number="03" eyebrow="AI Reframe" title="先分配责任，再选择模型、规则还是流程">
          <div className="responsibility-allocation"><div><span>模型</span><strong>语义与非结构化判断</strong><p>处理复杂表达与多模态语境。</p></div><div><span>规则</span><strong>明确边界与前置过滤</strong><p>处理确定条件和成本控制。</p></div><div><span>Workflow</span><strong>连接输入、调用与结果</strong><p>让重复链路稳定运行。</p></div><div><span>人工</span><strong>确认、异常与最终责任</strong><p>保留风险治理中的必要判断。</p></div></div>
        </CaseSection>
        <CaseSection id="workflows" number="04" eyebrow="Tools & Workflows" title="三个实际方向，共同重构一条治理链路" tone="soft">
          <div className="workflow-cases">
            <article><span>01</span><h3>风险归因 Agent</h3><p><b>原始问题：</b>信息分散，人工需要反复取数和定位原因。</p><dl><div><dt>AI 负责</dt><dd>信息整理、模式识别、归因草拟</dd></div><div><dt>人工保留</dt><dd>判断异常、确认原因与治理优先级</dd></div></dl></article>
            <article><span>02</span><h3>机审策略生成 Workflow</h3><p><b>原始问题：</b>已有治理判断需要重复转成结构化策略。</p><dl><div><dt>AI / Workflow 负责</dt><dd>生成候选策略与结构化表达</dd></div><div><dt>规则与人工保留</dt><dd>校验边界、审核风险与灰度验证</dd></div></dl></article>
            <article><span>03</span><h3>模型误伤优化与验证</h3><p><b>原始问题：</b>高频误伤难以持续识别、聚类并回流验证。</p><dl><div><dt>AI 负责</dt><dd>badcase 识别、聚类与复测辅助</dd></div><div><dt>人工保留</dt><dd>确认误伤、定义优化目标与验收</dd></div></dl></article>
          </div>
        </CaseSection>
        <CaseSection id="loop" number="05" eyebrow="Closed Loop" title="闭环来自多个工具和流程的产品化抽象">
          <GovernanceLoop />
          <p className="boundary-note">公开作品集中的闭环结构，是对多个实际治理工具和工作流程的产品化抽象，不对应一个独立建设的企业平台。</p>
        </CaseSection>
        <CaseSection id="role" number="06" eyebrow="Role & Collaboration" title="明确个人贡献与团队协作的边界" tone="warm">
          <div className="role-responsibility-matrix risk-role"><article><span>我直接参与</span><ul><li>识别重复治理流程与人工瓶颈</li><li>设计 Agent / Workflow 的任务、输入输出与人工确认边界</li><li>参与策略、模型效果与 badcase 验证</li></ul></article><article><span>与团队协作</span><ul><li>与产品、算法、工程 / 平台、审核 / 业务等角色共同推进落地</li><li>依赖内部数据、模型与系统能力</li><li>在真实业务约束下持续校准方案</li></ul></article><article><span>本案例不声称</span><ul><li>独立建设完整企业治理平台</li><li>独立拥有全部算法与工程能力</li><li>使用未经核验的整体提效数字</li></ul></article></div>
        </CaseSection>
        <CaseSection id="reflection" number="07" eyebrow="Reflection" title="AI 价值来自职责重构，而不是替代所有人工">
          <blockquote className="reflection-quote">好的治理工具不是让模型接管判断，而是把重复劳动交给 AI，把明确条件交给规则，把责任和例外保留给人。</blockquote>
        </CaseSection>
      </CaseStudyLayout>
    </>
  );
}
