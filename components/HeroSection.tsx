import Image from "next/image";
import Link from "next/link";

const credentials = [
  {
    label: "当前工作",
    value: "在字节做广告安全治理与模型运营，持续处理复杂风险识别和自动化落地。",
  },
  {
    label: "过往积累",
    value: "在阿里做 AIGC 产品评测，也在增长和用户运营场景里补过业务理解与需求判断。",
  },
  {
    label: "转向目标",
    value: "正在转向 AI 产品方向，希望把体验判断、业务问题和 AI 能力接成更完整的产品方案。",
  },
];

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">AI PRODUCT · RISK SYSTEMS · AIGC</span>
          <h1>嗨，我是刘露露👋🏻</h1>
          <p className="hero-intro">
            我目前在字节做模型运营，正转向 AI 产品方向。设计本硕背景让我对体验更敏感，阿里和字节的经历让我更关注效果、效率，以及一件事到底能不能真正落地。
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
            <Link href="/projects" className="button button-primary">
              查看项目
            </Link>
            <Link href="/contact" className="button button-secondary">
              联系我
            </Link>
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
                <strong>还在成长和探索里，也在认真把 AI 做成更顺手的产品和系统</strong>
              </div>
            </div>
            <div className="hero-stage-caption">
              <span>我的方法</span>
              <p>先定义问题，再决定该交给模型、规则还是流程。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
