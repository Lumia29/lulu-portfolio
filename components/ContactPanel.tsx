import Image from "next/image";

import { contact } from "@/data/siteContent";

export function ContactPanel() {
  return (
    <div className="contact-layout">
      <article className="contact-card surface-card">
        <span className="section-eyebrow">Open To</span>
        <div className="contact-copy-stack">
          <div className="contact-hero">
            <h3>岗位机会、项目合作，或围绕 AI 产品方向的交流。</h3>
          </div>
          <p className="contact-intro">
            如果你在招 AI 产品或交流 AIGC 产品与 AI 应用相关问题，欢迎联系我。带上岗位信息、项目阶段或你想讨论的问题，
            会更高效~
          </p>
        </div>
        <div className="contact-list">
          <div className="contact-row">
            <span className="contact-row-label">手机</span>
            <strong>{contact.phone}</strong>
          </div>
          <a className="contact-row contact-row-link" href={`mailto:${contact.email}`}>
            <span className="contact-row-label">邮箱</span>
            <strong>{contact.email}</strong>
          </a>
        </div>
        <div className="contact-actions">
          <a href={contact.resumeLink} className="button button-primary" target="_blank" rel="noreferrer">
            查看简历
          </a>
          <a href={`mailto:${contact.email}`} className="button button-secondary">
            发邮件
          </a>
        </div>
      </article>

      <article className="wechat-card surface-card">
        <span className="section-eyebrow">WeChat</span>
        <div className="contact-copy-stack">
          <div className="wechat-head">
            <div className="wechat-badge">
              <strong>扫码添加微信</strong>
              <p>适合快速确认岗位信息、合作意向和后续沟通。</p>
            </div>
          </div>
        </div>
        <div className="wechat-qr-shell">
          <div className="wechat-qr-frame">
            <Image
              src="/images/wechat-qr.jpg"
              alt="刘露露微信二维码，扫码添加微信"
              width={884}
              height={868}
              className="wechat-qr-image"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
