/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Discovery from './components/Discovery';
import Methodology from './components/Methodology';
import CaseStudy from './components/CaseStudy';
import Impact from './components/Impact';
import Epilogue from './components/Epilogue';

export default function App() {
  return (
    <main className="bg-[var(--color-noir-bg)] min-h-screen text-[var(--color-noir-text)] selection:bg-[var(--color-noir-green)] selection:text-black">
      <Hero />
      <Discovery />
      <Methodology />
      <CaseStudy />
      <Impact />
      <Epilogue />
    </main>
  );
}
