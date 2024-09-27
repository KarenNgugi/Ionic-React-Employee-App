import {
  IonContent,
  IonInput,
  IonButton,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonFooter,
  setupIonicReact,
  IonText,
} from "@ionic/react";
import { useState } from "react";

setupIonicReact({ mode: "md" });

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // add login logic
    console.log("Logged in!");
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary" className="ion-text-center">
          <IonTitle>Welcome! Please log in</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-justify-content-center ion-align-items-center">
        <IonGrid fixed={true}>
          <IonRow className="ion-padding ion-justify-content-center" style={{ paddingBottom: 0 }}>
            <IonCol sizeMd="4" sizeXs="12">
                <IonText>Email:</IonText>
                <IonText>
                <IonInput
                  placeholder="email@company.domain"
                  type="email"
                  onIonChange={(e) => setEmail(e.detail.value!)}
                />
                </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding ion-justify-content-center" style={{ paddingBottom: 0 }}>
            <IonCol sizeMd="4" sizeXs="12">
                <IonText>Password:</IonText>
                <IonInput
                  placeholder="********"
                  type="password"
                  onIonChange={(e) => setPassword(e.detail.value!)}
                />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
            <IonButton
                  onClick={handleLogin}
                >
                  Login
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-text-center">&copy; Karen 2024</IonFooter>
    </IonApp>
  );
};

export default Login;
