'use client';

import React from 'react';
import { schoolInfo } from '@/data/schoolData';

export const SchoolSchema: React.FC = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: schoolInfo.name,
    alternateName: [schoolInfo.shortName, schoolInfo.foundation],
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://smp452kedungpring.sch.id',
    logo: `${process.env.NEXT_PUBLIC_APP_URL || ''}/logo.png`,
    description: schoolInfo.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: schoolInfo.address,
      addressLocality: schoolInfo.district,
      addressRegion: `${schoolInfo.regency}, ${schoolInfo.province}`,
      postalCode: schoolInfo.postalCode,
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.1895,
      longitude: 112.1852,
    },
    telephone: schoolInfo.phone,
    email: schoolInfo.email,
    sameAs: [
      schoolInfo.socials.facebook,
      schoolInfo.socials.instagram,
      schoolInfo.socials.youtube,
      schoolInfo.socials.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
