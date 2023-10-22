import React, {useState} from "react";
import {v4 as uuid4} from 'uuid';

export default function Experience(){
    const [exp, setExp] = useState([
        {
            id: uuid4(),
            title: '',
            company: '',
            city: '',
            from: '',
            to: '',
            description:''

    }
    ])

    const handleAddExp = () =>{
        setExp([...exp,
            {
                id: uuid4(),
                title:'',
                company: '',
                city: '',
                from: '',
                to: '',
                description: ''
            }
        ]);
    }

    const handleExpChange = (id, field, value) => {
        const newExp =[...exp];
        const index = newExp.findIndex(entry => entry.id === id);
        if(index !== -1){
            newExp[index][field] = value;
            setExp(newExp);
        }
    }

    const handleRemoveExp = (id) => {
        const newExp = exp.filter(entry => entry.id !== id);
        setExp(newExp);
    }

    return(
        <>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <section>

                <div className="blue">Experience</div>

                {exp.map((entry) => (
                    <section className="blue-box" key={entry.id}>
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="job"
                            value={entry.title}
                            onChange={(e) => handleExpChange(entry.id, 'title', e.target.value)}
                        />
                        <div>
                            <input
                                type="text"
                                placeholder="Company"
                                className="comp"
                                value={entry.company}
                                onChange={(e) => handleExpChange(entry.id, 'company', e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="City"
                                className="comp"
                                value={entry.city}
                                onChange={(e) => handleExpChange(entry.id, 'city', e.target.value)}
                            />
                        </div>
                        <div>&nbsp;</div>
                        <div className="banner comp">
                            <div>From &nbsp;</div>
                            <div className="border">
                                <input
                                    type="date"
                                    value={entry.from}
                                    onChange={(e) => handleExpChange(entry.id, 'from', e.target.value)}
                                />
                            </div>
                            <div>&nbsp;To&nbsp;</div>
                            <div className="border">
                                <input
                                    type="date"
                                    value={entry.to}
                                    onChange={(e) => handleExpChange(entry.id, 'to', e.target.value)}
                                />
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="What did you do ?"
                            value={entry.description}
                            onChange={(e) => handleExpChange(entry.id, 'description', e.target.value)}
                        ></textarea>
                        <div>&nbsp;</div>
                        <button className="red" onClick={() => handleRemoveExp(entry.id)}>
                            <img src="src/assets/delete-svgrepo-com.svg" alt="remove" className="delete"/>
                            Remove
                        </button>
                    </section>
                ))}


                <button className="blue-button" onClick={handleAddExp}>+ Add</button>

            </section>

        </>
    )
}