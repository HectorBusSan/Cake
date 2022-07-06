const API= "http://10.0.2.2:3000/usuarios";

export const saveUser=async(user)=>{
    const res= await fetch(API,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(user)
    });
    return await res.json(res);
}
export const getUser=async(username)=>{
    const res=await(fetch(`${API}/${username}`));
    return await res.json();
}