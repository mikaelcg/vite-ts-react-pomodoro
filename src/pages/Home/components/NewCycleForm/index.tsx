import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContext'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou tabalhar em</label>
      <TaskInput
        disabled={!!activeCycle}
        id="task"
        placeholder="Insira o nome da tarefa"
        list="task-suggestions"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1">Projeto 1</option>
        <option value="Projeto 2">Projeto 2</option>
        <option value="Projeto 3">Projeto 3</option>
        <option value="Projeto 4">Projeto 4</option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
