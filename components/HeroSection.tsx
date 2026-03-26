import Image from "next/image";

const credentials = [
  {
    label: "当前角色",
    value: "负责抖音广告安全的多模态风险治理，推动复杂风险识别、Agent 自动化处置和策略落地。",
  },
  {
    label: "关注方向",
    value: "聚焦 AIGC 产品、AI 应用和策略型产品，连接用户问题、业务流程与 AI 能力。",
  },
];

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-head">
          <span className="hero-kicker">AI PRODUCT · RISK SYSTEMS · AIGC</span>
          <h1>你好，我是刘露露 👋</h1>
        </div>

        <div className="hero-summary">
          <p className="hero-intro">
            我目前在字节做模型运营，过往在阿里做过 AIGC 产品评测优化和增长相关工作。希望把这些经验进一步用在 AI 产品方向，解决真实的用户与业务问题。
          </p>
          <div className="hero-credential-list">
            {credentials.map((item) => (
              <div key={item.label} className="hero-credential-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              看看我的项目
            </a>
            <a href="#contact" className="button button-secondary">
              联系我
            </a>
          </div>
        </div>

        <div className="hero-artboard">
          <div className="hero-stage">
            <div className="hero-photo-frame">
              <Image
                src="/images/lulu-portrait.jpeg"
                alt="刘露露在滕王阁前的照片"
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 34vw"
                className="hero-photo"
              />
              <div className="hero-photo-note">
                <span>Portrait</span>
                <strong>持续把复杂系统经验沉淀成更顺手的 AI 产品方法。</strong>
              </div>
            </div>
            <div className="hero-stage-caption">
              <span>我的方法</span>
              <p>先定义问题，再决定该交给模型、规则还是流程。</p>
            </div>
          </div>
        </div>

        <div className="hero-mini-stats">
          <div>
            <strong>99.13%</strong>
            <span>风险识别准确率</span>
          </div>
          <div>
            <strong>25w+</strong>
            <span>AIGC 官网访问</span>
          </div>
          <div>
            <strong>1-2h</strong>
            <span>OpenClaw 每日节省</span>
          </div>
        </div>
      </div>
    </section>
  );
}
