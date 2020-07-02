;(() => {
  console.log('Button script loaded')
})()

const Button = () => (
  <button onClick={() => console.log('Interaction works')}>Click me</button>
)

export default Button
