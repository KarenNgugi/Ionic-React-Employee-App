import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonContent,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonCard,
  IonTextarea,
  IonImg,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import { cameraOutline } from "ionicons/icons";

const Feed: React.FC = () => {
  const [postContent, setPostContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState(false);

  // handler for typing in the text area
  const handleTextChange = (e: any) => {
    setPostContent(e.target.value);
  };

  // handler for uploading images
  const handleUploadImage = (event: any) => {
    // add logic for uploading images
    setUploadedImage(true);
  };

  const handleCancelPost = () => {
    setPostContent("");
    setUploadedImage(false);
  };

  const isPostButtonEnabled = postContent.trim() !== "" || uploadedImage;

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="auto">
                  <IonImg
                    src="src/images/OnikaMaraj.png"
                    alt="User profile picture"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </IonCol>
                <IonCol>
                  <IonTextarea
                    placeholder="Say something..."
                    value={postContent}
                    onIonChange={handleTextChange}
                    rows={3}
                    autoGrow={true}
                    fill="outline"
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonCol size="auto">
                  {isPostButtonEnabled && (
                    <IonButton fill="clear" onClick={handleCancelPost}>
                      Cancel
                    </IonButton>
                  )}
                </IonCol>
                <IonCol></IonCol>
                <IonCol size="auto">
                  <IonButton fill="clear" onClick={handleUploadImage}>
                    <IonIcon icon={cameraOutline} />
                  </IonButton>
                  <IonButton
                    disabled={!isPostButtonEnabled}
                    color="primary"
                    onClick={() => console.log("Post submitted!")}
                  >
                    POST
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonList></IonList>
      </IonContent>
      <IonFooter className="ion-text-center">&copy; Karen 2024</IonFooter>
    </IonApp>
  );
};

export default Feed;
