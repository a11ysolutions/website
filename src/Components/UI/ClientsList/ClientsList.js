import "./ClientsList.css";
function ClientsList({ clients }) {
  return (
    <div className="container-clients">
      <div className="content-grid-clients" role={"list"}>
        {clients.map((c, index) => {
          return (
            <div key={index} className="clients-img-card" role={"listitem"}>
              <img alt={c.alt} src={c.src} style={c.style} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export { ClientsList };
