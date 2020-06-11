import interactive from 'next/interactive'

const Button = interactive(() => import('./interactive-nested-button'))

export default () => (
  <div>
    <h1>Nested static with interactive component</h1>
    <Button>click me</Button>
  </div>
)
