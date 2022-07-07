import React, { useContext, useEffect, useState } from 'react'
import { DetailedContext } from './context/detailedContext';
import { SearchedContext } from './context/searchContext';
import DetailsPage from './DetailedPage';
import "./page.css"
function Mainpage() {
    const {searched}=useContext(SearchedContext);
    const {findDetails}=useContext(DetailedContext);
    const [items,setItems]=useState();
    const [page,setPage]=useState(1);
    const [pop,setPop]=useState(false)
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
        
        let bottom=e.target.scrollHeight - e.target.clientHeight-e.target.scrollTop < 50;
        console.log(bottom)
        if(bottom){
            setTimeout(()=>{
                let page_req=page+1;
                setPage(page_req)
            },2000)
            
            //fetchData(page_req);
            setLoader(true)
        }
    }
    
    console.log(items)
    // console.log(searched)

  return (
    <div onScroll={loadMoreData} className="main">
        {items && items.filter((el)=>el.name.includes(searched)).map((el,i)=>(
            <div onClick={()=>{
                // <DetailsPage value={el}/>
                <DetailsPage value={el} value1={pop} />
                setPop(!pop);
                findDetails(el)
            }} className='single' key={i}>
                <div className='left-part'>
                    <img className='avatar' src={el.image}/>
                    <p>{el.name}</p>
                </div>
                <div className='right-part'>
                    <p className={`${el.status==="Alive"?"green":"gray"}`}></p>
                    <p>{el.status}-</p>
                    <p>{el.species}</p>
                </div>
                
            </div>
            
        ))}
        {page<6?<h3>Loading...</h3>:<h1>You reached end</h1>}
    </div>
  )
}

export default Mainpage