export const UserRoles = () => {
  const roles = [
    {id: 1, title: 'ADMIN'},
    {id: 2, title: 'USER'},
    {id: 3, title:'GUEST'}
  ]

  const filterRoles = (roles: Array<{id: number, title: string}>) => {
    return roles.filter(role => role.id !== 1)
  }

  return (
    <>
      <ul>
        {filterRoles(roles).map(role => (
          <li key={role.id}>{role.title}</li>
        ))}
      </ul>
    </>
  )
}