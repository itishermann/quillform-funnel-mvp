export const INFORMATION_LASTNAME_ID = 'information__lastname';

export const buildLastnameFormObj = (
  defaultValue?: string | null,
) => ({
  name: 'short-text',
  id: INFORMATION_LASTNAME_ID,
  attributes: {
    label: 'Votre nom',
    defaultValue,
  },
});
