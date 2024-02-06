import {buildFirstnameFormObj} from "@/components/form/Informations/Firstname";
import {buildLastnameFormObj} from "@/components/form/Informations/Lastname";
import {buildHowDidYouHearItFormObj} from "@/components/form/Informations/HowDidYouHearIt";
import {formTheme, frenchFormMessages} from "@/config/quillforms";
import useHandlers from "@/components/form/handlers";
import {Form} from '@quillforms/renderer-core';

export default function HomePage(){
	const handlers = useHandlers();
	return (
		<div style={{ width: "100%", height: "100vh" }}>
			<Form
        applyLogic={false}
        formObj={{
          blocks: [
						buildHowDidYouHearItFormObj(),
            buildFirstnameFormObj(),
            buildLastnameFormObj(),
          ],
          messages: frenchFormMessages,
          theme: formTheme,
          settings: {
            disableWheelSwiping: true,
          },
        }}
        beforeGoingNext={handlers.beforeGoingNext}
        onSubmit={handlers.onSubmit}
      />
	</div>)
}
