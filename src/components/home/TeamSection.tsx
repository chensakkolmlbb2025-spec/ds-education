import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import teamDesmond from "@/assets/team-desmond.jpg";
import teamVeasna from "@/assets/team-veasna.jpg";
import teamMember1 from "@/assets/team-member1.jpg";
import teamMember2 from "@/assets/team-member2.jpg";

const mainTeamMember = {
  name: "Desmond Hong",
  role: "Founder & CEO",
  image: teamDesmond,
  socials: ["facebook", "instagram", "twitter", "linkedin"],
};

const teamMembers = [
  {
    name: "Nhean Veasna",
    role: "Sales Officer & Recruiter",
    image: teamVeasna,
  },
  {
    name: "Jern May Ui",
    role: "Sales Officer & Recruiter",
    image: teamMember1,
  },
  {
    name: "Sarah Chhunlay",
    role: "Consultant",
    image: teamMember2,
  },
];

const TeamSection = () => {
  return (
    <section className="ds-section bg-background">
      <div className="ds-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="ds-heading mb-4">Meet the Team</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-accent font-medium italic">
            Dedication. Expertise. Passion.
          </p>
        </div>

        {/* Main Team Member */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative mb-6">
            <img
              src={mainTeamMember.image}
              alt={mainTeamMember.name}
              className="team-avatar w-48 h-48"
            />
          </div>
          <h3 className="text-xl font-bold text-primary mb-1">
            {mainTeamMember.name}
          </h3>
          {/* Social Icons */}
          <div className="flex gap-2 mt-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Facebook className="h-4 w-4 text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-4 w-4 text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Twitter className="h-4 w-4 text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Linkedin className="h-4 w-4 text-primary-foreground" />
            </a>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="team-avatar w-32 h-32 mb-4"
              />
              <h4 className="font-semibold text-primary">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
