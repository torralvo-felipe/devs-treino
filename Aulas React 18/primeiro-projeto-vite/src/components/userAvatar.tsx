export const UserAvatar = () => {
  return (
    <div> Minha foto de perfil é: 
      <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
      alt="Avatar do GitHub" 
      onClick={() => alert("Oloco bicho")}/>
    </div>
  )
}