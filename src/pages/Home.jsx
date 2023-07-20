import Table from "../components/Table";

function Home(props) {
  return (
    <div className="h-screen w-screen bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex items-center justify-center">
      <div className="h-3/4 w-8/12 bg-white rounded justify-center pl-10 ">
        <Table table={props.table} />
      </div>
    </div>
  );
}

export default Home;
