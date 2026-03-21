import { SectionHeading } from "@/components/SectionHeading";
import { blogTopics } from "@/data/siteContent";

export default function BlogPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title="Coming Soon"
          description="博客页先作为占位入口保留。等文章准备好之后，再把这里升级成完整内容区。"
        />
        <article className="surface-card prose-card">
          <h3>规划中的主题</h3>
          <ul className="bullet-list">
            {blogTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
