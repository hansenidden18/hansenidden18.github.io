"use client";

import Image from "next/image";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ThemeToggle } from "@/components/theme-toggle";

const navTabs = [
  { id: "home", label: "Home" },
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
  { id: "talks", label: "Talks" },
  { id: "teaching", label: "Teaching" },
  { id: "cv", label: "CV" },
];

const news = [
  { date: "Feb. 2026", content: "Received travel grant for FAST'26 in Santa Clara, CA!" },
  { date: "Nov. 2025", content: "Cylon is accepted at FAST'26!" },
  { date: "Nov. 2025", content: "PACT is accepted at ASPLOS'26!" },
  { date: "Jul. 2025", content: "Received travel grant for ATC'25 in Boston, MA!" },
  { date: "Aug. 2024", content: "Starting my CS PhD at Virginia Tech!" },
  {
    date: "Apr. 2024",
    content: "Excited to share that I will be pursuing a PhD at Virginia Tech under Prof. Huaicheng Li.",
    link: "https://huaicheng.github.io/",
    linkText: "Prof. Huaicheng Li",
  },
  { date: "Apr. 2024", content: "Graduated from ITS with cum laude!" },
];

const publications = [
  {
    venue: "FAST '26",
    title: "Cylon: Fast and Accurate Full-System Emulation of CXL-SSDs",
    authors: "Dongha Yoon*, Hansen Idden*, Jinshu Liu, Berkay Inceisci, Sam H. Noh, Huaicheng Li",
    note: "* Co-lead authors",
    paperUrl: "https://www.usenix.org/system/files/fast26-yoon.pdf",
  },
  {
    venue: "ASPLOS '26",
    title: "PACT: Fine-Grained Online Criticality-Driven Memory Tiering",
    authors: "Hamid Hadian, Jinshu Liu*, Hanchen Xu*, Hansen Idden, Huaicheng Li",
    note: "* Equal contributions",
    status: "To appear",
  },
];

const talks = [
  {
    title: "Cylon: Fast and Accurate Full-System Emulation of CXL-SSDs",
    venue: "FAST '26",
    location: "Santa Clara, CA",
    date: "Feb. 2026",
    videoUrl: "", // TODO: Update with YouTube link when available
  },
];

const teaching = [
  { role: "TA", course: "CS5264 Linux Kernel Programming", semester: "Spring 2026" },
  {
    role: "TA",
    course: "CS3214 Computer Systems",
    semester: "Spring 2025",
    link: "https://courses.cs.vt.edu/cs3214/spring2025",
  },
  {
    role: "TA",
    course: "CS3214 Computer Systems",
    semester: "Fall 2024",
    link: "https://courses.cs.vt.edu/cs3214/fall2024",
  },
];

function highlightName(authors: string, name: string = "Hansen Idden") {
  const parts = authors.split(name);
  if (parts.length === 1) return <>{authors}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <strong className="text-foreground font-semibold">{name}</strong>
          )}
        </span>
      ))}
    </>
  );
}

