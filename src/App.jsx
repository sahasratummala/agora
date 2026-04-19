import { useEffect, useRef, useState } from 'react';
import './App.css';
import OpeningPanel from './components/OpeningPanel';
import PhotoPanel from './components/PhotoPanel';
import ActBreakPanel from './components/ActBreakPanel';
import ClosingPanel from './components/ClosingPanel';
import ProgressBar from './components/ProgressBar';

const photoData = [
  {
    id: 1,
    src: 'photo-1.jpg',
    position: '65% center',
    theme: 'tomato',
    stamp: 'FRISCO, TEXAS · 2012',
    caption: 'my name is Sahasra. I grew up between countries, cultures, and people who had nothing in common. this essay is proof of what happens when you let that shape you instead of scare you.',
    page: '01 / 13'
  },
  {
    id: 2,
    src: 'photo-2.jpg',
    decoration: 'flight',
    theme: 'olive',
    stamp: 'IN THE CLOUDS · 2007',
    caption: 'I was months old when I flew to India. my parents wanted me to celebrate my first birthday with my extended family. my experiences there would shape my worldview.',
    page: '02 / 13'
  },
  {
    id: 3,
    src: 'photo-3.jpg',
    theme: 'tomato',
    stamp: 'BAPATLA, INDIA · 2007',
    caption: `however, before those experiences, there were my parents. \n\n my father is an integration architect and political writer. we’ve disagreed often, from restaurant orders to who to vote for, but we always debate it out and come out stronger.\n\nmy mother is less political, but just as influential. she has pushed me not to mirror my peers, but to carve my own path.`,
    page: '03 / 13'
  },
  {
    id: 4,
    src: 'photo-4.jpg',
    theme: 'olive',
    stamp: 'HYDERABAD, INDIA · 2007',
    caption: `my older cousins taught me Telugu, my mother tongue. they showed me daily life in India, a country rapidly modernizing since its independence.\n\nvisiting means meeting people only a generation apart but shaped by radically different beliefs and experiences. hearing their stories taught me to understand all kinds of lives.`,
    page: '04 / 13'
  },
  {
    id: 5,
    src: 'photo-5.jpg',
    theme: 'tomato',
    stamp: 'FRISCO, TEXAS · 2012',
    caption: 'my grandmother and mother sent me off to my first day of school. despite not having access to higher education, my grandmother served as village sarpanch. her model of leadership was simple: hear everyone out, even those who disagree with you, and serve accordingly.',
    note: 'she later pursued an online degree when a little kid joked about her not having one.',
    page: '05 / 13'
  },
  {
    id: 6,
    src: 'photo-6.jpg',
    theme: 'tomato',
    stamp: 'FRISCO, TEXAS · 2025',
    caption: 'my cousins here are my constants. they were my first supporters when I launched my newspaper, <em>Voice of Frisco</em>, in 8th grade. while I owe my father for my interest in writing, I owe my cousins for pushing me to learn about geopolitics and human rights issues.',
    page: '06 / 13'
  },
  {
    id: 7,
    src: 'photo-7.jpg',
    theme: 'blush',
    stamp: 'FRISCO, TEXAS · 2025',
    caption: `my father's friend group is why I'm not scared of surrounding myself with people different from me. they became fast friends at a party, and while they disagree on everything under the sun, they love each other like brothers. there's not one day where I don't hear them get into a heated debate and end the call giggling.`,
    page: '07 / 13'
  },
  {
    id: 8,
    src: 'photo-8.jpg',
    theme: 'olive',
    stamp: 'FRISCO, TEXAS · 2025',
    caption: `my high school teachers opened my eyes to walks of life in America. one immigrated from Mexico at 10, had to leave at 18 for his greencard, and came back. he taught us that a lack of acceptance is why this country is in the state it's in. here he is dancing at my graduation party.`,
    page: '08 / 13'
  },
  {
    id: 9,
    src: 'photo-9.jpg',
    position: '10% 65%',
    theme: 'tomato',
    stamp: 'FRISCO, TEXAS · 2025',
    caption: `as part of Frisco ISD's Gifted/Talented program, I mentored four younger students who became my “children.” they're very different from each other — two extroverted, two introverted, all kinds of interests. they pushed me to be more audacious. middle school me would've done anything but perform and write a song about Emmanuel Kant.`,
    page: '09 / 13'
  },
  {
    id: 10,
    src: 'photo-10.jpg',
    theme: 'olive',
    stamp: 'AUSTIN, TEXAS · 2025',
    caption: `as a CS Roadshow volunteer, I taught 3rd graders coding with micro: bits. one wanted to code a car, another a heart. they came from a different background than my Frisco suburb, but finding mutual ground with them was something my teachers and older cousins had taught me how to do. you just have to be willing to meet people where they are.`,
    page: '10 / 13'
  },
  {
    id: 11,
    src: 'photo-11.jpg',
    theme: 'blush',
    stamp: 'AUSTIN, TEXAS · 2026',
    caption: 'here\'s my friend Hana. we met through our FRI stream, and we\'re currently building a belt that detects freezing of gait. we bonded over more than robotics. from wishing each other on our respective religious holidays to discussing the intricacies of Hinduism and Islam, she\'s taught me so much. that kind of friendship is rare today.',
    page: '11 / 13'
  },
  {
    id: 12,
    src: 'photo-12.jpg',
    theme: 'tomato',
    stamp: 'AUSTIN, TEXAS · 2026',
    caption: `through Design for America, I've met inspiring people who pushed me to pursue design. working with Keep Austin Fed volunteers brought me back to the whole point: step outside your echo chamber, understand people's lives, and build something for them.`,
    page: '12 / 13'
  },
  {
    id: 13,
    src: 'photo-13.JPEG',
    position: 'center 58%',
    theme: 'olive',
    stamp: 'FRISCO, TEXAS · 2026',
    caption: `my love for meeting new people and learning their life stories has never left. I offered to take her photo with my Canon at her pop-up. she's a small business owner, connecting to her culture through her cafe. she handed us homemade mochi just like that. you never know what you'll find when you expand your world.`,
    page: '13 / 13'
  }
];

export default function App() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const max = container.scrollWidth - container.clientWidth;
      const progress = max ? container.scrollLeft / max : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="scroll-container" ref={scrollContainerRef}>
        <OpeningPanel />
        <ActBreakPanel title="childhood." subtitle="— chapter one —" />
        {photoData.slice(0, 5).map(photo => (
          <PhotoPanel key={photo.id} {...photo} />
        ))}
        <ActBreakPanel title="adolescence." subtitle="— chapter two —" />
        {photoData.slice(5, 9).map(photo => (
          <PhotoPanel key={photo.id} {...photo} />
        ))}
        <ActBreakPanel title="adulthood." subtitle="— chapter three —" />
        {photoData.slice(9).map(photo => (
          <PhotoPanel key={photo.id} {...photo} />
        ))}
        <ClosingPanel />
      </div>
      <ProgressBar progress={scrollProgress} />
    </div>
  );
}
