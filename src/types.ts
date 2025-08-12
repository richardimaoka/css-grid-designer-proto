// Brand type for compile-time integer distinction
declare const IntBrand: unique symbol;
export type Int = number & { readonly [IntBrand]: typeof IntBrand };

type PlaceholderRectangle = {
  width: number;
  height: number;
};

// Type guard to check if a number is an integer
export function isInt(value: number): value is Int {
  return Number.isInteger(value) && Number.isFinite(value);
}

// Safe constructor that throws on invalid input
export function Int(value: number): Int {
  if (!isInt(value)) {
    throw new Error(`Value ${value} is not a valid integer`);
  }
  return value;
}

const a = Int(4);
