import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Store } from '../Store/StoreContextApi';
import './Bollywood.css'; // Make sure these CSS files exist
import './Bollywoodmedia.css';

function Fitness() {
    const [contextdata] = useContext(Store);

    return (
        <>
            <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Fitness</div>
                    <div className='leftHollywood'>
                        {contextdata
                            .filter((item) => item.Category === 'Fitness')
                            .map((element, index) => {
                                return (
                                    <div className='divHollywood' key={index}>
                                        <NavLink to={`/details/${element.id}`}>
                                            <img src={element.poster} alt='Not Found' className='imgHollywoodTop' />
                                        </NavLink>
                                        <div className='divcoloumnHollywood'>
                                            <div className='topHollywoodTitle'>{element.Movie.slice(0, 34)}</div>
                                            <div className='topPostHollywood'>
                                                {element.Heading.slice(0, 100)}.
                                                <div style={{ color: 'lightgray', lineHeight: '5vh' }}>
                                                    Visited: 11 August 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className='rightParentHollywood'>
                    <div className='textToppostHollywood'>Top Post</div>
                    <div className='rightHollywood'>
                        {contextdata
                            .filter((item) => item.Category === 'Fitness' && item.id >= 51 && item.id <= 64)
                            .map((element, index) => {
                                return (
                                    <div className='divHollywoodright' key={index}>
                                        <NavLink to={`/details/${element.id}`}>
                                            <img src={element.poster} alt='Not Found' className='imgHollyTop' />
                                        </NavLink>
                                        <div className='divcoloumnHolly'>
                                            <div className='topHollyTitle'>{element.Movie}
                                                <h1 className='TopPostindexing'>{index + 1}</h1>
                                                <div style={{ color: 'lightgray', lineHeight: '5vh' }}>
                                                    Visited: 11 August 2023
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className='AdvertismentBollywood'><img src="https://media4.giphy.com/media/tfeBZQCErlj7FantMq/giphy.gif?cid=ecf05e47v29ij31o7ab275ojvc0mlqnj79wrw2hb8otgfxql&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt='Not Found' /></div>
                </div>
            </div>
        </>
    );
}

export default Fitness;
