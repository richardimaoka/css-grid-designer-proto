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
};

export { PlaceholderType, Row };
