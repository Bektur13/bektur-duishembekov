import { site } from "@/data/content";
import { Container } from "./container";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {year} {site.name}
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
