import React, { useContext } from 'react';
import { useParams ,NavLink} from 'react-router-dom';  
import './Bollywood.css';
import { Store } from '../Store/StoreContextApi';
import './Details.css'
 
function Details() {
    const [contextdata] = useContext(Store);
   
    const { id } = useParams();
    const dynamicImg = contextdata[id].Category;
    console.log(dynamicImg)

    const selectedItem = contextdata.find((item) => item.id === id);
    console.log(selectedItem.Movie)
    
   
    return (
        <>
        <div className='detailsDiv'>
            <div className='detailscoloumn'>
                <h1 className='topLineDetails'>This site is Best to Read Blog's</h1>
                <div className='headingDetails'>
                    <div className='EmojiRow'>
                        <img className='circle' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZcNNV6OAX_vD3pWSsWPxWK1jFexbwmBG8fKYhq-6VFUeGWDbUo50ys1Uv-JZBPEWSmE&usqp=CAU" alt="Not Found"/>
                        <div className='Detailsname'>Teesha Gupta <br></br>sep 12,2023  10min read</div>
                    </div>
                  
                    <div className="SocialLink">
                        <img  className="circleFollow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU" alt="Not Found"/>
                        <img  className="circleFollow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6lMHdoGBTbg5rYGlo_5_fSyqEJpuFnIvoMR0eqy-mwxfErJUHdj_dPVs03x3U2r--w0&usqp=CAU" alt='Not Found'/>
                        <img className='circleFollow'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt='Not Found'/>
                        <img  className="circleFollow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU" alt="Not Found"/>
                    </div>
                
                </div>
                <img src={selectedItem.poster} alt='Not Found' className='imgDetails'/>
                <h4 className='DetailsTitle'>{selectedItem.Movie}</h4>
                <p className='DetailsInfo'>{selectedItem.Heading}</p> 
            </div>
        </div>

        <div className='TextMore'>More From The Siren </div>        

        <div className='parentLatestDesk bottomparentLatest'>
            {contextdata.filter((item )=>(item.Category === dynamicImg) && (item.id%5===1 || item.id%3 === 2 || item.id%3===0)).slice(0,3).map((element,index)=>{
                                return(

                                    <div className='divLatestDesk bottomdivLatest' key={index}>
                                      <div className=' ColoumnwiseDesk bottomColoumnwise'>
                                                <NavLink to={`/details/${element.id}`}>
                                                    <img src={element.poster} alt="Not Found" className='imgDivlatestDesk bottomimgDivlatest'></img>
                                                </NavLink>    
                                                    <h3 className='imglatestheadingDesk bottomimglatestheading'>{element.Movie.slice(0,30)}</h3>
                                                    <p className='imglatestdescriptionDesk bottomimglatestdescription'>{element.Heading.slice(0,100)}</p>
                                        </div>              
                                    </div>
                                )
            })} 
                                
        </div>


                
        
        </> 
    )
}
export  default Details

