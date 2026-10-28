import assert from 'node:assert/strict';
import { alertsFor, render, LINES } from '../functions/alerts.js';

const P = { a: { name: 'Mom' }, b: { name: 'Jake' }, c: { name: 'Cara' } };
const base = { code: 'ABCD', hostUid: 'a', players: P, order: ['a', 'b', 'c'], status: 'playing', round: 2, revealed: 1, submitted: {}, history: [{ round: 1, words: [] }], nudges: {} };
const kinds = (xs) => xs.map((x) => `${x.kind}:${x.uids.join(',')}`).sort();

// joined
assert.deepEqual(kinds(alertsFor({ ...base, status: 'lobby', order: ['a'] }, { ...base, status: 'lobby', order: ['a', 'b'] })), ['joined:a']);
// started: not the host
assert.deepEqual(kinds(alertsFor({ ...base, status: 'lobby', history: [] }, { ...base, status: 'playing', round: 1, history: [] })), ['started:b,c']);
// last one waiting
assert.deepEqual(kinds(alertsFor({ ...base, submitted: { a: true } }, { ...base, submitted: { a: true, b: true } })), ['lastOne:c']);
// reveal skips last submitter
const words = [{ uid: 'a', word: 'Taco' }, { uid: 'b', word: 'Volcano' }, { uid: 'c', word: 'Moon' }];
const r = alertsFor({ ...base, submitted: { a: true, b: true } }, { ...base, round: 3, revealed: 2, submitted: {}, history: [...base.history, { round: 2, words }] });
assert.deepEqual(kinds(r), ['reveal:a,b']);
assert.equal(r[0].words, '“Taco”, “Volcano” and “Moon”');
// won
assert.deepEqual(kinds(alertsFor(base, { ...base, status: 'won', winWord: 'Fire', history: [...base.history, { round: 2, words }] })), ['won:a,b,c']);
// won by vote
assert.deepEqual(kinds(alertsFor({ ...base, vote: { round: 1, by: 'a', result: null } }, { ...base, status: 'won', wonBy: 'vote', winWord: 'Fire', vote: { round: 1, by: 'a', result: 'yes' } })), ['wonVote:a,b,c']);
// nudge
assert.deepEqual(kinds(alertsFor(base, { ...base, nudges: { c: { at: 5, from: 'Mom' } } })), ['nudge:c']);
assert.deepEqual(kinds(alertsFor({ ...base, nudges: { c: { at: 5, from: 'Mom' } } }, { ...base, nudges: { c: { at: 5, from: 'Mom' } } })), []);
// vote
assert.deepEqual(kinds(alertsFor(base, { ...base, vote: { round: 1, by: 'b', yes: {}, no: {}, result: null } })), ['vote:a,c']);
assert.deepEqual(kinds(alertsFor({ ...base, vote: { round: 1, by: 'b', result: null } }, { ...base, vote: { round: 1, by: 'b', yes: { a: true }, result: null } })), []);
// rematch
const rm = alertsFor({ ...base, status: 'won' }, { ...base, status: 'won', next: 'WXYZ', nextBy: 'a' });
assert.deepEqual(kinds(rm), ['rematch:b,c']); assert.equal(rm[0].code, 'WXYZ');
// nothing changes -> nothing
assert.deepEqual(alertsFor(base, base), []);
// every line renders with sample facts
const facts = { host: 'Mom', name: 'Jake', words: '“Taco” and “Moon”', round: 3, count: 2, from: 'Mom', word: 'Fire', n: 4 };
for (const [k, list] of Object.entries(LINES)) for (const f of list) { const m = f(facts); assert.ok(m.title && m.body && !/undefined/.test(m.title + m.body), k); }
assert.ok(render({ kind: 'nudge', from: 'Mom' }).title.length);
console.log('alert tests passed');
