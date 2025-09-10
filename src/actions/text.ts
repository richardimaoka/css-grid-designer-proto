import { TextContent } from "../types";

function getContent(textContent: TextContent): string {
  return textContent.content;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("getContent should return the content string", () => {
    const textContent: TextContent = {
      content: "Hello World",
    };
    expect(getContent(textContent)).toBe("Hello World");
  });
}

function changeContent(
  textContent: TextContent,
  newContent: string
): TextContent {
  return {
    ...textContent,
    content: newContent,
  };
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("changeContent should change the content", () => {
    const textContent: TextContent = {
      content: "Original",
    };
    const result = changeContent(textContent, "Updated");
    expect(getContent(result)).toBe("Updated");
    expect(getContent(textContent)).toBe("Original"); // Original textContent should not be modified
  });
}
