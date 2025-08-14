type PlaceholderRectangle = {
  width: number;
  height: number;
};

type PlaceholderCircle = {
  radius: number;
};

type ChildType = PlaceholderRectangle | PlaceholderCircle;

type Row = {
  children: ChildType[];
};

type Column = {
  children: ChildType[];
};

export { ChildType, Row };
