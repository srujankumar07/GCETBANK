import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "BloodLink related queries, feedback and suggestions", body: [
                "Geethanjali college of engineering and technology",
                "Cheeryal village,keesara,Medchal Dist,Telangana",
                "9346424298"
                
            ]
        },
        {
            title: "For Administrative queries", body: [
                "Admin Block",
                "GCET,Telangana - 500039"
            ]
        },
        { title: "For administrative queries", body: ["Admin Block", "GCET,Telangana - 500039"] }
    ];
    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact