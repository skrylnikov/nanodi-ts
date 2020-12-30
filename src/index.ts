export class Container<T extends object> {
  constructor(private deps: T) {}

  public get<K extends keyof T>(name: K): T[K] {
    if ('development' === process.env.NODE_ENV) {
      if (!this.deps[name]) {
        console.error(`${name} not found`);
      }
    }
    return this.deps[name];
  }

  public rebind<K extends keyof T>(name: K, value: T[K]) {
    if ('development' === process.env.NODE_ENV) {
      if (!this.deps[name]) {
        console.error(`${name} not found`);
      }
    }
    this.deps[name] = value;
  }
}
