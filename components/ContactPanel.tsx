import Image from "next/image";

import { contact, resumeIsPublic } from "@/data/siteContent";

function WechatCard({ mobileDisclosure = false }: { mobileDisclosure?: boolean }) {
  const qr = (
    <div className="wechat-qr-frame">
      <Image src={contact.wechatQr} alt="刘露露微信二维码，扫码添加微信" width={884} height={868} className="wechat-qr-image" />
    </div>
  );

  if (mobileDisclosure) {
    return (
      <details className="wechat-mobile-disclosure">
        <summary>微信联系 <span aria-hidden="true">＋</span></summary>
        <p>扫码添加微信，适合快速确认岗位信息与后续沟通。</p>
        {qr}
      </details>
    );
  }

  return (
    <div className="wechat-inline">
      <div><span className="section-eyebrow">WeChat</span><strong>扫码添加微信</strong><p>适合快速确认岗位信息与后续沟通。</p></div>
      {qr}
    </div>
  );
}

export function ContactPanel({ page = false }: { page?: boolean }) {
  return (
    <div className={`contact-layout ${page ? "is-page" : ""}`}>
      <article className="contact-card surface-card">
        <span className="section-eyebrow">Open to conversations</span>
        <h3>欢迎直接聊聊具体岗位、项目或产品问题。</h3>
        <p>岗位机会、项目合作，或围绕 AI 产品、AI 策略与模型评测的交流都可以。</p>
        <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`} className="button button-primary">发邮件</a>
          {resumeIsPublic ? <a href={contact.resumeLink} className="button button-secondary" target="_blank" rel="noreferrer">查看简历</a> : null}
        </div>
        <WechatCard mobileDisclosure />
      </article>
      <aside className="wechat-card surface-card"><WechatCard /></aside>
    </div>
  );
}
