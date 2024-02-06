import '@quillforms/renderer-core/build-style/style.css';
// @ts-expect-error - TODO: find types
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';

registerCoreBlocks();

export const frenchFormMessages = {
  'label.button.ok': 'OK',
  'label.hintText.enter': 'Appuyez sur <strong>Entrée ↵</strong>',
  'label.hintText.multipleSelection': 'Choisissez autant que vous le souhaitez',
  'block.dropdown.placeholder': 'Tapez ou sélectionnez une option',
  'block.dropdown.noSuggestions': 'Pas de suggestions!',
  'block.shortText.placeholder': 'Tapez votre réponse ici',
  'block.longText.placeholder': 'Tapez votre réponse ici',
  'block.longText.hint': '<strong>Majuscule ⇧ + Entrée ↵</strong> pour faire un saut de ligne',
  'block.number.placeholder': 'Tapez votre réponse ici',
  'block.email.placeholder': 'Tapez votre email ici',
  'block.defaultThankYouScreen.label': "Merci d'avoir rempli ce formulaire.\n\n Nous vous contacterons bientôt",
  'label.hintText.key': 'Clavier',
  'label.progress.percent': '{{progress:percent}}% complété',
  'label.errorAlert.required': 'Ce champ est requis!',
  'label.errorAlert.date': 'Date invalide!',
  'label.errorAlert.number': 'Chiffres uniquement!',
  'label.errorAlert.selectionRequired': 'Veuillez faire au moins une sélection!',
  'label.errorAlert.email': 'Email invalide!',
  'label.errorAlert.url': 'Url invalide!',
  'label.errorAlert.range': 'Veuillez entrer un nombre entre {{attribute:min}} et {{attribute:max}}',
  'label.errorAlert.minNum': 'Veuillez entrer un nombre supérieur à {{attribute:min}}',
  'label.errorAlert.maxNum': 'Veuillez entrer un nombre inférieur à {{attribute:max}}',
  'label.errorAlert.maxCharacters': 'Nombre maximal de caractères atteint!',
  'label.submitBtn': 'Terminer',
};

export const formTheme = {
  font: 'Verdana, sans-serif',
  buttonsBgColor: '#133426',
  questionsLabelFont: 'Greycliff CF, sans-serif',
  answersColor: '#133426',
};
