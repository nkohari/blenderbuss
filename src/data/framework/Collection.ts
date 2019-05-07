type Accumulator<T, R = T> = (curr: R, item: T, index?: number) => R;
type Comparator<T> = (a: T, b: T) => number;
type Mapper<T, R> = (item: T, index?: number, arr?: T[]) => R;
type Predicate<T> = (value: T, index?: number, array?: T[]) => boolean;

interface Item {
  id: string;
}

export class Collection<T extends Item> {
  items: T[];
  isLoading: boolean;

  constructor(attrs: Partial<Collection<T>> = {}) {
    this.items = attrs.items || [];
    this.isLoading = attrs.isLoading || false;
  }

  get length() {
    return this.items.length;
  }

  get(id: string): T | undefined {
    return this.items.find(item => item.id === id);
  }

  has(id: string): boolean {
    return this.get(id) !== undefined;
  }

  at(index: number): T {
    return this.items[index];
  }

  all() {
    return [...this.items];
  }

  find(func: Predicate<T>): T | undefined {
    return this.items.find(func);
  }

  some(func: Predicate<T>): boolean {
    return this.items.some(func);
  }

  every(func: Predicate<T>): boolean {
    return this.items.every(func);
  }

  filter(func: Predicate<T>): T[] {
    return this.items.filter(func);
  }

  map<R>(mapper: Mapper<T, R>): R[] {
    return this.items.map(mapper);
  }

  reduce<R = T>(accumulator: Accumulator<T, R>, initialValue: R): R {
    return this.items.reduce(accumulator, initialValue);
  }

  where(func: Predicate<T>): this {
    return this.next({ items: this.filter(func) });
  }

  sort(compare: Comparator<T> | string = 'id'): this {
    const items = [...this.items];

    if (typeof compare === 'string') {
      items.sort((a, b) => a[compare].localeCompare(b[compare]));
    } else {
      items.sort(compare);
    }

    return this.next({ items });
  }

  without(removedIds: string[], patch: Partial<Collection<T>> = {}): this {
    const items = this.filter(item => removedIds.indexOf(item.id) === -1);
    return this.next({ ...patch, items });
  }

  merge(newItems: T[], patch: Partial<Collection<T>> = {}): this {
    const hash = [...this.items, ...newItems].reduce((keymap, item) => {
      keymap[item.id] = item;
      return keymap;
    }, {});
    const items = Object.keys(hash).map(id => hash[id]);
    return this.next({ ...patch, items });
  }

  next(patch: Partial<Collection<T>>): this {
    const ctor = this.constructor as any;
    return new ctor({
      ...(this as any),
      ...patch,
    });
  }
}

export default Collection;
