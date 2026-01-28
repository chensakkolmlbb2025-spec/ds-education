const values = [
  {
    title: "MISSION",
    description:
      "To provide consultancy services and support for international courses for English and other top universities.",
    variant: "outline" as const,
  },
  {
    title: "VISION",
    description: "To be the most preferred educational consulting agency.",
    variant: "filled" as const,
  },
  {
    title: "CORE VALUES",
    description: "Committed Delivery, Perseverance, Trust and Supportive.",
    variant: "outline" as const,
  },
];

const ValuesSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="ds-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg text-center transition-all duration-300 hover-lift ${
                value.variant === "filled"
                  ? "bg-primary text-primary-foreground"
                  : "border-2 border-primary bg-background"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  value.variant === "filled" ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {value.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  value.variant === "filled" ? "text-primary-foreground/90" : "text-muted-foreground"
                }`}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
