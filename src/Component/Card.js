
import React, { useEffect, useState, useRef } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    const { foodit } = props;
    let options = props.options;
    let priceOptions = Object.keys(options)
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")


        const handleAddToCart = async () => {
            let food = []
            for (const item of data) {
                if (item.id === foodit._id) {
                    food = item;

                    break;
                }
            }
            console.log(food)
            console.log(new Date())
            if (food.length !== 0) {
                if (food.size === size) {
                    await dispatch({ type: "UPDATE", id: foodit._id, price: finalPrice, qty: qty })
                    return
                }
                else if (food.size !== size) {
                    await dispatch({ type: "ADD", id: foodit._id, name: foodit.name, price: finalPrice, qty: qty, size: size})
                    // console.log("Size different so simply ADD one more to the list")
                    return
                }
                return
            }


            await dispatch({ type: "ADD", id: foodit._id, name: foodit.name, price: finalPrice, qty: qty, size: size })
            
        }
        let finalPrice = qty * parseInt(options[size]);
        useEffect(() => {
            setSize(priceRef.current.value)
        }, [])



        return (
            <div>
                <div className="card mt-4" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={foodit.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title"> {foodit.name}</h5>

                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {
                                    priceOptions.map((data) => {
                                        return <option key={data} value={data}>{data}</option>

                                    })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                ₹{finalPrice}/-
                            </div>
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success justify-center mx-4 ' onClick={handleAddToCart}>Add to cart</button>

                </div>
            </div>
        )
    }

    export default Card

