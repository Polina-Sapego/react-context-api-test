import { useContext, useState } from "react"
import UserContext from "../context/UserContext"


function ChangeUser( {addUser }) {
    const {user, setUser} = useContext(UserContext)
    const [userform, setUserform] = useState('')

    function handleFromSubmit(event) {
        event.preventDefault()
        addUser(userform)
        setUserform('')
        
       
     }

  return (
    <>
    <form  onSubmit={handleFromSubmit}>
    <input value={userform}
    onChange={(e) => setUserform(e.target.value)}
    ></input>
    <button type="submit">
        ChangeUser
        </button>
        </form>
        </>
  )
}

export default ChangeUser