import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  console.log(cycles)

  return (
    <HistoryContainer>
      <h1>Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Inicio</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
