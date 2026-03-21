import { contact } from "@/data/siteContent";

export function ContactPanel() {
  return (
    <div className="contact-layout">
      <article className="contact-card surface-card">
        <span className="section-eyebrow">Let&apos;s Talk</span>
        <h3>想聊 AI 产品的可能性，或者单纯想交个朋友？</h3>
        <p>
          对我的经历、项目或转型路径感兴趣，都欢迎联系我。你也可以把这里当成一个轻松的 coffee
          chat 入口。
        </p>
        <div className="contact-list">
          <div className="contact-row">
            <span>微信</span>
            <strong>{contact.wechat}</strong>
          </div>
          <div className="contact-row">
            <span>邮箱</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <div className="hero-actions">
          <a href={contact.resumeLink} className="button button-primary">
            下载我的简历 PDF
          </a>
          <a href={contact.coffeeLink} className="button button-secondary">
            预约一个 15 分钟的咖啡聊
          </a>
        </div>
      </article>

      <article className="wechat-card surface-card">
        <span className="section-eyebrow">WeChat</span>
        <div className="wechat-badge">
          <div className="wechat-circle" />
          <div className="wechat-copy">
            <strong>{contact.wechat}</strong>
            <span>现在先用微信号直达，后续可替换成二维码卡片。</span>
          </div>
        </div>
        <div className="wechat-note">
          <p>如果你更习惯异步沟通，也可以直接发邮件。我会把这个站点持续当成个人实验场更新。</p>
        </div>
      </article>
    </div>
  );
}
