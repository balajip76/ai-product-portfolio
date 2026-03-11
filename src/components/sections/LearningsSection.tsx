import { insights } from '@/data/learnings-data';
import InsightBlock from '@/components/ui/InsightBlock';
import SectionHeading from '@/components/ui/SectionHeading';

export default function LearningsSection() {
  return (
    <section id="learnings" className="bg-steel-teal py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14 text-center">
          <SectionHeading
            overline="Key Takeaways"
            title="What 12 Months Taught Me"
            subtitle="Hard-won insights from shipping with AI every week."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <InsightBlock key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  );
}
