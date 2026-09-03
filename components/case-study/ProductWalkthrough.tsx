"use client";

import { useRef, useState } from "react";

const steps = [
  {
    id: "analysis",
    label: "Analysis",
    title: "从 JD 与 Resume 得到可追溯的岗位分析",
    description: "匹配评分只基于 JD 与 Resume；分析结果继续承接简历建议与投递前准备。",
    src: "/images/projects/analyzer/analysis-overview.png",
    alt: "AI 岗位匹配分析器的岗位分析完整界面",
  },
  {
    id: "grounding",
    label: "Grounding",
    title: "为单道面试题选择真实项目语境",
    description: "Projects 只补充面试回答的事实与复盘材料，不会进入岗位匹配评分。",
    src: "/images/projects/analyzer/grounding-overview.png",
    alt: "AI 岗位匹配分析器的项目 Grounding 界面",
  },
  {
    id: "workspace",
    label: "Workspace",
    title: "把一次分析保存成可持续跟进的岗位记录",
    description: "Jobs 保存分析快照、投递状态与个人备注，让结果在后续求职流程中继续工作。",
    src: "/images/projects/analyzer/jobs-overview.png",
    alt: "AI 岗位匹配分析器的岗位记录界面",
  },
];

export function ProductWalkthrough() {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = steps[active];

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'ArrowRight' ? (active + 1) % steps.length : (active - 1 + steps.length) % steps.length;
    setActive(next);
    document.getElementById(`walkthrough-tab-${steps[next].id}`)?.focus();
  }

  return (
    <div className="product-walkthrough">
      <div className="walkthrough-tabs" role="tablist" aria-label="产品功能演示">
        {steps.map((step, index) => (
          <button key={step.id} id={`walkthrough-tab-${step.id}`} type="button" role="tab" aria-selected={active === index} aria-controls="walkthrough-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={onKeyDown}>
            <span>0{index + 1}</span><strong>{step.label}</strong>
          </button>
        ))}
      </div>
      <div id="walkthrough-panel" role="tabpanel" aria-labelledby={`walkthrough-tab-${current.id}`} className="walkthrough-panel">
        <div className="walkthrough-copy"><span>{current.label}</span><h3>{current.title}</h3><p>{current.description}</p></div>
        <button type="button" className={`walkthrough-image-button is-${current.id}`} onClick={() => dialogRef.current?.showModal()} aria-label={`放大查看：${current.alt}`}>
          <span className="browser-bar" aria-hidden="true"><i /><i /><i /><b>Mock workspace</b></span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.src} alt={current.alt} />
          <span className="zoom-hint">点击放大</span>
        </button>
      </div>
      <dialog ref={dialogRef} className="image-dialog" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <button type="button" onClick={() => dialogRef.current?.close()} aria-label="关闭图片">×</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.src} alt={current.alt} />
      </dialog>
    </div>
  );
}
