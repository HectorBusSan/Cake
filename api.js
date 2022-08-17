const API= "http://10.0.2.2:3000/usuarios";
const API2= "http://10.0.2.2:3000/productos"
const API3= "http://10.0.2.2:3000/upload";
const API4= "http://10.0.2.2:3000/pedidos";
const API5= "http://10.0.2.2:3000/ventas";


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
export const uploadI= async(img)=>{
    const res=await fetch(API3,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(img)
    })
    return await res.json();
}

// export const addImageToListing= async(listingId,image)=>{
//     const payload= new FormData();
//     payload.append("image",image);

//     if(image.isCoverImage){
//         payload.append("isCoverImage",true);
//     }
//     const config={
//         body:payload,
//         method:"POST",
//         headers:{
//             "Content-Type":"multipart/form-data",
//         },
//     };
//     const response = await request(`listings/${listingId}/image`,config);
//     return response;
// }

export const sendOrder=async(order)=>{
    const res=await fetch(API4,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(order)
    })
    return await res.json();
}
export const orders=async()=>{
    const res= await fetch(API4)
    return await res.json();
}
export const deleteOrder=async(order)=>{
    const res= await fetch(`${API4}/${order}`,{
        method:"DELETE",
    })
    return await res.json();
}
export const updateOrder=async(order)=>{
    const res=await fetch(`${API4}/${order}`,{
        method:"PUT",
    })
    return res;
}
export const sellOrder=async(order)=>{
    const res=await fetch(API5,{
        method:"POST",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(order)
    })
    return await res.json();
}