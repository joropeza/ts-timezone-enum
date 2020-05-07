// const TimezoneEnum = require('./index.ts');
import TimezoneEnum from './index';

const doStuff = (thing: string) => TimezoneEnum[thing];

test('json data is converted to an enum', () => {
  expect(doStuff('Africa/Algiers').toBeTruthy());
});

test('trying to refer to an invalid enum fails', () => {
  expect(doStuff('Not A Timezone').toThrow());
});
