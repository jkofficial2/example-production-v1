type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  additional?: string[],
  mods?: Mods
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter((cls, value) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
