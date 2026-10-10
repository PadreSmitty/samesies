import { normalize, isUsed, allMatch, makeCode } from '../src/logic.js';
import assert from 'node:assert/strict';
const eq = (a, b) => assert.equal(normalize(a), normalize(b), `${a} vs ${b}`);
const ne = (a, b) => assert.notEqual(normalize(a), normalize(b), `${a} vs ${b}`);
eq('Border', 'border'); eq('Borders', 'border'); eq('  the border ', 'Border'); eq('Border!', 'border');
eq('Cherries', 'cherry'); eq('boxes', 'box'); eq('Mexico', 'mexico'); eq('Tennessee', 'tennessee');
eq('Ice  Cream', 'ice cream'); eq('Café', 'cafe');
ne('Adam', 'Adam & Eve'); ne('bus', 'bu'); ne('glass', 'glas');
assert.equal(normalize('Texas'), 'texa'); // known quirk, both sides normalize the same way so matching still works
eq('Texas', 'texas');
assert.ok(isUsed('Avocados', ['avocado']));
assert.ok(!isUsed('Florida', ['avocado']));
assert.ok(allMatch([{ norm: 'border' }, { norm: 'border' }]));
assert.ok(!allMatch([{ norm: 'border' }, { norm: 'wall' }]));
assert.ok(!allMatch([{ norm: 'border' }]));
assert.match(makeCode(), /^[A-HJ-NP-Z]{4}$/);
console.log('logic tests passed');
