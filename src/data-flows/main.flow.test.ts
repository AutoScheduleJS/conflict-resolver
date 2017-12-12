import test from 'ava';

import { IContext } from '../data-structures/context.interface';
import { IDependency } from '../data-structures/dependency.interface';

import { resolveConflicts } from './main.flow';

test('will return queries', async t => {
  const dependency: IDependency = { agentCourier: null };
  const context: IContext = { queries: [] };
  const result = await resolveConflicts(dependency)(context);
  t.true(Array.isArray(result));
  t.true(context.queries.every((q, i) => q === result[i]));
});
