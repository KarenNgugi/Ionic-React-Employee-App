import {
  IonApp,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonContent,
  IonInput,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonList,
  IonText,
} from "@ionic/react";
import { logOutOutline, menuOutline, peopleOutline, homeOutline } from "ionicons/icons";
import { useState } from "react";

const Profile: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>(
    "path_to_defailt_profile_pic"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [dept, setDept] = useState("");

  const handleUpdate = () => {
    // logic for sending updated profile info to backend
    console.log("info updated");
  };

  return (
    <IonApp>
      {/* mobile menu */}
      <IonMenu contentId="main-content" side="end">
            <IonContent>
                <IonList>
                    <IonItem routerLink="/feed">
                    <IonIcon icon={homeOutline} slot="start" />
                    <IonText>Feed</IonText>
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
            <IonButton routerLink="/feed">
            <IonIcon icon={homeOutline} />
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
        <IonGrid>
          <IonRow>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
            <IonCol sizeMd="8" sizeXs="10" className="ion-text-center">
              <IonItem lines="none">
                <IonImg src="src/images/karen.jpeg" id="profile-pic" />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
            <IonCol sizeMd="4" sizeXs="5">
              <IonItem>
                <IonInput
                  placeholder="FirstName"
                  value={firstName}
                  onIonChange={(e) => setFirstName(e.detail.value!)}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="4" sizeXs="5">
              <IonItem>
                <IonInput
                  placeholder="LastName"
                  value={lastName}
                  onIonChange={(e) => setLastName(e.detail.value!)}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
            <IonCol sizeMd="8" sizeXs="10">
              <IonItem>
                <IonInput
                  placeholder="Role"
                  value={role}
                  onIonChange={(e) => setRole(e.detail.value!)}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
            <IonCol sizeMd="8" sizeXs="10">
              <IonItem>
                <IonInput
                  placeholder="Department"
                  value={dept}
                  onIonChange={(e) => setDept(e.detail.value!)}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
            <IonCol sizeMd="8" sizeXs="10">
              <IonItem>
                <IonInput
                  placeholder="email@company.dom"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
            <IonCol sizeMd="8" sizeXs="10">
              <IonItem>
                <IonInput
                  placeholder="0712345678"
                  value={phone}
                  onIonChange={(e) => setPhone(e.detail.value!)}
                />
              </IonItem>
            </IonCol>
            <IonCol sizeMd="2" sizeXs="1"></IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={handleUpdate}>Update</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-text-center">&copy; Karen 2024</IonFooter>
    </IonApp>
  );
};

export default Profile;
