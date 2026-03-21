export function PortraitPanel() {
  return (
    <article className="portrait-panel surface-card">
      <span className="section-eyebrow">Photo Area</span>
      <div className="portrait-figure" aria-hidden="true">
        <div className="portrait-aura" />
        <div className="portrait-head" />
        <div className="portrait-body" />
        <div className="portrait-badge">Replace With Your Photo</div>
      </div>
      <p>
        这里预留个人照片区域。当前用抽象人物卡代替，后续可以直接换成你的正式照片或更具个人风格的形象图。
      </p>
    </article>
  );
}
