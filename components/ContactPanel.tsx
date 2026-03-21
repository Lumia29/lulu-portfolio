import Image from "next/image";

import { contact } from "@/data/siteContent";

export function ContactPanel() {
  return (
    <div className="contact-layout">
      <article className="surface-card contact-card">
        <span className="section-eyebrow">Direct</span>
        <h3>联系我</h3>
        <p>适合聊 AI 风险治理、AIGC 产品、Agent 工作流、增长协作和新的产品机会。</p>
        <div className="contact-list">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>微信：{contact.wechatHint}</p>
        </div>
        <div className="hero-actions">
          <a href={contact.resumeLink} className="button button-primary">
            下载简历 PDF
          </a>
          <a href={contact.coffeeLink} className="button button-secondary">
            预约咖啡聊
          </a>
        </div>
      </article>
      <article className="surface-card qr-card">
        <div className="qr-frame">
          <Image
            src="/wechat-placeholder.svg"
            alt="微信二维码占位图"
            width={260}
            height={260}
            priority
          />
        </div>
        <p className="qr-caption">扫码添加微信，后续可替换为你的真实二维码。</p>
      </article>
    </div>
  );
}
