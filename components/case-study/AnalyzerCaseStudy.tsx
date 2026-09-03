import { AnalyzerVisual } from "@/components/ProjectVisuals";
import { AnalyzerFlow, LocalFirstDiagram, ProductBoundary, ScoreGenerationSplit, SearchWorkMap } from "@/components/case-study/CaseVisuals";
import { CaseSection, CaseStudyHero, CaseStudyLayout, MediaFigure, type CaseStudyBackLink } from "@/components/case-study/CaseStudyLayout";
import { ProductWalkthrough } from "@/components/case-study/ProductWalkthrough";

const toc = [
  { id: "problem", number: "01", label: "Problem" },
  { id: "definition", number: "02", label: "Product Definition" },
  { id: "flow", number: "03", label: "User Flow" },
  { id: "decisions", number: "04", label: "Key Decisions" },
  { id: "iteration", number: "05", label: "Iteration" },
  { id: "evaluation", number: "06", label: "Evaluation" },
  { id: "reflection", number: "07", label: "Reflection" },
];

export function AnalyzerCaseStudy({ backLink }: { backLink: CaseStudyBackLink }) {
  return (
    <>
      <div className="container">
        <CaseStudyHero eyebrow="INDEPENDENT AI PRODUCT" title="AI 岗位匹配分析器" definition="一个面向个人求职流程的 Local-first AI 求职工作台，把重复的岗位判断、简历调整、面试准备和投递资料沉淀为持续工作的系统。" role="独立完成问题定义、产品取舍、AI 链路、实现、评测与迭代" tags={["Product Definition", "Grounded AI", "Local-first"]} backLink={backLink}>
          <AnalyzerVisual />
        </CaseStudyHero>
      </div>
      <CaseStudyLayout toc={toc} next={{ href: "/projects/ai-risk-governance", label: "AI 风险治理工具闭环" }}>
        <CaseSection id="problem" number="01" eyebrow="Problem" title="问题不是分析一条 JD，而是重复完成整套求职判断" intro="每看到一个新岗位，我都要重新判断匹配度、调整简历、准备面试，并在散落的项目材料里寻找可以支持回答的事实。">
          <SearchWorkMap />
          <p className="case-lead">最初的需求看起来只是“让 AI 分析一个 JD”，真实使用后才发现，真正的问题是一整套判断与资料调用无法持续积累。</p>
        </CaseSection>

        <CaseSection id="definition" number="02" eyebrow="Product Definition" title="先收紧产品边界，再决定 AI 应该做什么" tone="soft">
          <ProductBoundary />
          <p>V1 不追求功能数量，也不把所有流程塞进一个聊天框。产品需要让用户理解当前任务、看到判断依据，并能够在后续求职流程中继续调用结果。</p>
        </CaseSection>

        <CaseSection id="flow" number="03" eyebrow="User Flow" title="三条职责清晰的工作流，而不是一个万能输入框" intro="岗位评分、面试准备和投递管理使用不同材料，也承担不同任务。">
          <AnalyzerFlow />
          <ProductWalkthrough />
        </CaseSection>

        <CaseSection id="decisions" number="04" eyebrow="Key Product Decisions" title="关键设计围绕可信、稳定与持续使用展开" tone="soft">
          <div className="decision-stack">
            <article className="decision-block"><span>Decision 01</span><div><h3>让 AI 输出 Grounded</h3><p>求职建议必须能够追溯到 JD、简历或用户选择的项目事实。模型只返回 Evidence ID，原文由服务端恢复，避免为了完整回答而补充不存在的经历。</p></div><MediaFigure src="/images/projects/analyzer/evidence-detail.png" alt="岗位分析中的 Evidence 追溯细节" caption="Evidence 不是装饰性引用，而是限制模型输出边界的产品机制。" /></article>
            <article className="decision-block is-reverse"><span>Decision 02</span><div><h3>评分与生成解耦</h3><p>匹配度不能完全交给模型自由判断。结构化要求、Evidence 校验和整数评分保持确定性；模型负责在事实边界内生成解释与建议。</p></div><ScoreGenerationSplit /></article>
            <article className="decision-block decision-wide"><span>Decision 03</span><div><h3>从单次报告变成持续工作台</h3><p>当分析结果需要在简历修改、面试准备和投递跟进中被反复调用，Jobs 与 Projects 就不再是附加功能，而是改变产品定位的核心结构。</p></div><div className="before-after"><div><span>V0</span><strong>JD → AI → 一份分析报告</strong></div><i aria-hidden="true">→</i><div><span>V1</span><strong>Analysis → Advice / Grounding / Jobs</strong></div></div></article>
            <article className="decision-block"><span>Decision 04</span><div><h3>Local-first</h3><p>Resume、JD 和项目经历具有隐私敏感性。V1 选择本地保存，避免过早引入账号、云端数据库和额外隐私风险，优先验证产品链路是否成立。</p></div><LocalFirstDiagram /></article>
          </div>
        </CaseSection>

        <CaseSection id="iteration" number="05" eyebrow="Iteration" title="改变产品的原因，比新增功能更重要">
          <div className="iteration-timeline">
            <article><span>V0</span><h3>先验证一次分析</h3><p>问题：岗位判断反复从头开始。<br />判断：先验证 JD 与 Resume 能否形成可读结论。</p></article>
            <article><span>Stability</span><h3>先让结果稳定可信</h3><p>问题：自由生成的结构与评分会波动。<br />判断：固定输出结构，并加入评分校验与 Evidence。</p></article>
            <article><span>Workflow</span><h3>承接分析后的动作</h3><p>问题：报告之后仍要重复准备简历和面试。<br />判断：拆分 Advice，并让 Projects 专门服务 Grounding。</p></article>
            <article><span>V1</span><h3>沉淀为持续工作台</h3><p>问题：历史结果与投递状态无法积累。<br />判断：加入 Jobs，并重组为清晰的求职工作区。</p></article>
          </div>
        </CaseSection>

        <CaseSection id="evaluation" number="06" eyebrow="Evaluation" title="当前验证的是产品链路与可信输出，不是 PMF" tone="warm">
          <div className="evaluation-grid">
            <article className="evaluation-positive"><span>已验证</span><h3>核心链路能够成立</h3><ul><li>最新 5 组脱敏基线 5/5 完成端到端流程</li><li>Evidence 能够追溯到输入材料</li><li>分析结果可继续承接面试准备与岗位管理</li></ul></article>
            <article><span>仍需验证</span><h3>评分理解与真实用户价值</h3><ul><li>当前匹配评分偏保守</li><li>预期分数区间通过率仍不足</li><li>不同背景用户是否理解评分并信任 Evidence</li><li>产品是否真正减少重复修改简历的工作</li></ul></article>
          </div>
          <details className="technical-evaluation"><summary>Technical Evaluation</summary><p>详细性能、重试和工程指标保留在项目测试资料中，不作为 Case Study 的主结果。</p></details>
        </CaseSection>

        <CaseSection id="reflection" number="07" eyebrow="Reflection" title="继续开发，应该以新的真实问题为条件">
          <p className="reflection-intro">下一阶段不由功能清单驱动。只有下面的条件在真实使用中出现，新增复杂度才有意义。</p>
          <div className="reflection-grid reflection-gates"><div><span>条件 01</span><p>相同的重复求职问题在不同背景用户中持续出现。</p></div><div><span>条件 02</span><p>用户能够理解评分、追溯 Evidence，并观察到实际时间节省。</p></div><div><span>条件 03</span><p>账号、协作或云端能力确实能解决已验证的使用阻力。</p></div></div>
        </CaseSection>
      </CaseStudyLayout>
    </>
  );
}
