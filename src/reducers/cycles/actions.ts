import { Cycle } from './reducer'

export enum CyclesActionsTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: CyclesActionsTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: CyclesActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export const interruptCurrentCycleAction = () => {
  return {
    type: CyclesActionsTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
