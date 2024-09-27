import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonContent,
  IonButton,
  IonCard,
  IonTextarea,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonIcon,
  IonCardTitle,
  IonCardSubtitle,
  IonMenu,
  IonList,
  IonItem,
  IonText,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import React, { useState } from "react";
import {
  chatbubbleOutline,
  heartOutline,
  shareSocialOutline,
  imageOutline,
  personOutline,
  peopleOutline,
  logOutOutline,
  menuOutline,
} from "ionicons/icons";

const Feed: React.FC = () => {
  const [postContent, setPostContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isPostButtonEnabled, setIsPostButtonEnabled] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      profile_picture: "src/images/OnikaMaraj.png",
      name: "Onika Maraj",
      timestamp: "Just now",
      content: "This is a test post",
    },
    {
      id: 2,
      profile_picture: "src/images/BeyonceKnowles.png",
      name: "Beyonce Knowles",
      timestamp: "1 hour ago",
      content: "Hello everyone, welcome to our new app!",
    },
  ]);

  // handler for typing in the text area
  const handleTextChange = (e: any) => {
    const text = e.target.value;
    setPostContent(text);
    checkPostButtonEnabled(text, uploadedImage);
  };

  // handler for uploading images
  const handleUploadImage = (event: any) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageSrc = e.target?.result as string;
            setUploadedImage(imageSrc);
            checkPostButtonEnabled(postContent, imageSrc);
        };
        reader.readAsDataURL(file);
    }
  };

// check whether post button should be enabled
  const checkPostButtonEnabled = (text: string, image: string | null) => {
    setIsPostButtonEnabled(text.trim() !== "" || image !== null);
  };

//   handle post submission
  const handlePostSubmit = () => {
    console.log("Post submitted with text:", postContent, "and image:", uploadedImage);
    handleCancelPost();
  };

//   clear text and image 
  const handleCancelPost = () => {
    setPostContent("");
    setUploadedImage(null);
    setIsPostButtonEnabled(false);
  };

  return (
    <IonApp>
        {/* mobile menu */}
        <IonMenu contentId="main-content" side="end">
            <IonContent>
                <IonList>
                    <IonItem routerLink="/profile">
                    <IonIcon icon={personOutline} slot="start" />
                    <IonText>Profile</IonText>
                    </IonItem>
                    <IonItem routerLink="/people">
                    <IonIcon icon={peopleOutline} slot="start" />
                    <IonText>People</IonText>
                    </IonItem>
                    <IonItem routerLink="/login">
                    <IonIcon icon={logOutOutline} slot="start" />
                    <IonText>Logout</IonText>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Feed</IonTitle>
          {/* desktop icons */}
          <IonButtons slot="end" className="ion-hide-sm-down">
            <IonButton routerLink="/profile">
            <IonIcon icon={personOutline} />
            </IonButton>
            <IonButton routerLink="/people">
            <IonIcon icon={peopleOutline} />
            </IonButton>
            <IonButton routerLink="/login">
            <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonButtons>

          {/* mobile menu button */}
          <IonButtons slot="end" className="ion-hide-lg-up">
            <IonMenuButton autoHide={false}>
                <IonIcon icon={menuOutline} />
            </IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" id="main-content">
        {/* user input card */}
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
                    onIonInput={handleTextChange}
                    // onIonChange={handleTextChange}
                    rows={3}
                    autoGrow={true}
                    fill="outline"
                  />
                </IonCol>
              </IonRow>

              {/* display uploaded image preview */}
              {uploadedImage && (
                <IonRow>
                    <IonCol>
                        <IonImg src={uploadedImage} alt="uploaded image preview" style={{ width: "20rem", marginTop: "1rem" }}/>
                    </IonCol>
                </IonRow>
              )}
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
                    {/* image upload button */}
                  <IonButton fill="clear" onClick={handleUploadImage}>
                    <IonIcon icon={imageOutline} />
                    <input type="file" accept="image/*" onChange={handleUploadImage} style={{ position: "absolute", opacity: 0, width: "100%", height: "100%"}}/>
                  </IonButton>
                  <IonButton
                    disabled={!isPostButtonEnabled}
                    color="primary"
                    onClick={handlePostSubmit}
                  >
                    POST
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* dynamic feed section */}
        <IonGrid>
          {posts.map((post) => (
            <IonRow key={post.id}>
              <IonCol size="12">
                <IonCard>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="auto">
                          <IonImg
                            src={post.profile_picture}
                            alt="Poster profile picture"
                            style={{ width: "5rem", borderRadius: "50%" }}
                          />
                        </IonCol>
                        <IonCol>
                          <IonCardTitle>{post.name}</IonCardTitle>
                          <IonCardSubtitle>{post.timestamp}</IonCardSubtitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                  <IonCardContent>{post.content}</IonCardContent>
                  <IonCardContent>
                    <IonButton fill="clear">
                      <IonIcon icon={heartOutline} slot="start" />
                      React
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={chatbubbleOutline} slot="start" />
                      Comment
                    </IonButton>
                    <IonButton fill="clear">
                      <IonIcon icon={shareSocialOutline} slot="start" />
                      Share
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-text-center">&copy; Karen 2024</IonFooter>
    </IonApp>
  );
};

export default Feed;
