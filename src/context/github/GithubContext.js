import { createContext } from "react";
// import { useState } from "react";
import { useReducer } from "react";
import githubreducer from "./GitHubReducer";
const GithubContext=createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_APP_TOKEN=process.env.REACT_APP_GITHUB_APP_TOKEN


export const GithubProvider=({children})=>{
    // const [users,setUsers]=useState([])
    // const [loading,setLoading]=useState(true)
        //set loading 
        const setLoading=()=>dispatch({
            type:'SET_LOADING'
        })

    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch]=useReducer(githubreducer,initialState)


    //remove search results 
    const removeUsers=()=>{
        dispatch({
            type:'REMOVE',
            
        })
    }
    //get search results 
    const searchUsers=async(text)=>{
        setLoading()
        const params=new URLSearchParams({
            q:text
        })
        const response =await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization:`token${GITHUB_APP_TOKEN}`,
                'Content-Type': 'application/json',
            },
        })
        const {items}=await response.json()
        // setUsers(data)
        // setLoading(false)

        dispatch({
            type:'GET_USERS',
            payload:items
        })
       
  
    }


    //function to search for the single user 
    const getUser=async(login)=>{
        setLoading()

        const response=await fetch(`${GITHUB_URL}/users/${login}`,{
            headers:{
                Authorization:`token${GITHUB_APP_TOKEN}`
            },
        })
        console.log(response)

        if(response.status===404){
            window.location='/notfound'
        }else{
            const data=await response.json();
            console.log(data)
            dispatch({
                type:'GET_USER',
                payload:data
            })
        }

      
    
    }   


    const getUserRepos=async(login)=>{
        setLoading()
       
        const response =await fetch(`${GITHUB_URL}/users/${login}/repos`,{
            headers:{
                Authorization:`token${GITHUB_APP_TOKEN}`,
                'Content-Type': 'application/json',
            },
        })
        const data=await response.json()
        // setUsers(data)
        // setLoading(false)

        dispatch({
            type:'GET_REPOS',
            payload:data
        })
       
  
    }


    
    return <GithubContext.Provider value={{
        users:state.users,
        loading:state.loading,
        user:state.user,
        repos:state.repos,
        searchUsers,
        removeUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext