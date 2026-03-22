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
          <div className="wechat-circle" />
          <div className="wechat-copy">
            <strong>{contact.wechat}</strong>
            <span>目前先放微信号，后续可以再补二维码版本。</span>
          </div>
        </div>
        <div className="wechat-note">
          <p>如果你更习惯异步沟通，也可以直接发邮件。这个站点会继续作为我的长期作品集持续迭代。</p>
        </div>
      </article>
    </div>
  );
}
