import { useState, useEffect } from "react";
import "@styles/Activities.css"

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/activities")
            .then((response) => response.json())
            .then((data) => setActivities(data));
    }, []);

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleInscription = (nombreActividad) => {
        alert(`inscripto en ${nombreActividad}`);
    }

    return (
        <div className="activities-container">
            {activities.map((activity) => (
                <div className="activity-card" key={activity.id} >
                    <h3> {activity.nombre} </h3>
                    <p> {activity.descripcion} </p>
                    <ul>
                        {activity.horarios.map((horario, i) => (
                            <li key={i} >
                                Dia: {diasSemana[horario.dia]} - hora de inicio: {horario["hora-inicio"]} - hora de fin : {horario["hora-fin"]}
                            </li>
                        ))}
                    </ul>
                    { isLoggedIn && (
                        <button onClick={() => handleInscription(activity.nombre)}> inscribir </button>
                    )}
                    
                </div>
            ))}
        </div>
    )
}

export default Activities;