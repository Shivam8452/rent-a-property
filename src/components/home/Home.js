import React, { useState } from 'react';
import { BiHotel } from "react-icons/bi";
import { FaChartArea, FaSink } from 'react-icons/fa';
import { listing, locations, prices, types } from '../../listing/listing';
import './Home.css'
const Home = () => {
    const [location, setLocation] = useState("")
    const [propertyType, setPropertyType] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    return (
        <>
        <h2 className='heading'>Filter</h2>
        <div className='filter'>
                <div className="select">
                    <select name="format" onChange={(e)=>{setLocation(e.target.value)}}>
                        <option selected disabled>Choose a Location</option>
                        {locations.map((data)=>{
                            return(
                                <option key={data.id} value={data.value}>{data.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="select">
                    <select name="type" onChange={(e)=>{setPropertyType(e.target.value)}}>
                        <option selected disabled>Property Type</option>
                        {types.map((data)=>{
                            return(
                                <option key={data.id} value={data.value}>{data.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="select">
                    <select name="price" onChange={(e)=>{setSelectedPrice(e.target.value)}}>
                        <option selected disabled>Price Range</option>
                        {prices.map((data)=>{
                            return(
                                <option key={data.id} value={data.value}>{data.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        <div className="container1">
            <div className="cards">
                {listing.filter((data)=>{
                    if(location === "" ){
                        return data
                    }else if(data.place.toLowerCase().includes(location.toLowerCase())){
                        return data
                    }
                }).filter((data)=>{
                    if(propertyType === "" ){
                        return data
                    }else if(data.type.toLowerCase().includes(propertyType.toLowerCase())){
                        return data
                    }
                }).filter((data)=>{
                    console.log(data.price > selectedPrice.split("-")[0] || data.price < selectedPrice.split[1])
                    if(selectedPrice === "" ){
                        return data
                    }else if(data.price > selectedPrice.split("-")[0] || data.price < selectedPrice.split[1]){
                        return data
                    }
                }).map((data) => {
                    return (
                        <section key={data.id} className="card">
                            <figure>
                                <div className="img-overlay">
                                    <img src={data.image} alt="img" />
                                </div>
                            </figure>
                            <section className="price">
                                <span>${data.price} /month</span>
                            </section>

                            <figcaption>{data.title}</figcaption>
                            <div className="card-content">
                                <p>{data.address}</p>
                                <hr />
                                <section className="icons-home">
                                    <div className="name-icon">
                                        <span>bedrooms</span>
                                        <div className="icon1">
                                            <BiHotel className='icon2' />
                                            <span>{data.features[0]}</span>
                                        </div>
                                    </div>
                                    <div className="name-icon">
                                        <span>bathrooms</span>
                                        <div className="icon1">
                                            <FaSink className='icon2' />
                                            <span>{data.features[1]}</span>
                                        </div>
                                    </div>
                                    <div className="name-icon">
                                        <span>area</span>
                                        <div className="icon1">
                                            <FaChartArea className='icon2' />
                                            <span>{data.features[2]}</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Home;