import React, { useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonLabel,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonIcon,
  IonInput,
  IonItem,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  useIonRouter
} from '@ionic/react';
import { closeOutline, alertCircleOutline } from 'ionicons/icons';
import './homee.css';
import profesoricono from '../../../public/Falcows/profesoricono.png';
import Serviciohogar from '../../../public/Falcows/serviciohogar.png';
import profession from '../../../public/Falcows/profession.png';
import Avartam from '../../../public/Falcows/avatar1.png';
import Avartaf from '../../../public/Falcows/avar2.png';
import Entrenadora from '../../../public/Falcows/entrenadora.png';
import Entrenador from '../../../public/Falcows/entrenador.png';
import Electricistas from '../../../public/Falcows/electricistas.png';
import Psicologa from '../../../public/Falcows/psicologa.png';
import Desarrollador from '../../../public/Falcows/programador.png';

const bancosColombia = [
  "Banco de Bogotá", "Bancolombia", "Davivienda", "Banco Popular", "Banco Agrario",
  "Banco de Occidente", "Banco AV Villas", "BBVA Colombia", "Banco Itaú",
  "Banco Pichincha", "Scotiabank Colpatria", "Citibank Colombia", "Banco Caja Social",
  "Banco Falabella", "Banco GNB Sudameris", "Banco Finandina", "Bancoomeva",
  "Banco W", "Banco Serfinanza"
];

