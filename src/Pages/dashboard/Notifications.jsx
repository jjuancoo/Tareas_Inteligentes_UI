import React, { useState } from "react";
import "material-symbols";
import Sidebar from "../../components/Sidebar";

const initialNotifications = [
  {
    id: "1",
    type: "task",
    content: "Nueva tarea asignada: Revisar propuesta de diseño",
    time: "Hace 5 minutos",
    read: false,
  },
  {
    id: "2",
    type: "alert",
    content: "Recordatorio: Reunión de equipo en 30 minutos",
    time: "Hace 10 minutos",
    read: false,
  },
  {
    id: "3",
    type: "message",
    content:
      'Ana comentó en tu tarea: "Excelente trabajo en la última presentación!"',
    time: "Hace 1 hora",
    read: true,
  },
  {
    id: "4",
    type: "event",
    content: "Nuevo evento: Lanzamiento de producto el próximo lunes",
    time: "Hace 2 horas",
    read: false,
  },
  {
    id: "5",
    type: "task",
    content: "Tarea completada: Actualizar documentación del proyecto",
    time: "Hace 1 día",
    read: true,
  },
  {
    id: "6",
    type: "message",
    content:
      'Carlos te mencionó en un comentario: "@usuario, ¿podrías revisar esto?"',
    time: "Hace 2 días",
    read: false,
  },
  {
    id: "7",
    type: "alert",
    content: "Alerta de seguridad: Se detectó un inicio de sesión inusual",
    time: "Hace 3 días",
    read: true,
  },
  {
    id: "8",
    type: "event",
    content: "Recordatorio: La fecha límite del proyecto se acerca",
    time: "Hace 4 días",
    read: false,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  //Marcar como leida
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  //Marcar todas las notificaciones como leidas
  const markAllAsRead = () =>
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );

  //Eliminar todas las notificaciones como leidas
  const deleteNotification = (id) =>
    setNotifications(notifications.filter((not) => not.id !== id));

  //Filtrar notificaciones
  const filteredNotifications = notifications
    .filter((notif) => filter === "all" || notif.type === filter)
    .filter((notif) =>
      notif.content.toLowerCase().includes(search.toLowerCase())
    );

    const getIcon = (type) => {
      switch (type) {
        case "task":
          return (
            <span className="material-symbols-rounded text-green-500">
              check_circle
            </span>
          );
        case "alert":
          return (
            <span className="material-symbols-rounded text-red-500">error</span>
          );
        case "message":
          return (
            <span className="material-symbols-rounded text-blue-500">chat</span>
          );
        case "event":
          return (
            <span className="material-symbols-rounded text-purple-500">
              event
            </span>
          );
        default:
          return null;
      }
    };
    
  return (
    <>
      <Sidebar />
      <div className="p-6 sm:ml-64">
        <div className="flex justify-center items-center">
          <div className="w-2/3">
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-row">
                <span className="material-symbols-rounded mx-2">
                  notifications
                </span>
                <h1 className="font-bold text-3xl">Notificaciones</h1>
              </div>
              <div className="mx-8">
                <button
                  onClick={() => markAllAsRead()}
                  className="bg-gray-900 px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-100"
                >
                  Marcar todas como leidas
                </button>
              </div>
            </div>

            <div className="mt-6 mb-6">
              <input
                className="w-full p-2 rounded-lg border mx-2"
                placeholder="Buscar notificaciones..."
              />
              {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select> */}
            </div>

            <div className="h-96 overflow-y-auto border rounded-lg p-4" style={{ maxHeight: "400px" }}>
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 mb-4 flex justify-between items-center rounded-lg border ${
                      !notification.read ? "bg-blue-50" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center">
                      {getIcon(notification.type)}
                      <div className="ml-4">
                        <h2 className="font-semibold">{notification.content}</h2>
                        <p className="text-sm text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="mr-4 px-3 py-2 border bg-white rounded-lg"
                        >
                          <span className="material-symbols-rounded mb-2 mx-2">check</span>
                          Marcar como leída
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <span className="material-symbols-rounded">delete</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="font-semibold text-center text-gray-500">
                  Sin notificaciones
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
