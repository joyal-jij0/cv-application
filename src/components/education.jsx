import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function Education() {
    const [edu, setEdu] = useState([
        {
            id: uuidv4(),
            degree: '',
            school: '',
            from: '',
            to: '',
            description: ''
        }
    ]);
    const handleAddEdu = () => {
        setEdu([...edu,
            {
                id: uuidv4(),
                degree: '',
                school: '',
                from: '',
                to: '',
                description: ''
            }
            ]);
    }

    const handleEduChange = (id, field, value) => {
        const newEdu = [...edu];
        const index = newEdu.findIndex(entry => entry.id === id);
        if(index !== -1){
            newEdu[index][field] = value;
            setEdu(newEdu);
        }
    }

    const handleRemoveEdu = (id) => {
        const newEdu = edu.filter(entry => entry.id !== id);
        setEdu(newEdu);
    }

    return (
        <>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <section>
                <div className="blue">Education</div>
                {edu.map((entry) => (
                    <section className="blue-box" key={entry.id}>
                        <input
                            type="text"
                            placeholder="Degree and Field of Study"
                            className="job"
                            value={entry.degree}
                            onChange={(e) => handleEduChange(entry.id, 'degree', e.target.value)}
                        />
                        <div>
                            <input
                                type="text"
                                placeholder="School or University"
                                className="comp"
                                value={entry.school}
                                onChange={(e) => handleEduChange(entry.id, 'school', e.target.value)}
                            />
                        </div>
                        <div>&nbsp;</div>
                        <div className="banner comp">
                            <div>From &nbsp;</div>
                            <div className="border">
                                <input
                                    type="date"
                                    value={entry.from}
                                    onChange={(e) => handleEduChange(entry.id, 'from', e.target.value)}
                                />
                            </div>
                            <div>&nbsp;To&nbsp;</div>
                            <div className="border">
                                <input
                                    type="date"
                                    value={entry.to}
                                    onChange={(e) => handleEduChange(entry.id, 'to', e.target.value)}
                                />
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Any Achievements ?"
                            value={entry.description}
                            onChange={(e) => handleEduChange(entry.id, 'description', e.target.value)}
                        ></textarea>
                        <div>&nbsp;</div>
                        <button className="red" onClick={() => handleRemoveEdu(entry.id)}>
                            <img src="src/assets/delete-svgrepo-com.svg" alt="remove" className="delete"/>
                            Remove
                        </button>
                    </section>

                ))}
                <button className="blue-button" onClick={handleAddEdu}>+ Add</button>

            </section>

        </>
    )
}