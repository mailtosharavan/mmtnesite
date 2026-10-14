const CONTACT_EMAIL = "mail@mindsmiratus.com";

export function openGmailCompose(subject: string, fields: Array<[string, string | undefined]>) {
  const body = fields
    .map(([label, value]) => `${label}: ${value?.trim() || "Not provided"}`)
    .join("\n");
  const params = new URLSearchParams({
    authuser: CONTACT_EMAIL,
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
    su: subject,
    body,
  });
  const composeUrl = `https://mail.google.com/mail/?${params.toString()}`;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const width = Math.min(720, window.screen.availWidth);
  const height = Math.min(760, window.screen.availHeight);
  const left = Math.max(0, window.screen.availLeft + window.screen.availWidth - width);
  const top = Math.max(0, window.screen.availTop + window.screen.availHeight - height);
  const features = isMobile
    ? "popup=no"
    : `popup=yes,width=${width},height=${height},left=${left},top=${top}`;
  const composeWindow = window.open(composeUrl, "gmailCompose", features);

  if (composeWindow) {
    composeWindow.opener = null;
  } else {
    window.location.assign(composeUrl);
  }
}
