import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="联系我"
          description="如果你想讨论合作机会、AI 产品想法，或者只是单纯想交流实践经验，都可以直接联系。"
        />
        <ContactPanel />
      </div>
    </section>
  );
}
