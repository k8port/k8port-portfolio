import { act, renderHook } from "@testing-library/react-hooks";
import { useFloating } from "@floating-ui/react";

describe("useFloating", () => {
    it("should render", () => {
        renderHook(() => useFloating());
    });