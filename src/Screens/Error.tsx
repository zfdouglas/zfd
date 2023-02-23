import notfound from "../assets/no-connection.png";
export const Error = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "5%" }}>
      <img
        style={{ width: "15%", margin: "auto" }}
        src={notfound}
        alt="not found icon"
      />
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "2%",
        }}
      >
        Not sure what you were looking for, but it's not here
      </h2>
    </div>
  );
};
