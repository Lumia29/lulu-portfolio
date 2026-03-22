import Image from "next/image";
import Link from "next/link";

import { contact } from "@/data/siteContent";

export function ContactPanel() {
  return (
    <div className="contact-layout">
      <article className="contact-card surface-card">
        <span className="section-eyebrow">Let&apos;s Talk</span>
        <h3>如果你正在招 AI 产品、策略产品或相关岗位，或者想交流转型路径，可以联系我。</h3>
        <p>项目合作、岗位机会和经验交流都可以，信息清楚一点会更高效。</p>
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
        <div className="contact-actions">
          <a href={contact.resumeLink} className="button button-primary" target="_blank" rel="noreferrer">
            查看简历
          </a>
          <Link href={contact.github} className="button button-secondary" target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </div>
      </article>

      <article className="wechat-card surface-card">
        <span className="section-eyebrow">WeChat</span>
        <div className="wechat-badge">
          <strong>扫码添加微信</strong>
          <p>适合聊岗位机会、项目合作，或者交流 AI 产品和转型路径。</p>
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
        <div className="wechat-note">
          <p>添加时备注岗位、项目或来意，会更方便我快速回复。你如果更习惯异步沟通，也可以直接发邮件。</p>
        </div>
      </article>
    </div>
  );
}
