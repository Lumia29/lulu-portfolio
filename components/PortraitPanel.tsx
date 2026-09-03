import Image from "next/image";

export function PortraitPanel() {
  return (
    <figure className="portrait-panel surface-card">
      <div className="portrait-figure">
        <Image src="/images/lulu-portrait.jpeg" alt="刘露露的个人照片" fill sizes="(max-width: 1080px) 100vw, 36vw" className="portrait-photo" />
      </div>
      <figcaption>
        <span className="section-eyebrow">Lulu Liu</span>
        <strong>AI Product · AI Strategy · Model Evaluation</strong>
        <p>设计与产品背景，让我持续关注 AI 是否真正进入业务流程，也是否被用户理解和信任。</p>
      </figcaption>
    </figure>
  );
}
