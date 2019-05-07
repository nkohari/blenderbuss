export class Storage<T> {
  key: string;
  defaultValue: T;

  constructor(key: string, defaultValue: T) {
    this.key = key;
    this.defaultValue = defaultValue;
  }

  read(): T {
    const json = localStorage.getItem(this.key);
    if (json == null) return this.defaultValue;

    let data: T;

    try {
      data = JSON.parse(json) as T;
    } catch (error) {
      data = this.defaultValue;
    }

    return data;
  }

  write(data: T) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}
