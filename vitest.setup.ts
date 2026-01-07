import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

if (!window.matchMedia) {
  window.matchMedia = (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    } as MediaQueryList;
  };
}

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserverMock;
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (cb: FrameRequestCallback) =>
    window.setTimeout(() => cb(Date.now()), 16);
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (id: number) => window.clearTimeout(id);
}

if (!HTMLElement.prototype.setPointerCapture) {
  HTMLElement.prototype.setPointerCapture = () => {};
}

if (!HTMLElement.prototype.releasePointerCapture) {
  HTMLElement.prototype.releasePointerCapture = () => {};
}

vi.mock("next/image", () => {
  return {
    default: (
      props: React.ComponentProps<"img"> & {
        src: string | { src: string };
        fill?: boolean;
        priority?: boolean;
      }
    ) => {
      const src = typeof props.src === "string" ? props.src : props.src.src;
      const { fill: _fill, priority: _priority, ...rest } = props;
      void _fill;
      void _priority;
      return React.createElement("img", { ...rest, src, alt: props.alt ?? "" });
    },
  };
});

class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];

  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = IntersectionObserverMock;
}

vi.mock("next/link", () => {
  return {
    default: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) =>
      React.createElement("a", { href, ...props }, children),
  };
});
