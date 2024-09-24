import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from "@ionic/react";
import { Link } from "react-router-dom";

const SideMenu: React.FC = () => (
    <IonMenu contentId="main">
        <IonHeader>
            <IonToolbar>
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem routerLink="/profile">Profile</IonItem>
                <IonItem routerLink="/people">People</IonItem>
                <IonItem routerLink="/feed">Feed</IonItem>
                <IonItem routerLink="/login">Logout</IonItem>
            </IonList>
        </IonContent>
    </IonMenu>
);

export default SideMenu;