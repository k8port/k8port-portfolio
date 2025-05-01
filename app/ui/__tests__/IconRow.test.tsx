import { render, screen } from "@testing-library/react";
import IconRow from "@/app/ui/icons/IconRow"; // Adjust path if needed
import { getFontAwesomeIcon } from "@/app/styles/icons"; // Mocked function
import "@testing-library/jest-dom";

// Mock getFontAwesomeIcon to return a dummy icon component
jest.mock("@/app/styles/icons", () => ({
  getFontAwesomeIcon: jest.fn((name) => {
    return ({ className }: { className?: string }) => (
      <div data-testid={`icon-${name}`} className={className}>
        {name}
      </div>
    );
  }),
}));

describe("IconRow Component", () => {
  const mockIcons = [
    { name: "Hammer", className: "text-red-500" },
    { name: "Screwdriver", className: "text-blue-500" },
  ];

  it("renders all icons correctly", () => {
    render(<IconRow icons={mockIcons} />);

    // Verify icons are rendered
    expect(screen.getByTestId("icon-Hammer")).toBeInTheDocument();
    expect(screen.getByTestId("icon-Screwdriver")).toBeInTheDocument();

    // Check if class names are applied correctly
    expect(screen.getByTestId("icon-Hammer")).toHaveClass("text-red-500");
    expect(screen.getByTestId("icon-Screwdriver")).toHaveClass("text-blue-500");
  });

  it("applies default class when no custom class is provided", () => {
    render(<IconRow icons={[{ name: "Wrench" }]} />);

    expect(screen.getByTestId("icon-Wrench")).toHaveClass("text-blackplum");
  });

  it("does not render anything if an invalid icon name is provided", () => {
    (getFontAwesomeIcon as jest.Mock).mockReturnValueOnce(null); // Mock returning null

    render(<IconRow icons={[{ name: "InvalidIcon" }]} />);

    expect(screen.queryByTestId("icon-InvalidIcon")).not.toBeInTheDocument();
  });
});
