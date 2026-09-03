import Link from "next/link";

import { CapabilityEvidence } from "@/components/CapabilityEvidence";
import { ContactPanel } from "@/components/ContactPanel";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { about, careerExperiences, featuredProjects } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-block capability-section">
        <div className="container">
          <SectionHeading eyebrow="HOW I WORK" title="不是技能清单，而是一套反复被验证的方法" description="从个人 AI 产品到真实企业场景，我持续用同一套方式拆解问题、划定边界、建立评测并重构流程。" />
          <CapabilityEvidence />
        </div>
      </section>

      <section id="projects" className="section-block section-anchor">
        <div className="container">
          <SectionHeading eyebrow="FEATURED PROJECTS" title="用三个项目，证明完整的 AI 产品与策略能力" description="首页负责建立认知，Case Study 负责展开问题、判断、取舍与验证。" action={<Link href="/projects" className="text-link">查看全部项目 ↗</Link>} />
          <div className="featured-project-grid">
            {featuredProjects.map((project) => <FeaturedProjectCard key={project.slug} project={project} source="home" />)}
          </div>
        </div>
      </section>

      <section className="section-block about-preview-section">
        <div className="container about-preview-grid">
          <div>
            <SectionHeading eyebrow="ABOUT" title="一条从体验判断到 AI 产品化实践的连续路径" />
            <p className="about-preview-lead">{about.intro}</p>
            <p>{about.story[1]}</p>
            <Link href="/about" className="text-link">查看完整经历 ↗</Link>
          </div>
          <div className="career-rail">
            {careerExperiences.slice(0, 3).map((item) => (
              <article key={item.company}><span>{item.period}</span><h3>{item.company} · {item.role}</h3><p>{item.detail}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block section-last section-anchor">
        <div className="container">
          <SectionHeading eyebrow="CONTACT" title="聊聊岗位、项目与 AI 产品问题" />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
