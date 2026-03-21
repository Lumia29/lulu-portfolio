import Link from "next/link";

import { siteMeta } from "@/data/siteContent";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">MODEL OPS × AI PRODUCT</span>
          <h1>嗨，我是刘露露 👋</h1>
          <p>{siteMeta.title}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              看看我的项目
            </Link>
            <Link href="/contact" className="button button-secondary">
              聊聊合作
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card hero-card-main">
            <p className="hero-card-label">当前角色</p>
            <h3>模型运营 + AI 产品探索者</h3>
            <p>从风险治理到产品实验，我更关心 AI 如何真正嵌进业务与工作流。</p>
          </div>
          <div className="hero-card hero-card-accent">
            <p className="hero-card-label">关注方向</p>
            <ul className="hero-list">
              <li>AI 审核与治理</li>
              <li>AIGC 产品体验</li>
              <li>Agent 工作流设计</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
