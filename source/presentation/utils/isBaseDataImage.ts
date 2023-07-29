export function isBaseDataImage(image: string): boolean {
  return /^data:((?:\w+\/(?:(?!;).)+)?)((?:;[\w\W]*?[^;])*),/gi.test(image);
}
