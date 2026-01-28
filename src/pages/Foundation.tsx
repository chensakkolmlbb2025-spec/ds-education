import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-singapore.jpg";
import { Building, Heart, Users } from "lucide-react";

const Foundation = () => {
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
            DS Foundation
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Empowering students from less developed areas to achieve their educational dreams
          </p>
        </div>
      </section>

      {/* About Foundation */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="ds-heading text-center mb-8">About DS Foundation</h2>
            <p className="text-muted-foreground text-center leading-relaxed mb-12">
              DS Foundation is the foundation which is formed by DS Overseas Education Consultant 
              in order to provide the opportunities to less fortune students from less developed 
              areas in Cambodia to continue studying their degree. We believe that education is 
              the key to breaking the cycle of poverty and creating a brighter future.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">
                  We care deeply about every student's future and well-being
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Opportunity</h3>
                <p className="text-sm text-muted-foreground">
                  Creating pathways to quality education for underprivileged students
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a network of support for students and families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="ds-section bg-muted">
        <div className="ds-container">
          <h2 className="ds-heading text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg text-center shadow-card">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Students Supported</p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center shadow-card">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Partner Universities</p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center shadow-card">
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Foundation;
