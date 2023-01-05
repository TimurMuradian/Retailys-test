import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const PartsList = ({ parts }) => {
    
  const dily = parts.filter((obj) =>
    Object.values(obj.attributes).some((el) => el === "Náhradní díly")
  );

  const dilyList = dily.map((obj) => obj.children);
  const dilyItems = dilyList
    .map((item) => item.map((item) => item.attributes))
        .flat();
    
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>Náhradní díly:</Box>
      <ul>
        {dilyItems.map((item) => (
          <Box sx={{ p: 1, fontSize: 18 }}>
            <Paper>
              <li key={item.code}>{item.name}</li>
            </Paper>
          </Box>
        ))}
      </ul>
    </div>
  );
};

export default PartsList;
