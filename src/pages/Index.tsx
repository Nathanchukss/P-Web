import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left sidebar - sticky */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Nathan Nwaokocha
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
              Computer Science Student
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              Aspiring DevOps Engineer & Cloud Solutions Architect with a passion for AI/ML and Security.
            </p>
            
            <div className="mt-16">
              <Navigation />
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <SocialLinks />
          </div>
        </header>

        {/* Right content - scrollable */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
