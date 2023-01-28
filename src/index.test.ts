/* eslint-disable import/no-extraneous-dependencies */
// const TimezoneEnum = require('./index.ts');
import { expect, test } from '@jest/globals';

import TimezoneEnum from './index';

const doStuff = (thing: string) => TimezoneEnum[thing as TimezoneEnum];

test('json data is converted to an enum', () => {
  expect(doStuff('Africa/Algiers')).toBeTruthy();
});

test('trying to refer to an invalid enum fails', () => {
  expect(doStuff('Not A Timezone')).toBeFalsy();
});
