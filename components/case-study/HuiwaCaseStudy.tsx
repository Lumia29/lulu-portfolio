import { HuiwaTaxonomyVisual } from "@/components/ProjectVisuals";
import { EvaluationDesignFlow, FeedbackTaxonomy, HuiwaEvaluationMatrix } from "@/components/case-study/CaseVisuals";
import { CaseSection, CaseStudyHero, CaseStudyLayout, type CaseStudyBackLink } from "@/components/case-study/CaseStudyLayout";

const toc = [
  { id: "problem", number: "01", label: "Problem" },
  { id: "taxonomy", number: "02", label: "Taxonomy" },
  { id: "evaluation", number: "03", label: "Evaluation Design" },
  { id: "matrix", number: "04", label: "Evaluation Matrix" },
  { id: "insight", number: "05", label: "Product Insight" },
  { id: "role", number: "06", label: "Role Boundary" },
  { id: "reflection", number: "07", label: "Reflection" },
];

export function HuiwaCaseStudy({ backLink }: { backLink: CaseStudyBackLink }) {
  return (
    <>
      <div className="container"><CaseStudyHero eyebrow="AIGC PRODUCT EVALUATION" title="绘蛙 AIGC 产品评测与优化" definition="将用户反馈和 badcase 结构化为可评测的问题，并据此沉淀产品优化方向。" role="AI 产品运营实习" tags={["Model Evaluation", "Badcase", "Product Insight"]} backLink={backLink}><HuiwaTaxonomyVisual /></CaseStudyHero><p className="case-public-note"><strong>公开展示说明：</strong>以下分类与评测结构基于实际工作内容脱敏重构，仅用于呈现评测逻辑，不展示内部原始文档或数据。</p></div>
      <CaseStudyLayout toc={toc} next={{ href: "/projects/ai-job-match-analyzer", label: "AI 岗位匹配分析器" }}>
        <CaseSection id="problem" number="01" eyebrow="Problem" title="零散反馈无法直接变成产品判断" intro="用户反馈会混合现象、情绪、场景和期望；单条 badcase 也无法说明一个能力是否值得投入。">
          <div className="abstract-feedback"><span>问题现象</span><span>使用场景</span><span>可复现条件</span><span>影响程度</span><span>能力归因</span></div>
          <p className="reconstruction-caption">基于实际评测工作抽象 · 只呈现问题类别，不改写或模拟用户原话</p>
        </CaseSection>
        <CaseSection id="taxonomy" number="02" eyebrow="From Feedback to Taxonomy" title="先把反馈变成可以讨论的问题类别" tone="soft">
          <FeedbackTaxonomy />
          <p>分类不只是整理文本，而是为后续测试集、评测维度和优化优先级提供共同语言。</p>
          <p className="reconstruction-caption">脱敏重构示意</p>
        </CaseSection>
        <CaseSection id="evaluation" number="03" eyebrow="Evaluation Design" title="让模型表现从“感觉”变成可比较的观察">
          <EvaluationDesignFlow />
          <p>从真实问题类型出发，经过统一维度和测试 case 对比，形成可以继续讨论的产品假设，而不是给生成结果做主观好坏判断。</p>
        </CaseSection>
        <CaseSection id="matrix" number="04" eyebrow="Evaluation Matrix" title="用匿名化矩阵定位问题分布" tone="soft">
          <div className="case-matrix"><HuiwaEvaluationMatrix /></div>
          <p>矩阵将主观体验转为可比较的观察结构，不使用未经核验的精确分数，也不呈现内部正式数据。</p>
        </CaseSection>
        <CaseSection id="insight" number="05" eyebrow="From Evaluation to Product Insight" title="把评测结果翻译成产品优化方向">
          <div className="insight-translation"><div><span>Observation 01</span><strong>重复问题集中在特定使用场景</strong><p>支持讨论测试覆盖与体验关注优先级。</p></div><div><span>Observation 02</span><strong>同类现象可能来自能力、输入或流程</strong><p>为产品与算法讨论提供分层的评测依据。</p></div><div><span>Observation 03</span><strong>局部问题在不同 badcase 中重复出现</strong><p>将问题转换为可以继续验证的体验优化假设。</p></div></div>
        </CaseSection>
        <CaseSection id="role" number="06" eyebrow="Role Boundary" title="明确实习贡献与协作边界" tone="warm">
          <div className="role-responsibility-matrix huiwa-role"><article><span>我直接参与</span><ul><li>分析用户反馈与 badcase</li><li>整理测试 case、评测维度，并参与竞品 / 模型能力比较</li><li>沉淀产品需求与体验优化建议</li></ul></article><article><span>与团队共同完成</span><ul><li>与产品、算法、设计等角色协作推进</li><li>共同讨论产品优先级与路线判断</li><li>依赖团队完成模型、功能实现与持续验证</li></ul></article><article><span>本案例不声称</span><ul><li>独立建立完整绘蛙评测体系</li><li>独立决定产品路线或负责整个产品</li><li>使用缺乏归因证据的增长指标</li></ul></article></div>
        </CaseSection>
        <CaseSection id="reflection" number="07" eyebrow="Reflection" title="评测的价值，是让产品讨论拥有共同证据">
          <blockquote className="reflection-quote">用户反馈不是用来看一眼的；只有被转成可复现、可比较、可继续验证的问题，它才可能真正进入产品决策。</blockquote>
        </CaseSection>
      </CaseStudyLayout>
    </>
  );
}
