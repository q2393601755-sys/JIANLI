"use client";

import { useLanguage } from "@/lib/i18n/context";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tag from "@/components/ui/Tag";
import {
  creationPipeline,
  strategyPipeline,
  toolGroups,
} from "@/lib/data/workflow";
import type { WorkflowStep, BilingualText } from "@/lib/types";

interface ToolGroup {
  id: string;
  title: BilingualText;
  tools: string[];
}

function PipelineColumn({
  label,
  steps,
}: {
  label: string;
  steps: WorkflowStep[];
}) {
  const { bt } = useLanguage();

  return (
    <div className="flex-1">
      <h3 className="text-snow text-lg mb-6 text-center tracking-wide">
        {label}
      </h3>
      <div>
        {steps.map((step, i) => (
          <div key={step.id} className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-glow/40 bg-ink-800 flex items-center justify-center text-glow text-sm shrink-0">
                {step.order}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-glow/20 my-2 min-h-[2rem]" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <h4 className="text-snow text-sm mb-1">{bt(step.title)}</h4>
              {step.description && (
                <p className="text-silver text-sm leading-relaxed">
                  {bt(step.description)}
                </p>
              )}
              {step.tools && step.tools.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {step.tools.map((tool) => (
                    <Tag key={tool} variant="dim">
                      {tool}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkflowPage() {
  const { t, bt } = useLanguage();

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
      <SectionTitle title={{ zh: "我如何使用AI", en: "How I Work With AI" }} />

      {/* Two Pipelines */}
      <ScrollReveal>
        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-16">
          <PipelineColumn
            label={t("workflow.creation")}
            steps={creationPipeline}
          />
          <PipelineColumn
            label={t("workflow.strategy")}
            steps={strategyPipeline}
          />
        </div>
      </ScrollReveal>

      {/* Tools */}
      <ScrollReveal>
        <section className="mt-20 md:mt-32">
          <h2 className="text-snow-dark text-sm uppercase tracking-wider mb-6">
            {t("workflow.tools")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(toolGroups as ToolGroup[]).map((group) => (
              <div key={group.id}>
                <p className="text-silver text-xs mb-2">{bt(group.title)}</p>
                <div className="flex flex-wrap gap-1">
                  {group.tools.map((tool) => (
                    <Tag key={tool} variant="dim">
                      {tool}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* AI Agent Usage */}
      <ScrollReveal>
        <section className="mt-16 border border-glow/20 bg-ink-800 p-6 md:p-8 max-w-3xl">
          <h2 className="text-glow text-sm uppercase tracking-wider mb-3">
            {t("workflow.agent")}
          </h2>
          <p className="text-silver text-sm leading-relaxed">
            {t("workflow.agentDesc")}
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
