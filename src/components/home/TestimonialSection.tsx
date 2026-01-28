import testimonialStudent from "@/assets/testimonial-student.jpg";

const TestimonialSection = () => {
  return (
    <section className="ds-section bg-background">
      <div className="ds-container">
        <div className="max-w-4xl mx-auto">
          {/* Quote marks */}
          <div className="text-center mb-8">
            <span className="text-6xl md:text-8xl text-accent font-serif leading-none">
              "
            </span>
          </div>

          {/* Testimonial Label */}
          <p className="text-center text-primary font-semibold tracking-widest mb-8">
            TESTIMONIAL
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={testimonialStudent}
                alt="Student testimonial"
                className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* Quote */}
            <div>
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "I became a student at Pine DS Education. The feedback I received 
                in the UK, is not just for study but also for everyday life. I personally 
                think being in Pine for 2+ years has been so well that 
                currently am in graduate programme studying at a particular 
                university in the UK. I am thankful to DS Education and 
                I hope that other students also get the opportunity to 
                gain the experience and share the knowledge like me."
              </p>
              <div className="flex items-center gap-2 text-accent">
                <span className="text-2xl">❝</span>
                <span className="text-2xl">❞</span>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-primary">SASAT Chander</p>
                <p className="text-sm text-muted-foreground">
                  Foundation – Bachelors of Computing<br />
                  Bath University, Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
