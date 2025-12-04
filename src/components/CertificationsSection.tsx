import { Award, ArrowUpRight } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: "obtained" | "in-progress";
  credlyUrl?: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    status: "obtained",
    credlyUrl: "https://www.credly.com/badges/7918fc8e-b1d4-4989-b453-56d966181fd0/linked_in?t=t403ld",
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
                <h3 className="font-medium text-foreground">
                  {cert.credlyUrl ? (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link external-link"
                    >
                      <span>{cert.name}</span>
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : (
                    cert.name
                  )}
                </h3>
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