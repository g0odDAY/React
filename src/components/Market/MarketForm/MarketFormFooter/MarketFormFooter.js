import classes from "./MarketFormFooter.module.css";
import {BsPlusSquareDotted} from "react-icons/bs";
import {GrTrash} from "react-icons/gr";
import {useState} from "react";

const MarketFormFooter = ({previewImage,setPreviewImage}) =>{

    const fileHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = ()=>{
            const imageUrl = reader.result;
            setPreviewImage(imageUrl);
        }
        reader.readAsDataURL(file);
    }
    const removeImageHandler = () =>{
        setPreviewImage(null);
        document.getElementById('file-input').value = '';
    }
    return <div className={classes.footer}>
                <div className={classes.footer_content}>
                    <div>기타 내용</div>
                    <textarea name="" id="" rows={6} placeholder="기타 내용"></textarea>
                </div>
                <div>
                    이미지 추가<input type="file" id="file-input" onChange={fileHandler} accept='image/png,image/jpeg,image/webp,image/gif'/>
                    <div className={classes.imgArea}>
                        {previewImage ? <img src={previewImage} alt="preview"/> : <div className={classes.imgBox}><BsPlusSquareDotted/></div>}
                        <button className={classes.removeBtn} onClick={removeImageHandler} style={{display : previewImage ? 'block' : 'none'}}><GrTrash/></button>
                    </div>
                </div>
           </div>
}
export default MarketFormFooter;