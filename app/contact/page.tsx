import type { Metadata } from "next";

import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "联系 | 刘露露", description: "联系刘露露，交流 AI 产品、AI 策略、模型评测或岗位机会。" };

export default function ContactPage() {
  return <section className="page-section contact-page"><div className="container"><SectionHeading eyebrow="CONTACT" title="聊聊岗位、项目与 AI 产品问题" description="如果你正在招聘 AI 产品、AI 策略或 AIGC 产品方向，或想交流具体的 AI 产品问题，欢迎联系我。" /><ContactPanel page /></div></section>;
}
