import interactive from 'next/dynamic'

const Button = interactive(() => import('../components/Button'))

export const config = {
  unstable_runtimeJS: false,
}

const Main = () => (
  <main>
    <h1>Hello World!</h1>
    <Button />
  </main>
)

export default Main
