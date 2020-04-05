import { GenericItem } from './Interfaces';

class Generic<T extends GenericItem> {
    private _items: Array<T> = new Array<T>();

    add(item: T): void {
        this._items.push(item);
    }

    getAll(): Array<T> {
        return this._items;
    }

    first(id: number): T {
        return this._items.filter(item => {
            item.id === id
        })[0];
    }

    getLast() : T {
        
        return this._items.lastIndexOf[0];
    }

    getFirst(): T {
        return this._items[0];
    }
}

export { Generic }; 