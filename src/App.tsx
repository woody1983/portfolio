/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SystemNav from './components/SystemNav';
import Hero from './components/Hero';
import About from './components/About';
import Discovery from './components/Discovery';
import Methodology from './components/Methodology';
import CaseStudy from './components/CaseStudy';
import Impact from './components/Impact';
import Epilogue from './components/Epilogue';
import Lib from './components/Lib';

export default function App() {
  return (
    <main className="bg-[var(--color-noir-bg)] min-h-screen text-[var(--color-noir-text)] selection:bg-[var(--color-noir-green)] selection:text-black">
      <SystemNav />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <section id="discovery">
        <Discovery />
      </section>
      <Methodology />
      <CaseStudy />
      <Impact />
      <Epilogue />
      <Lib />
    </main>
  );
}
