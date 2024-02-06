export const INFORMATION_HOW_DID_YOU_HEAR_ID = 'information__how_did_you_hear';

export const buildHowDidYouHearItFormObj = (
  defaultValue?: string | null,
) => ({
  name: 'multiple-choice',
  id: INFORMATION_HOW_DID_YOU_HEAR_ID,
  attributes: {
    label: 'Comment avez-vous entendu parler de nous ?',
    defaultValue,
    required: true,
    multiple: false,
    verticalAlign: true,
    choices: [
      {
        label: 'Throw error',
        value: 'error',
      },
      {
        label: 'Par bouche à oreille',
        value: 'bouche-a-oreille',
      },
      {
        label: 'En cherchant sur Google (recherche naturelle)',
        value: 'google-recherche-naturelle',
      },
      {
        label: 'En cherchant sur Google (sur une pub / annonce sponsorisée)',
        value: 'google-pub',
      },
      {
        label: 'Sur Instagram (en voyant une pub)',
        value: 'instagram-pub',
      },
      {
        label: 'Sur Instagram (un influenceur en parlait)',
        value: 'instagram-influenceur',
      },
      {
        label: 'Sur une pub Youtube',
        value: 'youtube-pub',
      },
      {
        label: 'Sur une pub diffusée sur un autre site',
        value: 'autre-site-pub',
      },
      {
        label: 'Sur Facebook (en voyant une pub)',
        value: 'facebook-pub',
      },
      {
        label: 'En cherchant sur Google (dans les résultats Google Maps)',
        value: 'google-maps',
      },
      {
        label: 'Sur le site Gens de Confiance',
        value: 'gens-de-confiance',
      },
      {
        label: 'Autre',
        value: 'autre',
      },
    ],
  },
});
