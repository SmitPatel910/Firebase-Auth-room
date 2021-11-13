import React , {useState} from 'react';
import {useHistory } from 'react-router-dom';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './StepAvatar.module.css';
import {storage, firebase} from "../../../base";




const StepAvatar = ({ onNext }) => {
    const user = firebase.auth().currentUser;

    const [image, setImage] = useState('/images/monkey-avatar.png'); 
    const [file, setFile] = useState('/images/monkey-avatar.png');
    const history = useHistory();
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");

    

    const captureImage = e => {
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImage(reader.result);
        };
    };
    
    const handleUpload = async ()=>{
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
 
        uploadTask.on(
            "state_changed",
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            },
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                  setUrl(url);
                  user.updateProfile({photoURL: url})
                    .then(function() {  
                        alert("Profile Picture Updated!!");
                    }).catch(function(error){
                        alert(error);
                    });
                });
            }
          );
  
    };

    async function upload() {
        try {
            await handleUpload(); 
              
        } catch (err) {
            console.log(err);
            history.push('/activate');
        }
    }

    async function submit() {
        try {
            history.push("/room");   
        } catch (err) {
            console.log(err);
            history.push('/activate');
        }
    }

    

    return (
        <>  
            <div className={styles.center}>
            <Card title={`Okay, ${user.displayName} `} icon="monkey-emoji">
                <p className={styles.subHeading}>How’s this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img
                        className={styles.avatarImage}
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        accept="image/*"
                        onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatarInput">
                        Choose a different photo
                    </label>

                    <div>
                        <progress value={progress} max="100" /> 
                    </div>
                    
                </div>
                <div>
                <Button onNext={upload} text="Upload" />
                    <Button onNext={submit} text="Next" />
                </div>
            </Card>
            </div>
        </>
    );
};

export default StepAvatar;
