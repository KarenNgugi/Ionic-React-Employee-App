import { IonToolbar, IonButtons, IonButton, IonTitle } from "@ionic/react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
    <IonToolbar>
        <IonTitle>KUCCPS Employees</IonTitle>
        <IonButtons slot="end">
            <IonButton routerLink="/profile">Profile</IonButton>
            <IonButton routerLink="/people">People</IonButton>
            <IonButton routerLink="/feed">Feed</IonButton>
            <IonButton routerLink="/login">Logout</IonButton>
        </IonButtons>
    </IonToolbar>
);

export default Navbar;