function scrollToSection(id: string) {
  if (id === "cv") {
    window.open("/files/Resume_Hansen_2025.pdf", "_blank");
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Hansen Idden</span>
          <div className="flex items-center gap-2">
            <AnimatedTabs
              tabs={navTabs}
              onChange={(tabId) => scrollToSection(tabId)}
            />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
        {/* Hero */}
        <section id="home" className="mb-20">
          <BlurFade delay={0.15} inView>
            <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-md mb-10">
              <Image
                src="/images/profile.jpg"
                alt="Hansen Idden"
                width={768}
                height={384}
                className="w-full h-96 object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white drop-shadow-lg">
                  Hello there 👋,
                </h2>
                <span className="text-xl text-white/90 tracking-tighter sm:text-3xl drop-shadow-lg">
                  I&apos;m Hansen
                </span>
              </div>
            </div>
          </BlurFade>
          <div>

              <BlurFade delay={0.75} inView>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  I am a second year CS PhD Student at{" "}
                  <a
                    href="https://cs.vt.edu/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Virginia Tech
                  </a>
                  . I received a B.Informatics degree from{" "}
                  <a
                    href="https://www.its.ac.id/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sepuluh Nopember Institute of Technology (ITS)
                  </a>{" "}
                  with cum laude distinction. My unmatched perspicacity coupled
                  with sheer indefatigability makes me love research with high
                  curiosity.
                </p>
              </BlurFade>
              <BlurFade delay={1.0} inView>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  I have broad interests in{" "}
                  <strong className="text-foreground">Storage Systems</strong>,{" "}
                  <strong className="text-foreground">Memory Systems</strong>, and{" "}
                  <strong className="text-foreground">Systems Architecture</strong>.
                </p>
              </BlurFade>
          </div>
        </section>

        {/* News */}
        <section id="news" className="mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl font-bold tracking-tight mb-6 pb-3 border-b-2 border-primary">
              Recent News
            </h2>
          </BlurFade>
          <div className="rounded-lg border bg-secondary/30 p-4 max-h-72 overflow-y-auto">
            {news.map((item, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.05} inView>
                <div className="flex items-start gap-4 py-2.5 border-b border-border/50 last:border-0">
                  <span className="flex-shrink-0 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md whitespace-nowrap">
                    {item.date}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.link ? (
                      <>
                        {item.content.split(item.linkText!)[0]}
                        <a
                          href={item.link}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkText}
                        </a>
                        {item.content.split(item.linkText!)[1]}
                      </>
                    ) : (
                      item.content
                    )}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl font-bold tracking-tight mb-6 pb-3 border-b-2 border-primary">
              Publications
            </h2>
          </BlurFade>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1} inView>
                <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-lg border bg-secondary/30 border-l-4 border-l-primary hover:shadow-md transition-all">
                  <div className="flex-shrink-0 sm:min-w-[90px] sm:text-right sm:border-r sm:border-border sm:pr-4">
                    <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {pub.venue}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground leading-snug">
                      {pub.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {highlightName(pub.authors)}
                      <br />
                      <span className="text-xs italic opacity-75">{pub.note}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground italic">
                      {pub.status}
                    </div>
                    {pub.paperUrl && (
                      <div className="mt-3">
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InteractiveHoverButton text="Paper" className="text-xs w-24" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Talks */}
        <section id="talks" className="mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl font-bold tracking-tight mb-6 pb-3 border-b-2 border-primary">
              Talks
            </h2>
          </BlurFade>
          <div className="space-y-4">
            {talks.map((talk, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1} inView>
                <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-lg border bg-secondary/30 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 sm:min-w-[90px] sm:text-right sm:border-r sm:border-border sm:pr-4">
                    <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {talk.venue}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground leading-snug">
                      {talk.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {talk.location} - {talk.date}
                    </div>
                    {talk.videoUrl ? (
                      <div className="mt-3">
                        <a
                          href={talk.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InteractiveHoverButton text="Video" className="text-xs w-24" />
                        </a>
                      </div>
                    ) : (
                      <div className="mt-2 text-xs text-muted-foreground italic">
                        Video coming soon
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Teaching */}
        <section id="teaching" className="mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl font-bold tracking-tight mb-6 pb-3 border-b-2 border-primary">
              Teaching
            </h2>
          </BlurFade>
          <div className="space-y-3">
            {teaching.map((item, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1} inView>
                <div className="flex items-center gap-4 p-4 rounded-lg border bg-secondary/30 hover:border-primary transition-all">
                  <span className="flex-shrink-0 text-xs font-semibold text-primary-foreground bg-primary px-2.5 py-1 rounded-md">
                    {item.role}
                  </span>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.course}
                        </a>
                      ) : (
                        item.course
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.semester}</div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
