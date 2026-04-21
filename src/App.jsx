import { useEffect, useRef, useState } from 'react';
import './App.css';
import OpeningPanel from './components/OpeningPanel';
import PhotoPanel from './components/PhotoPanel';
import ActBreakPanel from './components/ActBreakPanel';
import ClosingPanel from './components/ClosingPanel';
import ProgressBar from './components/ProgressBar';
import BirthdayCake from './components/BirthdayCake';
import SiriArrow from './components/SiriArrow';
import VennelaChat from './components/VennelaChat';
import FacebookCaption from './components/FacebookCaption';
import SpotifyPlayer from './components/SpotifyPlayer';
import DadMug from './components/DadMug';
import Microbit from './components/Microbit';

const photoData = [
  {
    id: 1,
    src: 'photo-1.jpg',
    position: '65% center',
    theme: 'tomato',
    stamp: 'THE PREMISE',
    caption: 'I grew up between countries, cultures, and people who had nothing in common. I couldn\'t have built an echo chamber if I tried. here\'s what that taught me.',
    page: '01 / 13'
  },
  {
    id: 2,
    src: 'photo-2.jpg',
    decoration: 'flight',
    theme: 'olive',
    stamp: 'THE FIRST FLIGHT',
    caption: 'I was months old when I flew to India. my parents wanted me to celebrate my first birthday with my extended family. my experiences there would shape my worldview.',
    page: '02 / 13'
  },
  {
    id: 3,
    src: 'photo-3.jpg',
    theme: 'tomato',
    stamp: 'WHERE THE DEBATES BEGAN',
    caption: `before any of those experiences, there were my parents.\n\nmy father is an integration architect and political writer. we've disagreed often, from restaurant orders to who to vote for, but we always debate it out and come out stronger.\n\nmy mother is less political, but just as influential. she taught me not to mirror my peers, but to carve my own path.`,
    page: '03 / 13',
    photoExtra: <BirthdayCake />,
  },
  {
    id: 4,
    src: 'photo-4.jpg',
    theme: 'olive',
    stamp: 'A WORLD AWAY, SAME BLOOD',
    caption: `my older cousins taught me Telugu, my mother tongue. they showed me daily life in India, a country rapidly modernizing since its independence.\n\nvisiting means meeting people only a generation apart but shaped by radically different beliefs and experiences. hearing their stories taught me to understand all kinds of lives.`,
    page: '04 / 13',
    photoOverlay: <SiriArrow />,
  },
  {
    id: 5,
    src: 'photo-5.jpg',
    theme: 'tomato',
    stamp: 'LEAD BY LISTENING',
    caption: 'my grandmother and mother sent me off to my first day of school. despite not having access to higher education, my grandmother served as village <span class="caption-tooltip-wrap">sarpanch<span class="caption-tooltip"><span class="tooltip-word">sar·panch</span><span class="tooltip-pos">noun</span>elected president of a village council in India.</span></span>. her model of leadership was simple: hear everyone out, even those who disagree with you, and serve accordingly.',
    note: 'she later pursued an online degree when a little kid joked about her not having one.',
    page: '05 / 13'
  },
  {
    id: 6,
    src: 'photo-6.jpg',
    theme: 'tomato',
    stamp: 'MY FIRST SUPPORTERS',
    caption: 'my cousins are my constants. they were my first supporters when I launched my newspaper, <em>Voice of Frisco</em>, in 8th grade. while I owe my father for my interest in writing, I owe my cousins for my interest in geopolitics and human rights. it started with articles over iMessage and turned into discussions at dinner, where we shared our perspectives.',
    page: '06 / 13',
    textExtra: <VennelaChat />,
  },
  {
    id: 7,
    src: 'photo-7.jpg',
    theme: 'blush',
    stamp: 'OPPOSITE VIEWS, SAME TABLE',
    caption: `my father's friend group is why I'm not scared of surrounding myself with people different from me. they became fast friends at a party, and while they disagree on everything under the sun, they love each other like brothers. there's not one day where I don't hear them get into a heated debate and end the call giggling.`,
    page: '07 / 13',
    textExtra: <FacebookCaption />,
  },
  {
    id: 8,
    src: 'photo-8.jpg',
    theme: 'olive',
    stamp: 'AMERICA THROUGH THEIR EYES',
    caption: `my high school teachers opened my eyes to walks of life in America. one immigrated from Mexico at 10, had to leave at 18 for his greencard, and came back. he taught us that a lack of acceptance of differences is why this country is in the state it's in. here he is dancing at my graduation party.`,
    page: '08 / 13',
    textExtra: <SpotifyPlayer />,
  },
  {
    id: 9,
    src: 'photo-9.jpg',
    position: '10% 65%',
    theme: 'tomato',
    stamp: 'WHO MADE ME BRAVER',
    caption: `as part of Frisco ISD's Gifted/Talented program, I mentored four younger students who became my "children" — two extroverted, two introverted, and all kinds of interests. they pushed me to be braver. middle school me would've done anything but perform a song about Emmanuel Kant.`,
    page: '09 / 13',
    photoExtra: <DadMug />,
  },
  {
    id: 10,
    src: 'photo-10.jpg',
    theme: 'olive',
    stamp: 'MEET THEM WHERE THEY ARE',
    caption: `as a CS Roadshow volunteer, I taught 3rd graders coding with micro: bits. one wanted to code a car, another a heart. they came from a different background than my Frisco suburb, but finding mutual ground with them was something my teachers and older cousins taught me how to do. you just have to meet people where they are.`,
    page: '10 / 13',
    photoExtra: <Microbit />,
  },
  {
    id: 11,
    src: 'photo-11.jpg',
    theme: 'blush',
    stamp: 'FRIENDSHIP ACROSS FAITHS',
    caption: `here's my friend Hana. we met through our FRI stream, and we're currently building a belt that detects freezing of gait. we bonded over more than robotics. from wishing each other on our respective religious holidays to discussing the intricacies of Hinduism and Islam, she's taught me so much. that kind of friendship is rare today.`,
    page: '11 / 13',
  },
  {
    id: 12,
    src: 'photo-12.jpg',
    theme: 'tomato',
    stamp: 'DESIGN IS FOR THEM',
    caption: `through Design for America, I've worked with Keep Austin Fed (KAF) volunteers who brought me back to the whole point: step outside your echo chamber, understand people's lives, and build something for them.`,
    page: '12 / 13',
    note: 'currently emailing Katherine (KAF\'s outreach coordinator) about redesigning the food contributor newsletter',
  },
  {
    id: 13,
    src: 'photo-13.JPEG',
    position: 'center 58%',
    theme: 'olive',
    stamp: 'EXPAND YOUR WORLD',
    caption: `my love for meeting new people and learning their life stories has never left. I offered to take her photo with my Canon at her pop-up. she's a small business owner, connecting to her culture through her cafe. she handed us homemade mochi just like that. you never know what you'll find when you expand your world.`,
    page: '13 / 13',
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
        <ActBreakPanel title="childhood." subtitle="— where your worldview is shaped —" />
        {photoData.slice(0, 5).map(photo => (
          <PhotoPanel key={photo.id} {...photo} />
        ))}
        <ActBreakPanel title="adolescence." subtitle="— where the world gets smaller, if you let it —" />
        {photoData.slice(5, 9).map(photo => (
          <PhotoPanel key={photo.id} {...photo} />
        ))}
        <ActBreakPanel title="adulthood." subtitle="— where you put it into practice —" />
        {photoData.slice(9).map(photo => (
          <PhotoPanel key={photo.id} {...photo} />
        ))}
        <ClosingPanel />
      </div>
      <ProgressBar progress={scrollProgress} />
    </div>
  );
}
