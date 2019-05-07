import { Smoothie } from 'src/data';
import { Storage } from './Storage';
import * as data from './starterData.json';

const LOCAL_STORAGE_KEY = 'smoothie-book/smoothies';
const SIMULATED_DELAY_MS = 0;

class MockApiClient {
  storage: Storage<Record<string, Smoothie>>;

  constructor(storage: Storage<Record<string, Smoothie>>) {
    this.storage = storage;
  }

  async loadAllSmoothies(): Promise<Smoothie[]> {
    const items = this.storage.read();
    return this.simulateDelay(Object.values(items), SIMULATED_DELAY_MS);
  }

  async loadSmoothie(id: string): Promise<Smoothie> {
    const items = this.storage.read();
    return this.simulateDelay(items[id], SIMULATED_DELAY_MS);
  }

  async upsertSmoothie(smoothie: Smoothie): Promise<Smoothie> {
    const items = this.storage.read();
    items[smoothie.id] = smoothie;
    this.storage.write(items);
    return smoothie;
  }

  private simulateDelay<T>(result: T, delay: number): Promise<T> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result);
      }, delay);
    });
  }
}

const mockStorage = new Storage<Record<string, Smoothie>>(LOCAL_STORAGE_KEY, data);
export const Api = new MockApiClient(mockStorage);
