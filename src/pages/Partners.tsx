import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-singapore.jpg";

// University partner logos (placeholder names)
const universityPartners = [
  { name: "PSB Academy", row: 1 },
  { name: "KAPLAN", row: 1 },
  { name: "Singapore Institute of Management", row: 1 },
  { name: "Raffles College of Higher Education", row: 2 },
  { name: "AMITY Global Institute", row: 2 },
  { name: "Curtin Singapore", row: 2 },
  { name: "Nanyang Institute of Management", row: 3 },
  { name: "MDIS", row: 3 },
  { name: "ERC Institute", row: 3 },
  { name: "One World International School", row: 4 },
  { name: "Insworld Institute", row: 4 },
  { name: "Academies Australasia College", row: 4 },
  { name: "Marketing Institute of Singapore", row: 5 },
  { name: "NAFA", row: 5 },
];

const infoCards = [
  {
    title: "Education",
    content:
      "Singapore is a prominent education global hub in Asia Singapore and is offering a well-rounded experience encompassing both academic rigor and cultural immersion. Courses are primarily conducted in English, making it accessible for a wide range of international students.",
    color: "text-primary",
  },
  {
    title: "Visa",
    content:
      "International students studying in Singapore must obtain an In-Principle Approval (IPA) letter from the Immigration & Checkpoints Authority (ICA) before entering Singapore to pursue their studies.",
    color: "text-accent",
  },
  {
    title: "Accommodation",
    content:
      "There are a wide range of apartment types available, including HDB flats, condominiums, serviced apartments, and studio units.Twin-sharing room in HDB flats typically cost between S$700 to S$1,100 per month, while a single condo room ranges from S$1,200 to S$2,000 per month.",
    color: "text-ds-orange",
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-16 md:h-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      </section>

      {/* Singapore Flag Button */}
      <section className="py-16 bg-background">
        <div className="ds-container">
          <div className="flex justify-center mb-16">
            <button className="flex items-center gap-3 bg-destructive text-destructive-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              <span className="text-2xl">🇸🇬</span>
              <span className="font-medium">Singapore</span>
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {infoCards.map((card, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className={`text-lg font-bold mb-4 ${card.color}`}>{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12 underline underline-offset-8 decoration-2">
            Our University Partners
          </h2>

          {/* Partners Grid */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary">psb</div>
                <div className="text-xs text-primary tracking-wider">ACADEMY</div>
              </div>
              <div className="text-2xl font-bold text-primary tracking-widest">KAPLAN</div>
              <div className="flex items-center gap-2">
                <div className="text-accent font-bold text-2xl">SIM</div>
                <div className="text-xs text-muted-foreground leading-tight">
                  Singapore<br />Institute of<br />Management
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              <div className="flex items-center gap-2">
                <div className="text-3xl">🏛️</div>
                <span className="text-destructive font-semibold">Raffles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">A</div>
                <span className="font-bold text-primary">AMITY</span>
              </div>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <span className="font-medium">Curtin Singapore</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              <div className="flex flex-col items-center">
                <div className="text-primary font-bold">NANYANG</div>
                <div className="text-xs text-muted-foreground">INSTITUTE OF MANAGEMENT</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-3xl">🏅</div>
                <div>
                  <span className="text-destructive font-bold text-2xl">MDIS</span>
                  <div className="text-xs text-muted-foreground">Management Development<br />Institute of Singapore</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold text-2xl">ERC</span>
                <span className="text-xs text-muted-foreground">INSTITUTE</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              <div className="flex items-center gap-2">
                <div className="text-primary text-3xl">🌍</div>
                <div className="text-primary font-bold text-sm leading-tight">
                  ONE WORLD<br />INTERNATIONAL<br />SCHOOL
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-3xl">🦁</div>
                <div>
                  <span className="font-bold text-primary">Insworld</span>
                  <div className="text-xs text-muted-foreground">INSTITUTE</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-3xl text-accent">🎓</div>
                <div className="text-destructive font-bold text-sm leading-tight">
                  ACADEMIES AUSTRALASIA<br />COLLEGE
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-2 gap-8 items-center justify-items-center max-w-xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold text-3xl">mis</span>
                <span className="text-xs text-muted-foreground">Marketing Institute<br />of Singapore</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold text-3xl">NAFA</span>
                <span className="text-xs text-muted-foreground">Nanyang Academy of Fine Arts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
