class Tailwind {
  private classNames: string[] = [];

  static builder(): Tailwind {
    return new Tailwind();
  }

  copy(tw: Tailwind) {
    this.classNames = [...tw.classNames, ...this.classNames];
    return this;
  }

  add(className?: string): Tailwind {
    this.classNames.push(className ?? ``);
    return this;
  }

  addIf(className?: string, condition?: boolean): Tailwind {
    if (condition) this.add(className);
    return this;
  }

  build() {
    return this.classNames.join(` `).trim();
  }
}

export default Tailwind;
