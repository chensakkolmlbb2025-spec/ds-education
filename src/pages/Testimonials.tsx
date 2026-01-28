import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-singapore.jpg";
import testimonialStudent from "@/assets/testimonial-student.jpg";
import teamMember1 from "@/assets/team-member1.jpg";
import teamMember2 from "@/assets/team-member2.jpg";

const testimonials = [
  {
    name: "SASAT Chander",
    course: "Foundation – Bachelors of Computing",
    university: "Bath University, Australia",
    image: testimonialStudent,
    quote:
      "I became a student at Pine DS Education. The feedback I received in the UK, is not just for study but also for everyday life. I personally think being in Pine for 2+ years has been so well that currently am in graduate programme studying at a particular university in the UK. I am thankful to DS Education and I hope that other students also get the opportunity to gain the experience and share the knowledge like me.",
  },
  {
    name: "Maria Chen",
    course: "MBA International Business",
    university: "Singapore Management University",
    image: teamMember1,
    quote:
      "DS Education made my dream of studying in Singapore a reality. Their team guided me through every step of the application process, from choosing the right university to visa assistance. I couldn't have done it without their support!",
  },
  {
    name: "David Tan",
    course: "Bachelor of Engineering",
    university: "Nanyang Technological University",
    image: teamMember2,
    quote:
      "The personalized attention I received from DS Education was exceptional. They understood my goals and helped me find the perfect program. Their ongoing support even after enrollment has been invaluable.",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="ds-container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Testimonials
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Hear from our successful students who achieved their educational dreams
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <div className="max-w-4xl mx-auto space-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center bg-muted rounded-lg p-8`}
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="text-muted-foreground italic leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <span className="text-2xl">❝</span>
                    <span className="text-2xl">❞</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.course}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
