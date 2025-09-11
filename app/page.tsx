import PageView from "./components/PageView";
import PlaceholderRectView from "./components/PlaceholderRectView";
import { createPlaceholderRect } from "@/src/actions/rect";

export default function Home() {
  const rect = createPlaceholderRect({ widthPx: 200, heightPx: 200 });

  return (
    <PageView>
      <PlaceholderRectView rect={rect} />
    </PageView>
  );
}
