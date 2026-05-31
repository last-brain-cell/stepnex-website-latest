import Image, { type ImageProps } from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import priyanshImage from "@/images/team/priyansh-goel.webp";
import naadImage from "@/images/team/naad-dantale.jpg";

interface Director {
  name: string;
  role: string;
  image: ImageProps["src"];
  website: string;
  linkedin: string;
  instagram: string;
}

const directors: Array<Director> = [
  {
    name: "Priyansh Goel",
    role: "Director",
    image: priyanshImage,
    website: "https://priyanshgoel.in",
    linkedin: "https://www.linkedin.com/in/priyansh-goel/",
    instagram: "https://www.instagram.com/priyanshgoel_/",
  },
  {
    name: "Naad Dantale",
    role: "Director",
    image: naadImage,
    website: "https://lastbraincell.in",
    linkedin: "https://www.linkedin.com/in/naad/",
    instagram: "https://www.instagram.com/naad.daan__/",
  },
];

function LinkedInIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

export function Directors() {
  return (
    <section
      id="about"
      aria-label="Meet the directors"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Meet the Directors.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            StepNex is led by two directors who pair hands-on engineering with a
            product-first mindset to build solutions that move businesses
            forward.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-12 sm:grid-cols-2">
          {directors.map((director) => {
            const domain = director.website.replace(/^https?:\/\//, "");
            return (
              <li key={director.name} className="flex flex-col items-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-6 font-display text-xl text-slate-900">
                  {director.name}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  {director.role}
                </div>
                <Button
                  href={director.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  color="slate"
                  className="mt-4"
                >
                  {domain}
                </Button>
                <div className="mt-4 flex items-center gap-x-4">
                  <a
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${director.name} on LinkedIn`}
                    className="text-slate-400 transition hover:text-slate-600"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={director.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${director.name} on Instagram`}
                    className="text-slate-400 transition hover:text-slate-600"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
