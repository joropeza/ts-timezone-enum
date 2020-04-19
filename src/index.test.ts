// const TimezoneEnum = require('./index.ts');
import TimezoneEnum from './index';

const doStuff = (thing: TimezoneEnum) => {
  console.log(thing);
};

test('json data is converted to an enum', () => {
  doStuff(TimezoneEnum['Africa/Algiers']);
});
