// Links to other websites open in a new tab (and can't control this page via window.opener).
// In-page anchors and mailto: links behave normally.
export function externalLinkProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
