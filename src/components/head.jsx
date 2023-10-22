import React, { useState } from "react";
import '../styles/head.css';

export default function Head() {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setImage(imageUrl);
        }
    }

    return (
        <section className={`banner blue-box ${image ? "image-uploaded" : ""}`}>
            <section className="left">
                <input type="text" className="name" placeholder="Name" />
                <section><input type="text" className="role" placeholder="The role you're applying for" /></section>
                <div>&nbsp;</div>
                <section>
                    <section className="left">
                        <input type="number" placeholder="Phone" />
                        <input type="url" placeholder="Linkedin" />
                    </section>
                    <section className="right">
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Location" />
                    </section>
                </section>
            </section>
            <div className="profile-img" style={{backgroundImage: `url(${image})`}}>
                <label htmlFor="imageUpload" className={`profile-label ${image ? "" : "profile-img"}`}></label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{display: 'none'}}
                />
            </div>
        </section>
    );
}
