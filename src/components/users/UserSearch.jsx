import {useState,useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import githubreducer from '../../context/github/GitHubReducer';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch(){
    const [text,setText]=useState('')

    const {users,searchUsers,removeUsers}=useContext(GithubContext)

    const {setAlert}=useContext(AlertContext)

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleit=()=>{
        removeUsers()
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text===''){
            setAlert('Please Enter Something','error')
        }else{
            //todo -search users 
            searchUsers(text)

            setText('')
        }
    }
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md-grid-cols-2 mb-8 gap-8 ">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
 <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Search Any User"
      value={text}
      onChange={handleChange}
    />     
    <br/>
    <button type="submit" class=" px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Search</button>


                        </div>

                    </div>
                    
                </form>

            </div>
        {users.length>0 && (<div>

<button onClick={handleit}type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">  Clear</button>

</div> )}
          
        </div>
    )
}

export default UserSearch