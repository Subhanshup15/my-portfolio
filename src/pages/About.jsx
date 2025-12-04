import React, { useState, useRef, useEffect } from "react";

const personal = {
    name: "Subhanshu Pardeshi",
    dob: "17 July 1999",
    age: "26",
    education: "Masters In Computer Science",
    designation: "Software Developer ",
    father: "Mr. Sabhajit Mohal Pardeshi",
    mother: "Mrs. Sunita Sabhajit Pardeshi",
    sister: "Sakshi Sabhajit Pardeshi",
    nationality: "Indian",
    location: "Hadapsar, Pune, Maharashtra",
};

const About = () => {
    const [popupImage, setPopupImage] = useState(null);
    const [extraPhotos, setExtraPhotos] = useState(() => {
        try {
            const raw = localStorage.getItem("aboutExtraPhotos");
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    });

    const fileInputRef = useRef(null);

    const openPopup = (src) => {
        setPopupImage(src);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    useEffect(() => {
        try {
            localStorage.setItem("aboutExtraPhotos", JSON.stringify(extraPhotos));
        } catch (e) {
            // ignore
        }
    }, [extraPhotos]);

    const triggerAddPhotos = () => fileInputRef.current && fileInputRef.current.click();

    const readFileAsDataURL = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

    const handleFileInput = async (e) => {
        const files = Array.from(e.target.files || []);
        const urls = [];
        for (const f of files) {
            if (!f.type.startsWith("image/")) continue;
            try {
                // convert to data URL so it is usable in src
                const data = await readFileAsDataURL(f);
                urls.push(data);
            } catch (err) {
                // skip
            }
        }
        if (urls.length) setExtraPhotos((p) => [...p, ...urls]);
        e.target.value = null;
    };

    const removeExtraPhoto = (index) => setExtraPhotos((p) => p.filter((_, i) => i !== index));

    return (
        <div className="section center-container">
            <h2 className="section-title">About Me</h2>

            {/* Profile image */}
            <div className="about-photo-container">
                <img
                    src="/logo.jpg"
                    alt="Profile"
                    className="about-photo"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => openPopup("/logo.jpg")}
                />
            </div>

            <div className="card about-card">
                <p><strong>Name:</strong> {personal.name}</p>
                <p><strong>Age:</strong> {personal.age}</p>
                <p><strong>DOB:</strong> {personal.dob}</p>
                <p><strong>Education:</strong> {personal.education}</p>
                <p><strong>Designation:</strong> {personal.designation}</p>
                <p><strong>Nationality:</strong> {personal.nationality}</p>
                <p><strong>Father:</strong> {personal.father}</p>
                <p><strong>Mother:</strong> {personal.mother}</p>
                <p><strong>Sister:</strong> {personal.sister}</p>
                <p><strong>Address:</strong> {personal.location}</p>

                {/* Family Images */}
                <div className="family-images">
                    <div>
                        <img
                            src="/papa.jpg"
                            alt="Father"
                            className="family-photo"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                            onClick={() => openPopup("/papa.jpg")}
                        />
                        <p>{personal.father}</p>
                    </div>

                    <div>
                        <img
                            src="/mummy.jpg"
                            alt="Mother"
                            className="family-photo"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                            onClick={() => openPopup("/mummy.jpg")}
                        />
                        <p>{personal.mother}</p>
                    </div>

                    <div>
                        <img
                            src="/didi.jpg"
                            alt="Sister"
                            className="family-photo"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                            onClick={() => openPopup("/didi.jpg")}
                        />
                        <p>{personal.sister}</p>
                    </div>
                </div>

                {/* Extra photos added by user */}
                <div style={{ marginTop: 12 }}>
                    <input ref={fileInputRef} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={handleFileInput} />
                    <button className="btn" onClick={triggerAddPhotos} style={{ marginBottom: 10 }}>Add Photos</button>

                    {extraPhotos && extraPhotos.length > 0 && (
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            {extraPhotos.map((src, idx) => (
                                <div key={idx} style={{ textAlign: "center", position: "relative" }}>
                                    <img
                                        src={src}
                                        alt={`extra-${idx}`}
                                        className="family-photo"
                                        style={{ width: 120, height: 90, objectFit: 'cover', cursor: 'pointer' }}
                                        draggable={false}
                                        onContextMenu={(e) => e.preventDefault()}
                                        onClick={() => openPopup(src)}
                                    />
                                    <button
                                        className="btn"
                                        onClick={() => removeExtraPhoto(idx)}
                                        style={{ position: 'absolute', right: 4, top: 4, padding: '2px 6px' }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* POPUP MODAL */}
            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content">
                        <img
                            src={popupImage}
                            className="popup-image"
                            alt="Zoom"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
