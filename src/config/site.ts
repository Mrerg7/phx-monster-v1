export const SITE = {
  name: 'phx.monster',
  title: 'PHX.Monster | Premium Phoenix Tech Domain for Sale | The Monster in Southwest Tech',
  description:
    'PHX.Monster — The premium .monster domain for Phoenix tech. Own the bold brand for the Southwest’s fastest-growing tech ecosystem, semiconductor powerhouse, and innovation monster. Now available.',
  url: 'https://phx.monster',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'e759f419-cbb2-42c7-4d97-f002bf052200',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('phx.monster Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phx.monster.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'July 2, 2026';
