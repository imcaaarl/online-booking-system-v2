import BookingForm from '@/components/booking/BookingForm';
import { Section } from '@/components/section/Section';


import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] font-[family-name:var(--font-geist-sans)] sm:p-10">
      <main className="row-start-2 flex flex-row items-center justify-center gap-8 sm:items-start">
        <Section/>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
