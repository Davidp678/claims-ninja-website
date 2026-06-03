export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function countPhoneDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

export function isValidPhoneOptional(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return true;
  }
  return countPhoneDigits(trimmed) >= 7;
}
