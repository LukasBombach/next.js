export default function InteractiveButton(props) {
  return (
    <button
      onClick={() => {
        alert('yay')
      }}
      {...props}
    />
  )
}
