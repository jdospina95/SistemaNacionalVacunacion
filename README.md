# SistemaNacionalVacunacion

El gobierno nacional dentro de su iniciativa de Gobierno en Línea, ha venido construyendo un
portal web en el que se unifica tanto el acceso a la información como la elaboración de trámites y
la adquisición de servicios con el estado  
[1]
 .  
Cada niño colombiano desde que nace y hasta los 5 años, debe recibir una serie de vacunas que se
ajustan a un esquema de vacunación definido por el ministerio de salud y de la protección social
[2]
.  En adelante, siendo niño o adulto, a la persona se le pueden aplicar refuerzos y  otras vacunas
que no están en el esquema básico de vacunación. Por ejemplo, la vacuna de la fiebre amarilla es
obligatoria si se van a visitar zonas de riesgo, o se pueden aplicar refuerzos opcionales de la vacuna
de la Hepatitis B,  
Tétanos
/difteria, influenza, entre otras.
Cuando alguien recibe una vacuna, el personal médico diligencia un carnet para llevar el registro
de las vacunas que le han sido aplicadas a la persona. Sin embargo, con los años este carnet de
vacunación puede ser perdido fácilmente, lo que lleva a que una persona puede perder la traza de
las vacunas que le han sido aplicadas.  
Que un ciudadano no conozca qué vacunas le han sido aplicadas puede traerle complicaciones. Así
por ejemplo, existen vacunas que deben mantener cierta ventana de tiempo antes de ser aplicadas
de nuevo y existen vacunas que requieren un número determinado de dosis en ciertos períodos de
tiempo para no perder efectividad. 
El gobierno nacional desea desarrollar un sistema de información en el cuál se pueda sistematizar
la información del carnet de vacunación. La idea principal es que esta información pueda ser
consultada en todo momento por los ciudadanos, centros médicos y el  ministerio de la salud y la
protección social. Este sistema espera ser la solución tecnológica para restarle importancia al
carnet de vacunación en papel y garantizar la trazabilidad de la información de vacunación.
Usted ha sido contratado como arquitecto para liderar el desarrollo de esta aplicación.   Los
requisitos de alto nivel son: 

El sistema debe permitirle a cualquier ciudadano consultar su historial de vacunación
desde, un portal web o un dispositivo móvil dado un tipo y número de documento de
identidad. El número del documento de identidad y el tipo cambian al menos 3 veces
durante la vida de un ciudadano colombiano (registro civil, tarjeta de identidad y cédula de
ciudadanía). Por esa razón, un ciudadano puede tener registrados diferentes tipos y
números de identificación. Sin embargo, cada ciudadano únicamente podrá tener activo un
número y tipo de identificación al tiempo. Así, aunque el ciudadano cambie de documento
de identidad el carnet de vacunación pertenece siempre a la misma persona.  

Cada vez que tenga lugar un cambio de documento, el ciudadano debe acercarse con la
fotocopia de su nuevo documento de identidad al programa de vacunación de cualquier
centro   médico.     En   el   centro   médico,   un   funcionario   podrá   acceder   al   sistema   de
vacunación para adicionarle un nuevo tipo de documento al ciudadano. Para ello, deberá
Desarrollo Web 2017-1 
incorporar en el sistema el nuevo tipo de documento que corresponda al ciudadano, junto
con el número del documento y el escaneado del documento.  El sistema habilitará ese
nuevo documento como el documento de identidad principal del ciudadano. Este será el
documento utilizado para hacer búsquedas.

El sistema debe permitirle a las entidades prestadoras de servicios de salud autorizados
crear   o   actualizar   la   información   de   vacunación   de   una   persona   en   particular.   La
información que debe considerar el carnet de vacunación cuando se crea es: 
Nombre de la persona a vacunar, fecha de nacimiento, número del registro civil, imagen
escaneada del registro civil, número de certificado de nacimiento vivo, sexo, peso al nacer,
nombre del responsable,  dirección de residencia del responsable, ciudad de residencia del
responsable, nombre institución en la que se crea el carnet de vacunación, nombre y
documento de la persona que crea el carnet de vacunación.
Las entidades prestadores de servicios de salud deben registrar en el sistema para cada
vacuna que apliquen la edad de aplicación del paciente, el nombre de la vacuna, la dosis
de la vacuna, la fecha de la aplicación ( día , mes , año), laboratorio de la vacuna, número
del lote de la vacuna, IPS en la que se efectuó la vacunación, fecha del próximo refuerzo ( si
hay lugar), nombre de persona que aplicó la vacuna, documento de identidad de la
persona que aplicó la vacuna.  Esta información queda registrada tanto en el historial del
centro de salud como en el carnet de vacunación virtual del ciudadano.

El ministerio de salud podrá generar estadísticas sobre: el número total de personas
vacunadas por rango de fechas, departamento, ciudad,  vacuna, edad. Lista de personas
vacunadas  por: rango de fechas, departamento, ciudad,  tipo de vacuna, edad.

El sistema de información será el mismo a nivel nacional y se podrá acceder a él  a través
de internet. 

El sistema debe proveer un API REST que permita la integracion con sistemas externos.

El cliente considera que es fundamental que el sistema se encuentre disponible 24/7. Un
incumplimiento en esta condición llevará al cobro de multas por parte del cliente. Para
cumplir con este punto se debe configurar un balanceador de carga y por lo menos dos
nodos que reciban las peticiones.
Se solicita
1)
Un prototipo funcional del sistema usando HTML5, hojas de estilo y JavaScript. Adicional
se debe usar al menos un framework de los vistos en clase. 
2)
Un modelo de la base de datos que soporta el sistema.
3)
Descripción detallada del API REST propuesto.
4)
El prototipo funcional debe presentarse en maquinas virtuales o en contenedores virtuales
(docker).
5)
El codigo fuente debe estar en git.
Desarrollo Web 2017-1 
Reglas de juego:
•
El proyecto debera ser sustentado a todo el grupo el viernes 2 de Junio en el horario
normal.
•
Puede ser trabajado en grupos maximo de 3 personas.
Referencias
[1]
Gobierno_colombiano,   “Gobierno   en   Línea,”   2015.   [Online].   Available:
https://www.gobiernoenlinea.gov.co/.
[2]
MinSalud,   “Esquema   de   vacunación   Colombia,”   2015.   
[Online].   Available:
http://www.minsalud.gov.co/salud/Paginas/EsquemasdeVaunaci%C3%B3n.aspx. 
Anexo Carnet de vacunación Colombiano
:  
http://www.minsalud.gov.co/Documents/Salud%20P
%C3%BAblica/Vacunacion-PAI/carne-vacunas.pdf
