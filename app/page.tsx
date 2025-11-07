import { Hero } from '@/components/features/hero';
import { Projects } from '@/components/features/projects';
import { Experiences } from '@/components/features/experiences';
import { Contact } from '@/components/features/contact';

export default function Home() {
  return (
    <main className="space-y-0">
      <Hero />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}
