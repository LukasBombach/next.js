export const config = {
  unstable_runtimeJS: false,
}

const Main = () => (
  <main>
    <h1>Hello World!</h1>
    <button onClick={() => console.log('Interaction works')}>Click me</button>
  </main>
)

export default Main
