/**
 * Класс, реализующий паттерн Наблюдатель.
 */
export default class Observable {
  /** @type {Set<observerCallback>} Множество функций типа observerCallback */
  private observers = new Set();

  /**
   * Метод, позволяющий подписаться на событие
   * @param {observerCallback} observer Функция, которая будет вызвана при наступлении события
   */
  addObserver(observer: any) {
    this.observers.add(observer);
  }

  /**
   * Метод, позволяющий отписаться от события
   * @param {observerCallback} observer Функция, которую больше не нужно вызывать при наступлении события
   */
  removeObserver(observer: any) {
    this.observers.delete(observer);
  }

  /**
   * Метод для оповещения подписчиков о наступлении события
   * @param {*} event Тип события
   * @param {*} payload Дополнительная информация
   */
  private _notify(event: string, payload: string) {
    this.observers.forEach((observer: any) => observer(event, payload));
  }
}

/**
 * Функция, которая будет вызвана при наступлении события
 * @callback observerCallback
 * @param {*} event Тип события
 * @param {*} [payload] Дополнительная информация
 */