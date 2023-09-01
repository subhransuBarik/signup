import TableData from "../components/Table";
const Home = () => {
  const handleclick = ()=>{
    localStorage.removeItem("token");
    window.location.reload()
  }
  return (
    <div className="homeContainer">
      <button className="logout" onClick={handleclick}>LOGOUT</button>
      <TableData/>
    </div>
  );
};

export default Home;
