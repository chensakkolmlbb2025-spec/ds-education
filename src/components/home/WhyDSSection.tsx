import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhyDSSection = () => {
  return (
    <section className="ds-section bg-background">
      <div className="ds-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="ds-heading mb-6">Why DS Education</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            DS Education was founded by a team of experienced professionals committed to offering
            free consultancy services to students and those abroad. Our team is
            passionate in guiding students every step of their way through their chosen University
            application, admission and student visa process. At DS Education, we are inspired to
            help students to achieve their educational goals one choice at a time.
          </p>
          <Link to="/testimonials">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Our Testimonials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDSSection;
