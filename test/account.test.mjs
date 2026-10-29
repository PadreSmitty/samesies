import assert from 'node:assert/strict';
import { swapUid, moveGame, scrubGame, GONE_NAME } from '../functions/account.js';
import { isRude } from '../src/rude.js';

const A = 'guestGUESTguestGUESTguest01';
const B = 'acctACCTacctACCTacctACCTac02';
const C = 'otherOTHERotherOTHERother03';
class Stamp { constructor() { this.s = 1; } }
const stamp = new Stamp();

const game = {
  code: 'ABCD', hostUid: A, status: 'playing', round: 2, revealed: 1, createdAt: stamp,
  players: { [A]: { name: 'Mo', joinedAt: 1 }, [C]: { name: 'Cy', joinedAt: 2 } },
  order: [A, C], submitted: { [A]: true }, nudges: { [A]: { at: 1, from: 'Cy' } },
  history: [{ round: 1, words: [{ uid: A, name: 'Mo', word: 'cat' }, { uid: C, name: 'Cy', word: 'dog' }] }],
  reactions: { [`1_${A}`]: { [C]: '😂' }, [`1_${C}`]: { [A]: '🔥' } },
  vote: { round: 1, by: A, yes: { [A]: true }, no: {}, result: null },
};

// Moving a guest's game into an account
const moved = moveGame(game, A, B);
assert.equal(moved.hostUid, B);
assert.deepEqual(moved.order, [B, C]);
assert.ok(moved.players[B] && !moved.players[A]);
assert.equal(moved.submitted[B], true);
assert.equal(moved.history[0].words[0].uid, B);
assert.ok(moved.reactions[`1_${B}`] && moved.reactions[`1_${C}`][B] === '🔥');
assert.equal(moved.vote.by, B);
assert.equal(moved.createdAt, stamp, 'timestamps untouched');
assert.ok(!JSON.stringify(moved).includes(A));
assert.equal(moveGame(game, 'nobody', B), null);
assert.equal(moveGame({ ...game, players: { ...game.players, [B]: { name: 'x' } } }, A, B), null, 'already in it');
assert.equal(swapUid(5, A, B), 5);

// Deleting an account
const two = scrubGame(game, A);
assert.equal(two.players[A].name, GONE_NAME, 'two-player game: renamed, kept');
assert.equal(two.history[0].words[0].name, GONE_NAME);
assert.equal(two.history[0].words[1].name, 'Cy');
assert.ok(!two.nudges[A]);
assert.ok(!('createdAt' in two));
const D = 'dddDDDdddDDDdddDDDdddDDDdd04';
const three = scrubGame({ ...game, players: { ...game.players, [D]: { name: 'Di' } }, order: [A, C, D], submitted: { [C]: true, [D]: true } }, A);
assert.ok(!three.players[A], 'three players: taken out');
assert.deepEqual(three.order, [C, D]);
assert.equal(three.hostUid, C);
assert.equal(three.revealed, 2, 'everyone left was in, so the round flips');
const won = scrubGame({ ...game, status: 'won', players: { ...game.players, [D]: { name: 'Di' } }, order: [A, C, D] }, A);
assert.equal(won.players[A].name, GONE_NAME, 'finished game: renamed only');
assert.equal(scrubGame(game, 'nobody'), null);
console.log('account tests passed');

// Family-friendly filter
for (const w of ['Scunthorpe', 'class', 'bat', 'butt', 'crazy', 'Kiss hit', 'peacock', 'Moby Dick', 'Shiitake', 'pussy willow', 'assassin', 'raccoon', 'Dickens', 'cocktail', 'Hancock']) assert.equal(isRude(w), false, w);
for (const w of ['fuck', 'F U C K', 'sh1t', 'Bullshit', 'fuckface', 'bitches', 'Asshole']) assert.equal(isRude(w), true, w);
console.log('filter tests passed');
