import Chance from 'chance';

export class Faker {
  private readonly _chance: Chance.Chance;
  constructor() {
    this._chance = new Chance();
  }

  email(): string {
    return this._chance.email();
  }

  uid(): string {
    return this._chance.guid();
  }

  string(length = 10): string {
    return this._chance.string({ length });
  }

  word(): string {
    return this._chance.word();
  }

  firstName(): string {
    return this._chance.first();
  }

  lastName(): string {
    return this._chance.last();
  }

  mobilePhone(): string {
    return this._chance.phone({ formatted: false });
  }

  integer({ min = 0, max = 100 }): number {
    return this._chance.integer({ min, max });
  }

  country(): string {
    return this._chance.country({ full: true });
  }

  state(): string {
    return this._chance.state({ full: true });
  }

  city(): string {
    return this._chance.city();
  }

  hash(length = 20): string {
    return this._chance.hash({ length });
  }

  url(): string {
    return this._chance.url();
  }
}

export const faker = new Faker();
