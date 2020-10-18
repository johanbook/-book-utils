/** Set cookie.
 * NB: Overides existing cookies by same name. */
export function set(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/;";
}

/** Get value of cookie by name */
export function get(cname: string) {
  const name = cname + "=";
  const segments = document.cookie.split(";");
  for (var i = 0; i < segments.length; i++) {
    const segment = segments[i].trim();
    if (segment.indexOf(name) === 0) {
      return segment.substring(name.length, segment.length);
    }
  }
  return "";
}
