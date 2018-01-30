import { UnitParser, Unit } from './unit';

const UNITS: Unit[] = [
  { pattern: /^(?:(?:s(?:e(?:k(?:u(?:n(?:d(?:e(?:n)?)?)?)?)?)?)?)|(?:s(?:e(?:c(?:o(?:n(?:d(?:s)?)?)?)?)?)?))$/, factor: 1 },
  { pattern: /^(?:m(?:i(?:n(?:u(?:t(?:e(?:n|s)?)?)?)?)?)?)$/, factor: 60 },
  { pattern: /^((?:s(?:t(?:u(?:n(?:d(?:e(?:n)?)?)?)?)?)?)|(?:h(?:o(?:u(?:r(?:s)?)?)?)?))$/, factor: 60 * 60 }
];

export class TimeParser extends UnitParser {
  constructor() {
    super(UNITS);
  }
}
