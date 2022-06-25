function About(){
    return (
        <div>
           <h1 className="text-6xl mb-4">Github Finder</h1>
           <p className='mb-4 text-2xl font-light'>
            Hi I am <strong className="link link-primary"><a href="https://www.linkedin.com/in/sayamgandhak/">Sayam Gandhak</a></strong> and this is the
        React app to search GitHub profiles and see profile details. 
        It basically fetches all the Information from the Github Api .
        React Functionalities used in this Projects  :  <strong> useContext , useReducer , React Router , Components , Props , tailwind and daisy ui </strong>

        . U can search for users in search bar . By visiting particular user profile u can see all the related information such as Repos, Followers , Other Information  .  I made this project following traverymedia tutorials   
      </p>
     
      <p className='text-lg text-gray-400'>
       
      </p>
        </div>
    )
}

export default About