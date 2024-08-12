function Component() {
  return (
    <section>
    <h1>Marinette Dupain-Cheng</h1>
    <img
      src="https://i.gifer.com/origin/ba/bac39eaf65d297c27a5b7e0664a59251_w200.gif"
      alt="Ladybug"
    />
    </section>
  );
}

export default function App() {
  return (
    <div className="container">
     <Component/>
     <hr/>
     <Component/>
     <hr/>
     <Component/>

    </div>
  );
}

