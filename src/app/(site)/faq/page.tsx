import type { Metadata } from 'next';
import FaqAccordion from '@/components/sections/faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ',
};

export default function FaqPage() {
  return <FaqAccordion />;
}
