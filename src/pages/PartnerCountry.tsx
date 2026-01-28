import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-singapore.jpg";

interface CountryData {
  name: string;
  flag: string;
  education: string;
  visa: string;
  accommodation: string;
  universities: { name: string; logo?: string }[];
}

const countryData: Record<string, CountryData> = {
  singapore: {
    name: "Singapore",
    flag: "🇸🇬",
    education:
      "Singapore is a prominent education global hub in Asia and is offering a well-rounded experience encompassing both academic rigor and cultural immersion. Courses are primarily conducted in English, making it accessible for a wide range of international students.",
    visa:
      "International students studying in Singapore must obtain an In-Principle Approval (IPA) letter from the Immigration & Checkpoints Authority (ICA) before entering Singapore to pursue their studies.",
    accommodation:
      "There are a wide range of apartment types available, including HDB flats, condominiums, serviced apartments, and studio units. Twin-sharing room in HDB flats typically cost between S$700 to S$1,100 per month, while a single condo room ranges from S$1,200 to S$2,000 per month.",
    universities: [
      { name: "PSB Academy" },
      { name: "KAPLAN" },
      { name: "Singapore Institute of Management" },
      { name: "Raffles College of Higher Education" },
      { name: "AMITY Global Institute" },
      { name: "Curtin Singapore" },
      { name: "Nanyang Institute of Management" },
      { name: "MDIS" },
      { name: "ERC Institute" },
      { name: "One World International School" },
      { name: "Insworld Institute" },
      { name: "Academies Australasia College" },
      { name: "Marketing Institute of Singapore" },
      { name: "NAFA" },
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    education:
      "The United Kingdom is home to some of the world's most prestigious universities, including Oxford and Cambridge. UK degrees are recognized globally and offer excellent career prospects. The education system emphasizes critical thinking, research, and independent study.",
    visa:
      "International students need a Student Visa (formerly Tier 4) to study in the UK. You'll need a Confirmation of Acceptance for Studies (CAS) from your university, proof of funds, and English language proficiency.",
    accommodation:
      "Options include university halls of residence, private student accommodation, and shared housing. University accommodation costs range from £100-£250 per week, while private rentals vary by city, with London being the most expensive.",
    universities: [
      { name: "University of Oxford" },
      { name: "University of Cambridge" },
      { name: "Imperial College London" },
      { name: "University College London (UCL)" },
      { name: "London School of Economics" },
      { name: "University of Edinburgh" },
      { name: "King's College London" },
      { name: "University of Manchester" },
      { name: "University of Bristol" },
      { name: "University of Warwick" },
    ],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    education:
      "Australia offers world-class education with 7 universities in the global top 100. Known for innovative research and practical learning approaches. The country provides a multicultural environment with a high quality of life.",
    visa:
      "Students need a Student Visa (subclass 500). Requirements include enrollment confirmation (CoE), Genuine Temporary Entrant statement, health insurance (OSHC), and proof of financial capacity.",
    accommodation:
      "Options include on-campus housing, homestays, and private rentals. Expect to pay AUD 150-350 per week for shared accommodation, with major cities like Sydney and Melbourne being more expensive.",
    universities: [
      { name: "University of Melbourne" },
      { name: "University of Sydney" },
      { name: "University of Queensland" },
      { name: "Monash University" },
      { name: "Australian National University" },
      { name: "University of New South Wales" },
      { name: "University of Western Australia" },
      { name: "University of Adelaide" },
      { name: "Queensland University of Technology" },
      { name: "Curtin University" },
    ],
  },
  "south-korea": {
    name: "South Korea",
    flag: "🇰🇷",
    education:
      "South Korea is rapidly becoming a popular study destination with excellent universities and a unique blend of tradition and modernity. Many programs are taught in English, and the country offers cutting-edge technology and research facilities.",
    visa:
      "You need a D-2 Student Visa for degree programs. Required documents include admission letter, financial proof, health certificate, and valid passport. The visa allows part-time work during studies.",
    accommodation:
      "University dormitories are affordable (₩300,000-600,000/month). Off-campus options include goshiwons (small rooms), one-room apartments, and shared housing. Seoul is more expensive than other cities.",
    universities: [
      { name: "Seoul National University" },
      { name: "KAIST" },
      { name: "Yonsei University" },
      { name: "Korea University" },
      { name: "POSTECH" },
      { name: "Sungkyunkwan University" },
      { name: "Hanyang University" },
      { name: "Ewha Womans University" },
      { name: "Sogang University" },
      { name: "Kyung Hee University" },
    ],
  },
  usa: {
    name: "USA",
    flag: "🇺🇸",
    education:
      "The United States hosts the largest number of international students worldwide. American universities lead in research and innovation, offering flexible curricula and extensive networking opportunities. The diverse campus life enriches the educational experience.",
    visa:
      "F-1 Student Visa is required for academic studies. You need an I-20 form from your university, SEVIS fee payment, financial proof, and successful visa interview at the US embassy.",
    accommodation:
      "On-campus housing ranges from $5,000-$15,000 per year. Off-campus apartments vary greatly by location. Major cities like New York and San Francisco are significantly more expensive than smaller college towns.",
    universities: [
      { name: "Harvard University" },
      { name: "MIT" },
      { name: "Stanford University" },
      { name: "Yale University" },
      { name: "Princeton University" },
      { name: "Columbia University" },
      { name: "University of Chicago" },
      { name: "UCLA" },
      { name: "UC Berkeley" },
      { name: "NYU" },
    ],
  },
  china: {
    name: "China",
    flag: "🇨🇳",
    education:
      "China offers affordable, quality education with increasing programs taught in English. The country provides excellent opportunities to learn Mandarin and experience rich cultural heritage. Chinese universities are rising rapidly in global rankings.",
    visa:
      "X1 visa for studies over 180 days, X2 for shorter periods. Requirements include JW201/JW202 form, admission notice, health certificate, and passport. You'll need to register at the local police station upon arrival.",
    accommodation:
      "University dormitories are economical (¥800-1,500/month). Off-campus options are available in major cities. Cost of living is generally lower than Western countries, making it an affordable study destination.",
    universities: [
      { name: "Tsinghua University" },
      { name: "Peking University" },
      { name: "Fudan University" },
      { name: "Shanghai Jiao Tong University" },
      { name: "Zhejiang University" },
      { name: "Nanjing University" },
      { name: "University of Science and Technology of China" },
      { name: "Wuhan University" },
      { name: "Sun Yat-sen University" },
      { name: "Harbin Institute of Technology" },
    ],
  },
  switzerland: {
    name: "Switzerland",
    flag: "🇨🇭",
    education:
      "Switzerland is renowned for hospitality management, business, and sciences. Swiss universities consistently rank among the world's best. The multilingual environment and central European location provide unique international exposure.",
    visa:
      "Non-EU students need a National Visa (D visa) for studies over 90 days. Requirements include admission confirmation, financial proof (CHF 21,000/year minimum), and health insurance coverage.",
    accommodation:
      "University housing is limited; most students rent privately. Expect CHF 500-900/month for a room in a shared apartment. Cities like Zurich and Geneva have higher living costs.",
    universities: [
      { name: "ETH Zurich" },
      { name: "EPFL" },
      { name: "University of Zurich" },
      { name: "University of Geneva" },
      { name: "University of Bern" },
      { name: "University of Basel" },
      { name: "University of Lausanne" },
      { name: "École hôtelière de Lausanne" },
      { name: "University of St. Gallen" },
      { name: "University of Fribourg" },
    ],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    education:
      "Canada offers high-quality education at competitive tuition rates. Known for being welcoming to international students with excellent post-study work opportunities. The country provides a safe, multicultural environment with high quality of life.",
    visa:
      "Study Permit is required for programs over 6 months. You need acceptance letter, proof of funds (CAD 10,000+/year plus tuition), and may require biometrics. Allows part-time work during studies.",
    accommodation:
      "University residences cost CAD 8,000-15,000/year. Off-campus housing varies: CAD 600-1,500/month for shared apartments. Toronto and Vancouver are the most expensive cities.",
    universities: [
      { name: "University of Toronto" },
      { name: "McGill University" },
      { name: "University of British Columbia" },
      { name: "University of Alberta" },
      { name: "McMaster University" },
      { name: "University of Montreal" },
      { name: "University of Waterloo" },
      { name: "Western University" },
      { name: "Queen's University" },
      { name: "University of Calgary" },
    ],
  },
  vietnam: {
    name: "Vietnam",
    flag: "🇻🇳",
    education:
      "Vietnam is emerging as an affordable study destination with improving education quality. The country offers unique cultural experiences and growing international programs. Vietnamese universities are increasingly partnering with Western institutions.",
    visa:
      "Student visa (DH) is required for international students. You need admission letter, valid passport, health certificate, and proof of financial support. The visa can be extended during your study period.",
    accommodation:
      "Very affordable with dormitories from $50-100/month. Private apartments in cities like Hanoi and Ho Chi Minh City range from $200-500/month. Overall cost of living is among the lowest in Asia.",
    universities: [
      { name: "Vietnam National University" },
      { name: "Hanoi University" },
      { name: "Ho Chi Minh City University of Technology" },
      { name: "Foreign Trade University" },
      { name: "Diplomatic Academy of Vietnam" },
      { name: "RMIT Vietnam" },
      { name: "FPT University" },
      { name: "VinUniversity" },
      { name: "Fulbright University Vietnam" },
      { name: "University of Economics Ho Chi Minh City" },
    ],
  },
};

const PartnerCountry = () => {
  const { country } = useParams<{ country: string }>();
  const data = country ? countryData[country] : null;

  if (!data) {
    return (
      <Layout>
        <div className="ds-section ds-container text-center">
          <h1 className="ds-heading">Country not found</h1>
          <p className="text-muted-foreground mt-4">Please select a valid study destination.</p>
        </div>
      </Layout>
    );
  }

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

      {/* Country Button */}
      <section className="py-16 bg-background">
        <div className="ds-container">
          <div className="flex justify-center mb-16">
            <button className="flex items-center gap-3 bg-destructive text-destructive-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              <span className="text-2xl">{data.flag}</span>
              <span className="font-medium">{data.name}</span>
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-bold mb-4 text-primary">Education</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {data.education}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-bold mb-4 text-accent">Visa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {data.visa}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-bold mb-4 text-ds-orange">Accommodation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {data.accommodation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12 underline underline-offset-8 decoration-2">
            Our University Partners in {data.name}
          </h2>

          {/* Partners Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.universities.map((uni, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">
                      {uni.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-tight">
                    {uni.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerCountry;
