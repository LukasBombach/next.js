import interactive from 'next/interactive'
import Nested from '../components/static-with-interactive-dep'

const Button = interactive(() => import('../components/interactive-button'))

export const config = {
  unstable_runtimeJS: true,
}

export default () => (
  <div>
    <h1>Hello World!</h1>
    <Button>click me</Button>
    <Nested />
  </div>
)
