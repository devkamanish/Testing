
export const fetchUsers = async ()=>{
    const response =  await fetch("https://dummyjson.com/users")
    const data = await response.json();
    console.log(data.users)
    return data.users;
    
}

