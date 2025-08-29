import { use, useState,useEffect} from "react"

const users =[{
    "id": 1,
    "nombre": "Juan",
    "email": "juan@gmail.com",
    "imagen": null,
    "perfil": "admin"
},
{
    "id": 2,
    "nombre": "Ana",
    "email": "hola@gmail.com",
    "imagen": null,
    "perfil": "user"
    }
]
export const Section = () => {
    const [cont,setCont] = useState(0)
    const [UserApi,setUserApi] = useEffect([])
    userEffect(() => {
    const handleClick = () => {
        setCont(cont + 1)
        console.log("evento de contador") + cont
    }
  return (
    <>
    <h2>Contador #{cont} {cont%2 == 0 ? "par":"impar"}</h2>
    <button onClick={handleClick}>Aumentar</button>
    <ul>
        {

            users.map(user => <li key = {user.id}>{user.nombre}</li>)
                    
        }

    </ul>
    <ul>
        {
    
    users.map({user,index} =() => {return <li key = {index}>{user.nombre} - {user.email} - {user.perfil}</li>})
        }
    </ul>
    </>
    
  )
}


