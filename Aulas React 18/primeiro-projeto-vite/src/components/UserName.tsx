export const UserName = () => {
  let name = "Felipe"

  const formatName = (name: string) => name.toUpperCase()

  return (
    <div>Meu nome é {formatName(name)}</div>
  )
}