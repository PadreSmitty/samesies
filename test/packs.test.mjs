import assert from 'node:assert/strict';
import { PACKS, deal, pickShout } from '../src/packs.js';
import { T } from '../src/strings.js';
import { isRude } from '../src/rude.js';
import { normalize } from '../src/logic.js';

for (const id of ['zoo', 'sports']) {
  const p = PACKS[id];
  // Ten shouts each, all different
  assert.equal(T.packs[id].shouts.length, 10, id);
  assert.equal(new Set(T.packs[id].shouts).size, 10, id);
  // Words: no repeats (as the game sees them), nothing the family filter would block
  const norms = p.words.map((w) => normalize(w.word));
  assert.equal(new Set(norms).size, norms.length, `${id} has a repeated word`);
  p.words.forEach((w) => assert.ok(!isRude(w.word), `${id}: ${w.word}`));
  // Deals: five different words, always at least one everyone knows
  for (let i = 0; i < 300; i++) {
    const d = deal(p.words, 5);
    assert.equal(d.length, 5);
    assert.equal(new Set(d.map((w) => w.word)).size, 5);
    assert.ok(d.some((w) => !w.def), `${id} deal with no known word`);
    d.forEach((w) => assert.equal(typeof w.def, 'string'));
  }
}
assert.equal(PACKS.zoo.words.length, 170);
assert.equal(PACKS.sports.words.length, 168);

// Shouts never repeat twice in a row
let last = null;
for (let i = 0; i < 500; i++) { const s = pickShout(T.packs.zoo.shouts, last); assert.notEqual(s, last); last = s; }
assert.equal(pickShout(undefined, null), null);
assert.equal(pickShout(['Only'], 'Only'), 'Only');
console.log('pack tests passed');
