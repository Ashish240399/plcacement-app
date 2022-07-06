import React, { useEffect, useState } from 'react'
import "./page.css"
function Mainpage() {
    const [items,setItems]=useState([]);
    const [page,setPage]=useState(1);
    const [loader,setLoader]=useState(true);
    const fetchData=async(page)=>{
        if(page<=6){
            const data=await fetch(`https://rickandmortyapi.com/api/character/?name=rick&page=${page}`);
            const res=await data.json();
            if(page>1){
                let dataArr=[
                    ...items,...res.results
                ]
                setItems(dataArr)
            }
            else{
                setItems(res.results)
            }
            setLoader(false);
        }
        
    }
    useEffect(()=>{
        
        fetchData(page);
    },[page])
    
    function loadMoreData(e){
        
        let bottom=e.target.scrollHeight - e.target.clientHeight-e.target.scrollTop < 100;
        console.log(bottom)
        if(bottom){
            let page_req=page+1;
            fetchData(page_req);
            setLoader(true)
            setPage(page_req)
        }
    }
    console.log(items)
  return (
    <div onScroll={loadMoreData} className="main">
        {items.length>0 && items.map((el,i)=>(
            <div className='single' key={i}>
                <p>{el.name}</p>
                <p className={`${el.status=="Alive"?"green":"gray"}`}></p>
                <p>{el.status}-</p>
                <p>{el.species}</p>
            </div>
        ))}
        {page<6?<h2>Loading</h2>:<h1>You reached end</h1>}
    </div>
  )
}

export default Mainpage