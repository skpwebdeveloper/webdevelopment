/**
 * Resolves static public/ and unbundled asset paths against Vite's configured BASE_URL
 * so images load both on local root ('/') and GitHub Pages ('/webdevelopment/').
 */
export function resolveAssetUrl(assetPath: string): string {
  if (!assetPath) {
    return assetPath;
  }
  if (/^(https?:|data:|blob:|mailto:|tel:)/i.test(assetPath)) {
    return assetPath;
  }

  const base =
    typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL
      ? import.meta.env.BASE_URL
      : '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (normalizedBase !== '/' && assetPath.startsWith(normalizedBase)) {
    return assetPath;
  }

  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${normalizedBase}${cleanPath}`;
}
