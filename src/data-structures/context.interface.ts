import { IQuery } from '@autoschedule/queries-fn';

import { IMaterial } from './material.interface';
export interface IErrorContext {
  readonly queries: ReadonlyArray<IQuery>;
  readonly materials: ReadonlyArray<IMaterial>;
  readonly queryId: number;
}

export interface IAgentContext {
  readonly id: number;
  readonly provider?: string; // TODO: improve provider identification.
}
