import { Award } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: "obtained" | "in-progress";
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    status: "obtained",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Expected 2026",
    status: "in-progress",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">Certifications</h2>
      <div className="group/list">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative mb-6 rounded-md p-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-muted/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  {cert.status === "in-progress" && (
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
