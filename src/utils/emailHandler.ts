export const openMailClient = (email: string, subject?: string, body?: string) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isMacOS = /Macintosh/.test(navigator.userAgent);

  let mailtoLink = `mailto:${email}`;

  if (subject) {
    mailtoLink += `?subject=${encodeURIComponent(subject)}`;
  }

  if (body) {
    const separator = subject ? '&' : '?';
    mailtoLink += `${separator}body=${encodeURIComponent(body)}`;
  }

  // For iOS, try multiple methods
  if (isIOS || isMacOS) {
    // Try mailto first
    window.location.href = mailtoLink;

    // If mailto doesn't work, show fallback after a delay
    setTimeout(() => {
      if (document.hidden === false) {
        // Mailto might have opened, check if page is still in focus
        return;
      }
      // If we're still here, mailto likely didn't work
      showMailFallback(email);
    }, 1500);
  } else {
    // For other devices, use standard mailto
    window.location.href = mailtoLink;
  }
};

export const showMailFallback = (email: string) => {
  // Show alert with email for manual copying on iOS
  alert(
    `Unable to open mail client. Please copy this email address and open your mail app:\n\n${email}`
  );

  // Copy to clipboard as a backup
  navigator.clipboard.writeText(email).then(() => {
    alert('Email address copied to clipboard!');
  });
};

export const openMailClientWithFallback = (email: string, subject?: string, body?: string) => {
  const mailtoLink = createMailtoLink(email, subject, body);

  // Try to open mailto
  const mailWindow = window.open(mailtoLink);

  // Fallback if window is blocked
  if (!mailWindow) {
    // Fallback to direct link
    window.location.href = mailtoLink;
  }
};

export const createMailtoLink = (email: string, subject?: string, body?: string): string => {
  let link = `mailto:${email}`;
  const params: string[] = [];

  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }

  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }

  if (params.length > 0) {
    link += `?${params.join('&')}`;
  }

  return link;
};
