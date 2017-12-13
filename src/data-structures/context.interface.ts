import { IQuery } from '@autoschedule/queries-fn';
export interface IContext {
  queries: ReadonlyArray<IQuery>;
}
