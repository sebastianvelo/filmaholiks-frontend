class TailwindClass {
  classNames: string[] = [];

  static builder(): TailwindClass {
    return new TailwindClass();
  }

  add(className?: string): TailwindClass {
    this.classNames.push(className ?? ``);
    return this;
  }

  addIf(className?: string, condition?: boolean): TailwindClass {
    condition && this.add(className);
    return this;
  }

  build() {
    return this.classNames.join(` `).trim();
  }
}

export default TailwindClass;
