import Image from "next/image";

export function PortraitPanel() {
  return (
    <article className="portrait-panel surface-card">
      <span className="section-eyebrow">Portrait</span>
      <div className="portrait-figure">
        <Image
          src="/images/lulu-portrait.jpeg"
          alt="刘露露的个人照片"
          fill
          sizes="(max-width: 1080px) 100vw, 28vw"
          className="portrait-photo"
        />
        <div className="portrait-badge">
          <span>Lulu Liu</span>
          <strong>AI Product / Risk Governance / AIGC</strong>
        </div>
      </div>
      <div className="portrait-facts">
        <div className="portrait-fact">
          <span>经历</span>
          <strong>字节跳动 · 阿里淘天 · 长亭科技</strong>
        </div>
        <div className="portrait-fact">
          <span>背景</span>
          <strong>工业设计 × 产品设计</strong>
        </div>
      </div>
      <p>
        我对 AI 的兴趣，不只是模型能力本身，而是它能不能真的进入工作流、进入业务，也进入用户体验。
      </p>
    </article>
  );
}
