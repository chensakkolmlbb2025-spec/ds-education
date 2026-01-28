import londonImage from "@/assets/london-bigben.jpg";
import teamGroupImage from "@/assets/team-group.jpg";

const AboutSection = () => {
  return (
    <section className="ds-section bg-muted">
      <div className="ds-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={londonImage}
                alt="Big Ben London"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            {/* Team overlay image */}
            <div className="absolute bottom-0 right-0 w-2/3 translate-x-4 translate-y-4 z-20">
              <img
                src={teamGroupImage}
                alt="DS Education Team"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8 pt-8 lg:pt-0">
            <h2 className="ds-heading mb-6">About Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              DS Education has been formed in 2022 by an expert
              in education who provides education opportunities
              supporting overseas education service to UK,
              Malta, Singapore, USA among others. We are a
              reputed based company and is located in both
              Jakarta and Cambodia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide accessible education consultation services
              to students looking to pursue their academic dreams abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
