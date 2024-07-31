
import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Card from '../Component/Card';
import img1 from "../images/burger.jfif";
function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    response = await response.json();
    setFoodCat(response[0]);
    setFoodItem(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
 
 

  return (
    <div>
      <div><Navbar /></div>
      <div>
      
        <div className='carousel-Caption' style={{zIndex:"10"}}>
                <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
               
                </div>
                </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="slide1" />
                    </div>
                    <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="slide2" />
                    </div>
                    <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="slide3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
      </div>
      <div className='container'>
        {
          foodItem.length > 0 ? foodItem.map((data) => {
            return (
              <div key={data._id} className='row mb-3'>
                <div className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {
                  foodCat.length > 0 ? foodCat.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                    .map(filterCat => {
                      return (
                        <div key={filterCat._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodit={filterCat}
             
                            options={filterCat.options[0]}
                          >
                          </Card>

                        </div>
                      );
                    })
                    : <div>No such data found</div>
                }
              </div>
            );
          })
            : <div>Loading...</div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default Home;