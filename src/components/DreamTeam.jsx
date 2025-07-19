import { useState } from 'react';
import Friends from './Friends';
import { arrayImages } from "../utils/constant.js";

const DreamTeam = () => {
    const [indexImage, setIndexImage] = useState(null);

    const clickOnImage = (index) => {
        setIndexImage(count => (count === index ? null : index));
    };

    return (
        <section className="h-screen flex items-center justify-center">
            <div className="relative grid grid-cols-3 gap-1 border">
                {arrayImages.map((item, index) => (
                    <Friends
                        key={index}
                        friend={item}
                        isExpanded={indexImage === index}
                        onClick={() => clickOnImage(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default DreamTeam;
