import {
  createPlaceholderRectNew,
  heightCenter,
  widthCenter,
} from "@/src/actions/rect-new";
import PageView from "./components/PageView";
import PlaceholderRectView from "./components/PlaceholderRectView";

export default function Home() {
  const rect = createPlaceholderRectNew(widthCenter(200), heightCenter(200));

  return (
    <PageView>
      <PlaceholderRectView rect={rect} />
    </PageView>
  );
}
