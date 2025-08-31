# Data Types Specification

## Core Grid Elements

```typescript
type PlaceholderRectangle = {
  width: number;
  height: number;
};
```

### PlaceholderCircle
```typescript
type PlaceholderCircle = {
  radius: number;
};
```

### PlaceholderType
```typescript
type PlaceholderType = PlaceholderRectangle | PlaceholderCircle;
```

## Layout Containers

### Row
```typescript
type Row = {
  children: PlaceholderType[];
  // Grid properties to be defined
};
```

## View System

### View
```typescript
type View = {
  target: Row | PlaceholderType;
  width: number;
  height: number;
};
```

### ViewPort
```typescript
type ViewPort = {
  view: View;
};
```

## Multi-View Support

### MultiTargetView
```typescript
type MultiTargetView = {
  target1: Row;
  target2: Row;
};
```

### MultiView
```typescript
type MultiView = {
  view1: View;
  view2: View;
};
```
