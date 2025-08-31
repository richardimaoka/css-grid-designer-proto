type PlaceholderRectangle = {
  width: number;
  height: number;
};

type PlaceholderCircle = {
  radius: number;
};

type PlaceholderType = PlaceholderRectangle | PlaceholderCircle;

type Row = {
  children: PlaceholderType[];
  grid: "centered";
  //justify-items/content
  //align-items (content doesn't make difference from items? or does it?)
  //column-gap (no row gap)
};

type AddChildAction = {
  newChild: PlaceholderType;
};

// Single model view
type View = {
  target: Row | PlaceholderType;
  width: number;
  height: number;
};

type MultiTargetView = {
  target1: Row;
  target2: Row;
};

type MultiView = {
  view1: View;
  view2: View;
};

type ViewPort = {
  view: View;
};

// replace target

export { PlaceholderType, Row };
