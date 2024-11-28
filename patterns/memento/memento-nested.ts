class Originator<T> {
    state: T;

    save() { }
    restore() { }
}

class Memento<T> {
    state: T
}

class CareTaker<T>{
    originator: Originator<T>;
    history: Memento<T>[]
}
