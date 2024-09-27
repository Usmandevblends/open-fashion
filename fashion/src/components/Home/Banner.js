import React from 'react'

function Banner() {
    return (
        <>
            <div
                className="Banner w-full h-screen bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url(./images/banner.png)" }}>
                <div className="container mx-auto">
                    <div className="banner-content flex items-center justify-center absolute">
                        <h1 className="text-3xl font-bold ">Luxury Fashion & Accessories</h1>
                    </div>
                    <div className="b-btn flex items-center justify-center">
                        <button className="uppercase rounded-full text-base">
                            Explore Collection
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner