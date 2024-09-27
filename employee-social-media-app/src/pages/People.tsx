import React, { useEffect, useState } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonPopover,
  IonButton,
  IonCardContent,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonText,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import axios from "axios";
import { homeOutline, logOutOutline, menuOutline, personOutline } from "ionicons/icons";

interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  photo: string;
  position: string;
  department: string;
  email: string;
  phone: string;
}

const People: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employees/")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching employee data!", error);
      });
  }, []);

  const handleCardClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowPopover(true);
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
                    <IonItem routerLink="/profile">
                    <IonIcon icon={personOutline} slot="start" />
                    <IonText>Profile</IonText>
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
            <IonButton routerLink="/profile">
            <IonIcon icon={personOutline} />
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
            {employees.map((employee) => (
              <IonCol sizeLg="3" sizeMd="6" sizeSm="12" key={employee.id}>
                <IonCard button onClick={() => handleCardClick(employee)}>
                  <img
                    src={`${employee.photo}`}
                    alt="Employee photo"
                    id="employee-pic"
                  />
                  <IonCardHeader>
                    <IonCardTitle>
                      {employee.first_name} {employee.last_name}
                    </IonCardTitle>
                    <IonCardSubtitle>
                      {employee.position} - {employee.department}
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonPopover
          isOpen={showPopover}
          onDidDismiss={() => setShowPopover(false)}
        >
          {selectedEmployee && (
            <IonCard>
              <img
                src={`${selectedEmployee.photo}`}
                alt="Employee profile picture"
              />
              <IonCardHeader>
                <IonCardTitle>
                  {selectedEmployee.first_name} {selectedEmployee.last_name}
                </IonCardTitle>
                <IonCardSubtitle>
                  {" "}
                  {selectedEmployee.position} - {selectedEmployee.department}
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>{selectedEmployee.email}</IonCardContent>
              <IonCardContent>{selectedEmployee.phone}</IonCardContent>
              <IonButton onClick={() => setShowPopover(false)}>Close</IonButton>
            </IonCard>
          )}
        </IonPopover>
      </IonContent>
      <IonFooter className="ion-text-center">&copy; Karen 2024</IonFooter>
    </IonApp>
  );
};

export default People;
