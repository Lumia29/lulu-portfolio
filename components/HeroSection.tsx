import Link from "next/link";

import { siteMeta } from "@/data/siteContent";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">MODEL OPS TO AI PRODUCT EXPLORER</span>
          <h1>
            嗨，我是刘露露 <span>👋</span>
            <br />
            正在探索 AI 产品
          </h1>
          <p>{siteMeta.description}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              看看我的项目
            </Link>
            <Link href="/contact" className="button button-secondary">
              聊聊合作
            </Link>
          </div>
          <div className="hero-mini-stats">
            <div>
              <strong>99.13%</strong>
              <span>风险识别准确率</span>
            </div>
            <div>
              <strong>25w+</strong>
              <span>AIGC 官网访问</span>
            </div>
            <div>
              <strong>1-2h</strong>
              <span>OpenClaw 每日节省</span>
            </div>
          </div>
        </div>

        <div className="hero-artboard">
          <div className="hero-stage">
            <div className="hero-glow hero-glow-a" />
            <div className="hero-glow hero-glow-b" />
            <div className="hero-card hero-note top-left">
              <span>Risk Governance</span>
              <strong>ASR + OCR + Semantic</strong>
            </div>
            <div className="hero-card hero-note top-right">
              <span>Product Sense</span>
              <strong>好看，也要好用</strong>
            </div>
            <div className="hero-card hero-main-card">
              <div className="hero-mesh">
                <span className="dot a" />
                <span className="dot b" />
                <span className="dot c" />
              </div>
              <h3>把复杂 AI 工作做成清晰、靠谱、能落地的方案</h3>
              <p>让模型能力真正接上业务和体验。</p>
            </div>
            <div className="hero-card hero-note bottom-left">
              <span>OpenClaw</span>
              <strong>Workflow in Daily Life</strong>
            </div>
            <div className="hero-card hero-note bottom-right">
              <span>Design Trained</span>
              <strong>工业设计 × 产品设计</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
