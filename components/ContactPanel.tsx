import Image from "next/image";

import { contact } from "@/data/siteContent";

export function ContactPanel() {
  return (
    <div className="contact-layout">
      <article className="contact-card surface-card">
        <span className="section-eyebrow">Contact</span>
        <div className="contact-hero">
          <div>
            <span className="contact-kicker">Open To</span>
            <h3>岗位机会、项目合作，或者认真聊聊 AI 产品。</h3>
          </div>
        </div>
        <p className="contact-intro">
          如果你在招 AI 产品、策略产品，或者想聊复杂系统怎么做成更顺手的产品，可以直接联系我。信息带上岗位、
          项目阶段或你想聊的问题，会更高效。
        </p>
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
        <div className="wechat-head">
          <div className="wechat-badge">
            <strong>扫码添加微信</strong>
            <p>优先用于快速确认合作、岗位信息和进一步沟通。</p>
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
        <div className="wechat-meta">
          <span>微信号</span>
          <strong>{contact.wechat}</strong>
        </div>
      </article>
    </div>
  );
}
