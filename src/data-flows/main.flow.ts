import { IQuery } from '@autoschedule/queries-fn';

import { IContext } from '../data-structures/context.interface';
import { IDependency } from '../data-structures/dependency.interface';

export const resolveConflicts = (dependency: IDependency) => (context: IContext): Promise<ReadonlyArray<IQuery>> => {
  return Promise.resolve(context.queries);
};
