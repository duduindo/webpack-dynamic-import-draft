
document.onclick = async () => {
  const script = await import('./component.js')

  console.log(script)
}
