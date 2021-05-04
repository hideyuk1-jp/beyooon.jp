declare const __PATH_PREFIX__: string;

declare module '*.svg' {
  const content: any;
  export default content;
}

interface ObjectConstructor {
  keys<T>(obj: T): (keyof T)[];
}
