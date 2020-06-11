export default function InteractiveNestedButton(props) {
  return (
    <button
      onClick={() => {
        alert('nested works!')
      }}
      {...props}
    />
  )
}
