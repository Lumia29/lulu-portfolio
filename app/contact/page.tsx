import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="聊聊机会与合作"
          description="如果你觉得我的经历和你正在做的方向有关，欢迎联系我。岗位机会、项目合作或交流讨论都可以。"
        />
        <ContactPanel />
      </div>
    </section>
  );
}
