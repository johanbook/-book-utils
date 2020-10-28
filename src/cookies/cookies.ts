/** Sets cookie.
 * NB: Overides existing cookies by same name. */
export function set(name: string, value: string, days: number): void {
  const date = new Date();

  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1_000);
  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${name}=${value};${expires};path=/;`;
}

/** Gets value of cookie by name */
export function get(cname: string): string {
  const name = `${cname}=`;
  const segments = document.cookie.split(";");

  for (const segment_ of segments) {
    const segment = segment_.trim();

    if (segment.startsWith(name)) {
      return segment.substring(name.length, segment.length);
    }
  }

  return "";
}
