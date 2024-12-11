

function App() {

  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed"
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed"
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed"
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed"
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog"
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress"
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog"
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress"
    }
  ];

  const currentTask = [];
  const completedTask = [];

  tasks.forEach((curTask, index) => {
    if (curTask.state === "completed") {
      completedTask.push(curTask);

    } else {
      currentTask.push(curTask);
    }
  });


  const listCurrentTask = currentTask.map((curTask, index) => {
    return (
      <li key={index}><div>{curTask.title} --- {curTask.state}</div>
        <div>{curTask.priority}</div>
        <div>{curTask.estimatedTime}</div>
      </li>
    )
  });

  const listCompletedTask = completedTask.map((curTask,index) => {
    return (
      <li key={index}><div>{curTask.title} --- {curTask.state}</div>
        <div>{curTask.priority}</div>
        <div>{curTask.estimatedTime}</div>
      </li>
    )
  })


  return (
    <>
      <h2>Current Task (4)</h2>
      <ul>{listCurrentTask}</ul><br/><br/>

      <h2>Completed Task (6)</h2>
      <ul>{listCompletedTask}</ul>
    </>
  )

}

export default App
