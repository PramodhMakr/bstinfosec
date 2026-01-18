export const handleMailto = (email: string, subject?: string, body?: string) => {
  const mailtoLink = subject || body 
    ? `mailto:${email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`
    : `mailto:${email}`;
  
  // Try multiple methods to open mail client
  try {
    // Method 1: window.open (most reliable)
    window.open(mailtoLink, '_blank');
  } catch (error) {
    try {
      // Method 2: window.location.href (fallback)
      window.location.href = mailtoLink;
    } catch (error2) {
      // Method 3: Create and click a temporary link
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
