import { IonPage, IonContent, IonInput, IonButton, IonList, IonItem } from "@ionic/react";
import { useState } from "react";

const Feed: React.FC = () => {
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState<string[]>([]);

    const handlePost = () => {
        if (post.trim()) {
            setPosts([...posts, post]);
            setPost('');
        }
    };

    return (
        <IonPage>
            <IonContent>
                <IonInput value={post} placeholder="Say something..." onIonChange={e => setPost(e.detail.value!)} />
                <IonButton expand="full" onClick={handlePost}>Post</IonButton>
                <IonList>
                    {posts.map((p, index) => (
                        <IonItem key={index}>{p}</IonItem>
                    ))}
                </IonList>
                <IonInput placeholder="email@company.dom" />
            </IonContent>
        </IonPage>
    );
};

export default Feed;