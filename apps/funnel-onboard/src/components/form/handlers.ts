import { INFORMATION_HOW_DID_YOU_HEAR_ID } from '@/components/form/Informations/HowDidYouHearIt';
import { SubmissionDispatchers } from '@quillforms/renderer-core/build-types/types';

type FieldHandlersProps<T=Record<string, unknown>> = {
  setIsFieldValid: (id: string, flag: boolean) => void;
  setFieldValidationErr: (id: string, err: string) => void;
  setIsPending: (flag: boolean) => void;
  setIsCurrentBlockSafeToSwipe: (flag: boolean) => void;
  goToBlock: (id: string) => void;
  goNext: () => void;
  currentBlockId: string;
  answers: T;
};


export default function useHandlers() {
  const onSubmit = (data: Object, dispatchers: SubmissionDispatchers) => {
    console.debug('onSubmit', data);
    setTimeout(() => {
      dispatchers.setIsSubmitting(false);
      dispatchers.completeForm();
    }, 500);
  };

  const beforeGoingNext = (props: FieldHandlersProps) => {
    console.debug('beforeGoingNext', props.currentBlockId);
    props.setIsPending(true);
    switch (props.currentBlockId) {
      case INFORMATION_HOW_DID_YOU_HEAR_ID:
        return setTimeout(() => {
          // TODO: type this
        const answers: string[] = (props.answers[props.currentBlockId] as any).value;
        if(answers.includes('error')) {
          props.setIsPending(false);
          props.setIsCurrentBlockSafeToSwipe(false);
          props.setIsFieldValid(props.currentBlockId, false);
          props.setFieldValidationErr(props.currentBlockId, 'Error message test');
          return;
        }
        return props.goNext();
        }, 1500);
      default:
        props.setIsPending(false);
        return props.goNext();
    }
  };
  return {
    onSubmit,
    beforeGoingNext,
  };
}
