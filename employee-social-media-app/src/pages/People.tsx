import { IonApp, IonHeader, IonToolbar, IonTitle, IonFooter, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol } from "@ionic/react";

const People: React.FC = () => (
    <IonApp>
        <IonHeader>
        <IonToolbar color="primary" className="ion-text-center">
          <IonTitle>Employees</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol>
                    <IonCard>
                <img src="/src/images/employee-photo.jpeg" id="employee-pic"/>
                <IonCardHeader>
                    <IonCardTitle>FirstName LastName</IonCardTitle>
                    <IonCardSubtitle>Position - Department</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonFooter className="ion-text-center">&copy; Karen 2024</IonFooter>
        </IonContent>
    </IonApp>
);

export default People;