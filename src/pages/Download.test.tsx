import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { APP_STORE_URL, DOWNLOAD_URL, PLAY_STORE_URL } from "@/lib/links";
import Download from "./Download";

const IPHONE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1";
const ANDROID =
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.39 Mobile Safari/537.36";
const DESKTOP =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";

function setUserAgent(userAgent: string) {
  Object.defineProperty(navigator, "userAgent", {
    configurable: true,
    value: userAgent,
  });
}

describe("Download page", () => {
  const replace = vi.fn();

  beforeEach(() => {
    replace.mockReset();
    vi.stubGlobal("location", { ...window.location, replace });
  });

  it("shows one download button for a desktop browser", () => {
    setUserAgent(DESKTOP);
    render(
      <MemoryRouter>
        <Download />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute("href", DOWNLOAD_URL);
    expect(screen.queryByRole("link", { name: "Download on the App Store" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Download on Google Play" })).not.toBeInTheDocument();
    expect(screen.getByText("Free on iPhone and Android")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contribute via Paystack/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contribute via PayPal/ })).toBeInTheDocument();
    expect(replace).not.toHaveBeenCalled();
  });

  it("sends an iPhone straight to the App Store", () => {
    setUserAgent(IPHONE);
    render(
      <MemoryRouter>
        <Download />
      </MemoryRouter>,
    );

    expect(replace).toHaveBeenCalledWith(APP_STORE_URL);
    expect(screen.queryByRole("link", { name: "Download" })).not.toBeInTheDocument();
  });

  it("sends an Android phone straight to Google Play", () => {
    setUserAgent(ANDROID);
    render(
      <MemoryRouter>
        <Download />
      </MemoryRouter>,
    );

    expect(replace).toHaveBeenCalledWith(PLAY_STORE_URL);
    expect(screen.queryByRole("link", { name: "Download" })).not.toBeInTheDocument();
  });
});
