import test from 'ava';

import { IAgentContext, IErrorContext } from '../data-structures/context.interface';
import { IDependency } from '../data-structures/dependency.interface';

import { resolveConflicts } from './main.flow';

test('will return queries', async t => {
  const dependency: IDependency = {
    agentCourier: {
      ask: (id: number, a: IAgentContext) => {
        t.is(id, 1);
        t.is(a.id, 1);
        return [];
      },
    },
  };
  const context: IErrorContext = {
    materials: [],
    queries: [{ id: 1, kind: 0, name: 'test-query' }],
    queryId: 1,
  };
  const result = await resolveConflicts(dependency)(context);
  t.true(Array.isArray(result));
});
