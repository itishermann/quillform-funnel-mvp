export const INFORMATION_FIRSTNAME_ID = 'information__firstname';

export const buildFirstnameFormObj = (
  defaultValue?: string | null,
)=> ({
  name: 'short-text',
  id: INFORMATION_FIRSTNAME_ID,
  attributes: {
    label: 'Votre prénom',
    defaultValue,
  },
});
