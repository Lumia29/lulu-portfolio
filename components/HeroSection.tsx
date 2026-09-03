import Image from "next/image";

import { contact, resumeIsPublic } from "@/data/siteContent";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">AI PRODUCT · AI STRATEGY · MODEL EVALUATION</span>
          <h1>把复杂业务问题，转化为可验证、可落地的 AI 产品与策略。</h1>
          <p className="hero-intro">现任字节跳动大模型机审运营，实践覆盖 AI 风险策略、Agent / Workflow、AIGC 产品评测与独立 AI 产品构建。</p>
          <div className="identity-tags" aria-label="身份标签">
            <span>大模型机审运营</span>
            <span>AI 产品与策略实践</span>
            <span>独立 AI 产品构建</span>
          </div>
          <blockquote className="hero-method">先定义问题和判断标准，再决定该交给模型、规则还是流程。</blockquote>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">查看代表项目</a>
            {resumeIsPublic ? <a href={contact.resumeLink} className="button button-secondary" target="_blank" rel="noreferrer">查看简历</a> : null}
          </div>
        </div>
        <div className="hero-portrait" aria-label="刘露露个人照片">
          <div className="hero-photo-frame">
            <Image src="/images/lulu-portrait.jpeg" alt="刘露露的个人照片" fill priority sizes="(max-width: 760px) 100vw, 38vw" className="hero-photo" />
          </div>
          <div className="hero-portrait-note">
            <span>Current focus</span>
            <strong>AI Product · AI Strategy</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
