import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o container produtos', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = renderizaComProvider(<Produtos />)
    debug()
  })
})
