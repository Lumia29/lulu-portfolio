import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="联系我"
          description="对我的项目、经历或者 AI 产品转型路径感兴趣，都可以来聊。这里保持轻松，但信息足够完整。"
        />
        <ContactPanel />
      </div>
    </section>
  );
}
