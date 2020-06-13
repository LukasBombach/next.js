export default function InteractiveNestedButton(props) {
  console.log('Button has loaded')
  return (
    <button
      onClick={() => {
        alert('nested works!')
      }}
      {...props}
    />
  )
}
