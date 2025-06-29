import React from 'react'
import star from "../../assets/Images/star_rate-24px.png"
import boy from "../../assets/Images/boy.jpg"

const Testimonial = () => {

    const testimonial = [
        {
            id:"1",
            name :"Vikas",
            rating:[1,2,3,4,5],
            image:star,
            profilepic:boy,
            content :"Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price."
        },
        {
            id:"2",
            name :"Vikas",
            rating:[1,2,3,4,5],
            image:star,
            profilepic:boy,
            content :"Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price."
        },
        {
            id:"3",
            name :"Vikas",
            rating:[1,2,3,4,5],
            image:star,
            profilepic:boy,
            content :"Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.ighly recommended!"
        },
    ]

    return (
        <div className= "pl-[40px] md:px-[60px] bg-[#F9F9F9] mt-[20px] pt-[40px] pb-[40px]">
            <div style={{letterSpacing:3,textAlign:"center"}} className='pb-[50px]'>TESTIMONIAL</div>
            <div className='flex justify-between flex-wrap gap-[20px] ' style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
                {testimonial.map((val, index) => (
                    <div key={val.id} className='md:px-[25px] md:py-[26px] px-[15px] py-[13px] bg-[#ffffff] w-[330px] md:mt-[0px] mt-[30px]' style={{position:"relative"}}>
                        <img src={val.profilepic} width={50} height={50} className='rounded-full object-cover' style={{position:"absolute",top:"-25px",left:"-25px"}}/>
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex justify-between items-center'>
                                <div>{val.name}</div>
                                <div className='flex gap-[5px]'>
                                    {val.rating.map((el, idx) => (
                                        <img key={idx}  width={15} height={15} src={val.image} alt="star" />
                                    ))}
                                </div>
                            </div>
                            <div className='text-[14px] italic text-[#707070]'>{val.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
