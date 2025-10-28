// components/WhyOccom.tsx
'use client';

import dynamic from 'next/dynamic';

const WhyClient = dynamic(() => import('./WhyOccom.client'), {
  ssr: false,
});

export default function WhyOccom() {
  return <WhyClient />;
}
