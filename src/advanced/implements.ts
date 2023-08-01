type Animal_ = {
  name: string;
  voice(): string;
};

function log(animal: Animal_) {
  console.log(`Animal ${animal.name}: ${animal.voice}`);
}

class Cat implements Animal_ {
  constructor(public name: string) {}
  voice() {
    return "meow";
  }
}

class Dog implements Animal_ {
  constructor(public name: string) {}
  voice(): string {
    return "bark";
  }
}

log(new Cat("Sally"));
log(new Dog("Jolly"));