const Home: React.FC = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>({});
  const [selectedModality, setSelectedModality] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<string>('');
  const [servicePrice, setServicePrice] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [pendingServices, setPendingServices] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    nombreyapellido: '',
    email: '',
    date: '',
    time: '',
    lugar: '',
    telefono: '',
    enlaceTeams: '',
    descripcion: ''
  });

  const router = useIonRouter();

  const openInfoModal = (content: any) => {
    setModalContent(content);
    setIsInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const openFormModal = (content: any) => {
    setModalContent(content);
    setIsFormModalOpen(true);
    setIsInfoModalOpen(false); // Cierra el modal de información al abrir el modal del formulario
    if (content.category !== 'Servicio hogar') {
      setTotalCost(content.price * hours); // Establece el costo total inicial basado en el precio del servicio
    }
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
    setIsFormModalOpen(false); // Cierra el modal del formulario al abrir el modal de pago
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleModalityChange = (event: CustomEvent) => {
    setSelectedModality(event.detail.value);
  };

  const handleHoursChange = (event: CustomEvent) => {
    const selectedHours = Number(event.detail.value);
    setHours(selectedHours);
    calculateTotalCost(selectedHours, modalContent.price);
  };

  const handleServiceChange = (event: CustomEvent) => {
    const selectedService = event.detail.value;
    const servicePrice = modalContent.services.find((service: any) => service.name === selectedService).price;
    setSelectedService(selectedService);
    setServicePrice(servicePrice);
    setTotalCost(servicePrice);
  };

  const calculateTotalCost = (hours: number, price: number) => {
    setTotalCost(hours * price);
  };

  const handlePaymentMethodChange = (event: CustomEvent) => {
    setPaymentMethod(event.detail.value);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = () => {
    const { nombreyapellido, email, date, time, descripcion } = formData;
    if (!nombreyapellido || !email || !date || !time || !descripcion) {
      return false;
    }
    if (selectedModality === 'presencial' && !formData.lugar) {
      return false;
    }
    if (selectedModality === 'virtual' && (!formData.telefono || !formData.enlaceTeams)) {
      return false;
    }
    return true;
  };

  const validatePayment = () => {
    // Simulación de validación de pago
    const isValid = true;
    if (isValid) {
      // Guardar el servicio pendiente
      const newService = {
        ...modalContent,
        formData,
        totalCost
      };
      const updatedPendingServices = [...pendingServices, newService];
      localStorage.setItem('pendingServices', JSON.stringify(updatedPendingServices));
      setPendingServices(updatedPendingServices);
      // Redirigir a la página de servicios pendientes
      router.push('/servicios');
    } else {
      alert('Error en la validación del pago');
    }
  };

  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <h2 className="category-title">Categoria</h2>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="category-col">
            <div className="category-box">
              <IonImg src={profesoricono} alt="Icono" className="category-icon" />
              <IonLabel>Profesor</IonLabel>
            </div>
          </IonCol>
          <IonCol className="category-col">
            <div className="category-box">
              <IonImg src={Serviciohogar} alt="Icono" className="category-icon" />
              <IonLabel>Servicio hogar</IonLabel>
            </div>
          </IonCol>
          <IonCol className="category-col">
            <div className="category-box">
              <IonImg src={profession} alt="Icono" className="category-icon" />
              <IonLabel>Profesional</IonLabel>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <h2 className="all-title">All</h2>
          </IonCol>
        </IonRow>
        <IonRow className='cont'>
          <IonCard className="service-card">
            <img src={Avartaf} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Profesora de inglés</h3>
              <p><strong>Nombre especialista:</strong> Paula Andrea Gomez</p>
              <p>Categoría: Profesor</p>
              <p>Modalidad: Virtual/Presencial</p>
              <p>1 H por $80.000</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Profesora de inglés',
                name: 'Paula Andrea Gomez',
                category: 'Profesor',
                mode: 'Virtual/Presencial',
                price: 80000, // Precio en formato numérico
                image: Avartaf,
                description: 'Paula Andrea Gomez es una profesora de inglés con más de 10 años de experiencia. Especializada en enseñar a estudiantes de todos los niveles, su método se centra en la comunicación efectiva y la práctica constante. Ofrece clases tanto virtuales como presenciales, adaptándose a las necesidades de cada estudiante.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Avartam} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Servicio de pintora</h3>
              <p><strong>Nombre especialista:</strong> Juan Camilo Fernández</p>
              <p>Categoría: Servicio hogar</p>
              <p>Modalidad: Presencial</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Servicio de pintora',
                name: 'Juan Camilo Fernández',
                category: 'Servicio hogar',
                mode: 'Presencial',
                services: [
                  { name: 'Pintura interior', price: 200000 },
                  { name: 'Pintura exterior', price: 500000 }
                ],
                image: Avartam,
                description: 'Juan Camilo Fernández ofrece servicios de pintura para el hogar con una calidad excepcional. Con más de 5 años de experiencia, garantiza un acabado perfecto y una atención meticulosa a los detalles.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Entrenadora} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Entrenadora</h3>
              <p><strong>Nombre especialista:</strong> Emma Gomez Rojas</p>
              <p>Categoría: Profesor</p>
              <p>Modalidad: Presencial</p>
              <p>1 H por $70.000</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Entrenadora',
                name: 'Emma Gomez Rojas',
                category: 'Profesor',
                mode: 'Presencial',
                price: 70000, // Precio en formato numérico
                image: Entrenadora,
                description: 'Emma Gomez Rojas es una entrenadora profesional con más de 8 años de experiencia en el campo del fitness. Ofrece entrenamientos personalizados para ayudar a sus clientes a alcanzar sus metas de salud y acondicionamiento físico.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Entrenador} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Entrenador</h3>
              <p><strong>Nombre especialista:</strong> Thiago Camilo Gomez</p>
              <p>Categoría: Profesor</p>
              <p>Modalidad: Presencial</p>
              <p>1 H por $80.000</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Entrenador',
                name: 'Thiago Camilo Gomez',
                category: 'Profesor',
                mode: 'Presencial',
                price: 80000, // Precio en formato numérico
                image: Entrenador,
                description: 'Thiago Camilo Gomez es un entrenador con una vasta experiencia en entrenamiento físico y deportivo. Ofrece programas de entrenamiento personalizados y adaptados a las necesidades individuales de cada cliente.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Electricistas} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Electricistas</h3>
              <p><strong>Nombre especialista:</strong> Michale Camilo Felez</p>
              <p>Categoría: Servicio hogar</p>
              <p>Modalidad: Presencial</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Electricistas',
                name: 'Michale Camilo Felez',
                category: 'Servicio hogar',
                mode: 'Presencial',
                services: [
                  { name: 'Instalación eléctrica', price: 150000 },
                  { name: 'Reparación eléctrica', price: 90000 }
                ],
                image: Electricistas,
                description: 'Michale Camilo Felez es un electricista con más de 10 años de experiencia en la industria. Ofrece servicios de alta calidad para instalaciones eléctricas, reparaciones y mantenimiento.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Psicologa} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Psicóloga</h3>
              <p><strong>Nombre especialista:</strong> Paula Camila Felez</p>
              <p>Categoría: Profesional</p>
              <p>Modalidad: Presencial/virtual</p>
              <p>Cobro es depende del servicio</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Psicóloga',
                name: 'Paula Camila Felez',
                category: 'Profesional',
                mode: 'Presencial/virtual',
                price: 100000, // Precio en formato numérico
                image: Psicologa,
                description: 'Paula Camila Felez es una psicóloga con una vasta experiencia en la terapia individual y grupal. Ofrece sesiones tanto presenciales como virtuales para adaptarse a las necesidades de sus pacientes.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Desarrollador} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Programador</h3>
              <p><strong>Nombre especialista:</strong> Lucas Mendoza Felez</p>
              <p>Categoría: Profesional</p>
              <p>Modalidad: Presencial/virtual</p>
              <p>Cobro es depende del servicio</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Programador',
                name: 'Lucas Mendoza Felez',
                category: 'Profesional',
                mode: 'Presencial/virtual',
                price: 90000, // Precio en formato numérico
                image: Desarrollador,
                description: 'Lucas Mendoza Felez es un programador experto en desarrollo web y móvil. Ofrece servicios de desarrollo a medida, incluyendo aplicaciones web, aplicaciones móviles y soluciones de software personalizadas.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="service-card">
            <img src={Avartaf} alt="Avatar" className="imagx" />
            <IonCardContent>
              <h3>Profesora de frances</h3>
              <p><strong>Nombre especialista:</strong> Paula Andrea Gomez</p>
              <p>Categoría: Profesor</p>
              <p>Modalidad: Virtual/Presencial</p>
              <p>1 H por $80.000</p>
              <IonButton expand="block" onClick={() => openInfoModal({
                title: 'Profesora de frances',
                name: 'Paula Andrea Gomez',
                category: 'Profesor',
                mode: 'Virtual/Presencial',
                price: 90000, // Precio en formato numérico
                image: Avartaf,
                description: 'Paula Andrea Gomez es una profesora de frances con más de 2 años de experiencia. Especializada en enseñar a estudiantes de todos los niveles, su método se centra en la comunicación efectiva y la práctica constante. Ofrece clases tanto virtuales como presenciales, adaptándose a las necesidades de cada estudiante.'
              })}>Contactar</IonButton>
            </IonCardContent>
          </IonCard>
        </IonRow>
      </IonGrid>

      <IonModal isOpen={isInfoModalOpen} onDidDismiss={closeInfoModal}>
        <IonHeader>
          <IonToolbar color={'tertiary'}>
            <IonTitle>{modalContent.title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeInfoModal}>
                <IonIcon icon={closeOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonImg src={modalContent.image} alt={modalContent.name} className="imagx" />
                <p><strong>Nombre especialista:</strong> {modalContent.name}</p>
                <p><strong>Categoría:</strong> {modalContent.category}</p>
                <p><strong>Modalidad:</strong> {modalContent.mode}</p>
                {modalContent.category === 'Servicio hogar' ? (
                  <>
                    <IonItem>
                      <IonLabel position="stacked">Servicio</IonLabel>
                      <IonSelect value={selectedService} placeholder="Seleccionar servicio" onIonChange={handleServiceChange}>
                        {modalContent.services.map((service: any) => (
                          <IonSelectOption key={service.name} value={service.name}>{service.name} - ${service.price}</IonSelectOption>
                        ))}
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="stacked">Total a Pagar</IonLabel>
                      <IonInput value={`$${servicePrice}`} readonly />
                    </IonItem>
                  </>
                ) : (
                  <>
                    <IonItem>
                      <IonLabel position="stacked">Horas</IonLabel>
                      <IonInput
                        type="number"
                        value={hours}
                        onIonChange={handleHoursChange}
                        min="1"
                        step="1"
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="stacked">Total a Pagar</IonLabel>
                      <IonInput value={`$${modalContent.price * hours}`} readonly />
                    </IonItem>
                  </>
                )}
                <p><strong>Descripción:</strong> {modalContent.description}</p>
                <IonButton expand="block" color='tertiary' onClick={() => openFormModal(modalContent)}>Siguiente</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonModal isOpen={isFormModalOpen} onDidDismiss={closeFormModal}>
        <IonHeader>
          <IonToolbar color={'tertiary'}>
            <IonTitle>{modalContent.title}</IonTitle>
            <IonButtons className='toolbarr' onClick={closeFormModal} slot="end">
              <IonIcon icon={closeOutline} />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1 className='htext'>Datos para estudiantes</h1>
                <IonItem>
                  <p className='textp'> <IonIcon icon={alertCircleOutline} /> Ingresar datos correctos</p>
                  <IonLabel position='stacked'>Nombre y Apellido </IonLabel>
                  <IonInput name='nombreyapellido' type='text' value={formData.nombreyapellido} onIonChange={handleInputChange}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Correo electrónico</IonLabel>
                  <IonInput name='email' type="email" value={formData.email} onIonChange={handleInputChange}></IonInput>
                </IonItem>
                <h2 className='htext'>Escoger la fecha</h2>
                <IonItem>
                  <IonDatetime name='date' presentation='date' value={formData.date} onIonChange={handleInputChange}></IonDatetime>
                </IonItem>
                <h2 className='htext'>Escoger la hora</h2>
                <IonItem>
                  <IonDatetime name='time' presentation="time" value={formData.time} onIonChange={handleInputChange}></IonDatetime>
                </IonItem>
                <IonItem>
                  <IonLabel position='stacked'>Modalidad</IonLabel>
                  <IonSelect value={selectedModality} placeholder="Seleccionar modalidad" onIonChange={handleModalityChange}>
                    <IonSelectOption value="presencial">Presencial</IonSelectOption>
                    <IonSelectOption value="virtual">Virtual</IonSelectOption>
                  </IonSelect>
                </IonItem>
                {selectedModality === 'presencial' && (
                  <IonItem>
                    <IonLabel position='stacked'>Lugar</IonLabel>
                    <IonInput name='lugar' type='text' value={formData.lugar} onIonChange={handleInputChange}></IonInput>
                  </IonItem>
                )}
                {selectedModality === 'virtual' && (
                  <>
                    <IonItem>
                      <IonLabel position='stacked'>Teléfono</IonLabel>
                      <IonInput name='telefono' type='tel' value={formData.telefono} onIonChange={handleInputChange}></IonInput>
                    </IonItem>
                    <IonItem>
                      <a href="https://teams.microsoft.com/" target="_blank" rel="noopener noreferrer">Crear cuenta de Teams</a>
                      <IonLabel position='stacked'>Enlace de Teams</IonLabel>
                      <IonInput name='enlaceTeams' type='url' value={formData.enlaceTeams} onIonChange={handleInputChange}></IonInput>
                    </IonItem>
                  </>
                )}
                <IonItem>
                  <IonLabel position="stacked">Descripción</IonLabel>
                  <IonTextarea name="descripcion" rows={4} value={formData.descripcion} onIonChange={handleInputChange}></IonTextarea>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Total a Pagar</IonLabel>
                  <IonInput value={`$${modalContent.category === 'Servicio hogar' ? servicePrice : modalContent.price * hours}`} readonly />
                </IonItem>
                <IonButton expand="block" color='tertiary' onClick={openPaymentModal} disabled={!isFormValid()}>Siguiente</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonModal isOpen={isPaymentModalOpen} onDidDismiss={closePaymentModal}>
        <IonHeader>
          <IonToolbar color={'tertiary'}>
            <IonTitle>Forma de Pago</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closePaymentModal}>
                <IonIcon icon={closeOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1 className='htext'>Seleccionar Forma de Pago</h1>
                <IonItem>
                  <IonLabel position='stacked'>Método de Pago</IonLabel>
                  <IonSelect value={paymentMethod} placeholder="Seleccionar método de pago" onIonChange={handlePaymentMethodChange}>
                    <IonSelectOption value="pse">PSE</IonSelectOption>
                    <IonSelectOption value="credito">Tarjeta de Crédito</IonSelectOption>
                    <IonSelectOption value="debito">Tarjeta de Débito</IonSelectOption>
                  </IonSelect>
                </IonItem>
                {paymentMethod === 'pse' && (
                  <IonItem>
                    <IonLabel position='stacked'>Banco</IonLabel>
                    <IonSelect placeholder="Seleccionar banco">
                      {bancosColombia.map((banco, index) => (
                        <IonSelectOption key={index} value={banco}>{banco}</IonSelectOption>
                      ))}
                    </IonSelect>
                  </IonItem>
                )}
                {paymentMethod === 'credito' && (
                  <>
                    <IonItem>
                      <IonLabel position='stacked'>Número de Tarjeta</IonLabel>
                      <IonInput type='text' placeholder="Ingrese el número de tarjeta"></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position='stacked'>Fecha de Vencimiento</IonLabel>
                      <IonDatetime presentation="date"></IonDatetime>
                    </IonItem>
                    <IonItem>
                      <IonLabel position='stacked'>Código CVV</IonLabel>
                      <IonInput type='text' placeholder="Ingrese el código CVV"></IonInput>
                    </IonItem>
                  </>
                )}
                {paymentMethod === 'debito' && (
                  <>
                    <IonItem>
                      <IonLabel position='stacked'>Número de Tarjeta</IonLabel>
                      <IonInput type='text' placeholder="Ingrese el número de tarjeta"></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position='stacked'>Fecha de Vencimiento</IonLabel>
                      <IonDatetime presentation="date"></IonDatetime>
                    </IonItem>
                    <IonItem>
                      <IonLabel position='stacked'>Código CVV</IonLabel>
                      <IonInput type='text' placeholder="Ingrese el código CVV"></IonInput>
                    </IonItem>
                  </>
                )}
                <IonButton expand="block" color='tertiary' onClick={validatePayment}>Pagar</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default Home;
