import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import '/src/styles/skills.css'
export default function Skills(){
    const[skills, setSkills] = useState([{ id: uuidv4(), value: ''}]);

    const handleAddSkill = () => {
        setSkills([...skills,
            {
                id: uuidv4(),
                value: ''
            }
        ]);
    }
    const handleSkillChange = (id, value) => {
        const newSkills =[...skills];
        const index = newSkills.findIndex(entry => entry.id === id);
        if(index !== -1){
            newSkills[index] = value;
            setSkills(newSkills)
        }
    }

    const handleRemoveSkill = (id) => {
        const newSkills = skills.filter(entry => entry.id !== id);
        setSkills(newSkills);
    }
    return(
        <>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <section>
                <div className="blue">Skills</div>
                {skills.map((skill) => (
                    <div className="skill" key={skill.id}>
                        <input
                            type="text"
                            placeholder="Add Skills"
                            className="role"
                            value={skill.value}
                            onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                            />
                        <button className="red skill-button" onClick={() => handleRemoveSkill(skill.id)}>
                            <img src="src/assets/delete-svgrepo-com.svg" alt="remove" className="skill-red"/>
                        </button>
                    </div>
                ))}
                <button className="blue-button" onClick={handleAddSkill}>+ Add</button>
            </section>

        </>
    )
}