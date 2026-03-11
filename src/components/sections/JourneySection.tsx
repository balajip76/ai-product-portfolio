import { journeyStages } from '@/data/journey-data';
import JourneyCard from '@/components/ui/JourneyCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function JourneySection() {
  return (
    <section id="journey" className="bg-mint-white py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <SectionHeading
            overline="The Story"
            title="12 Months of Learning"
            subtitle="A deliberate journey through AI-native product development — from naive curiosity to structured mastery."
            center
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-px bg-steel-teal/20" />

          {journeyStages.map((stage, i) => (
            <JourneyCard key={stage.id} stage={stage} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
