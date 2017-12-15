import { IQuery, isProviderQuery } from '@autoschedule/queries-fn';

import { IAgentContext, IErrorContext } from '../data-structures/context.interface';
import { IDependency } from '../data-structures/dependency.interface';

export const resolveConflicts = (dependency: IDependency) => (
  context: IErrorContext
): Promise<ReadonlyArray<IQuery>> => {
  const victim = context.queries.find(q => q.id === context.queryId);
  if (!victim) {
    return Promise.reject('no corresponding id');
  }
  if (isProviderQuery(victim)) {
    const owner = context.queries.find(q => q.id === victim.provide);
    if (!owner) {
      return Promise.resolve(context.queries.filter(q => q.id === victim.id));
    }
    const agentContext: IAgentContext = {
      id: owner.id,
      provider: victim.name,
    };
    return dependency.agentCourier.ask(owner.id, agentContext);
  }
  const agentContext2: IAgentContext = {
    id: victim.id,
  };

  return dependency.agentCourier.ask(victim.id, agentContext2);
};
