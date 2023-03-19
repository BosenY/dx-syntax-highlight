export const camelize = (str: string): string => {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase());
};

export const lowerlize = (str: string): string => {
  return str.toLowerCase();
};

export const bigCamelize = (str: string): string => {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase());
};
