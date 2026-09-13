/**
 * Must match `basePath` in next.config.ts. Static export + GitHub Pages means
 * raw `<a href>`/`<img src>` values are not auto-prefixed like next/link and
 * next/image are — anything under /public needs this prepended by hand.
 */
export const BASE_PATH = "/PORTFOLIO";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
