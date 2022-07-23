const API= "http://10.0.2.2:3000/usuarios";
const API2= "http://10.0.2.2:3000/productos"

export const saveUser=async(user)=>{
    const res= await fetch(API,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(user)
    });
    return await res.json();
}
export const getUser=async(log)=>{
    const res=await fetch(`${API}/login`,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(log)
    });
    return await res.json();
}
export const saveProduct= async(pr)=>{
    const res= await fetch(API2,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(pr)
    });
    return await res.json();
}