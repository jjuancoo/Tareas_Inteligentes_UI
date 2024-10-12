import React from 'react'

const Information = () => {
  return (
    <>
       <div className="mt-12">
          <h1 className="text-3xl text-center font-bold my-8">
            Todo lo que necesitas para colaborar eficientemente
          </h1>
          <div className="grid grid-cols-3 p-4 ml-4">
            <div className="mb-6">
              <span className="material-symbols-rounded ml-2">task_alt</span>
              <h2 className="font-semibold text-xl">
                Gestión de tareas intuitiva
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Organiza y prioriza el trabajo de tu equipo con nuestra interfaz
                drag-and-drop fácil de usar.
              </p>
            </div>

            <div className="mb-6">
              <span className="material-symbols-rounded ml-2">group</span>
              <h2 className="font-semibold text-xl">
                Colaboración en tiempo real
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Trabaja simultáneamente con tu equipo en documentos, tareas y
                proyectos sin conflictos.
              </p>
            </div>

            <div className="mb-6">
              <span className="material-symbols-rounded ml-2">
                calendar_today
              </span>
              <h2 className="font-semibold text-xl">Calendario integrado</h2>
              <p className="mt-4 text-gray-500 text-lg">
                Sincroniza deadlines, eventos y reuniones directamente con tus
                tareas y proyectos.
              </p>
            </div>

            <div className="mt-10">
              <span className="material-symbols-rounded ml-2">equalizer</span>
              <h2 className="font-semibold text-xl">Análisis y reportes</h2>
              <p className="mt-4 text-gray-500 text-lg">
                Organiza y prioriza el trabajo de tu equipo con nuestra interfaz
                drag-and-drop fácil de usar.
              </p>
            </div>

            <div className="mt-10">
              <span className="material-symbols-rounded ml-2">neurology</span>
              <h2 className="font-semibold text-xl">
                Personalización avanzada
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Adapta Taski a tus necesidades con vistas personalizadas, campos
                y flujos de trabajo.
              </p>
            </div>

            <div className="mt-10">
              <span className="material-symbols-rounded ml-2">bolt</span>
              <h2 className="font-semibold text-xl">Integraciones potentes</h2>
              <p className="mt-4 text-gray-500 text-lg">
                Conecta Taski con tus herramientas favoritas para un flujo de
                trabajo sin interrupciones.
              </p>
            </div>
          </div>
        </div>

    </>
  )
}

export default Information