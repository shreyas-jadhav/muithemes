import { PreviewProvider } from "@/client/context/PreviewContext";
import PreviewWindow from "./PreviewWindow";

type Props = {};

const PreviewUI = (props: Props) => {
  return (
    <PreviewProvider>
      <PreviewWindow />
    </PreviewProvider>
  );
};

export default PreviewUI;
