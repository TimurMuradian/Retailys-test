
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ProductList = ({ products }) => {
  return (
    <div>
      <Box sx={{textAlign:"center"}}>All Items:</Box>
      <ul>
        {products.map(({ attributes }) => (
          <Box sx={{ p: 1, fontSize: 18 }}>
            <Paper>
              <li key={attributes.code}>{attributes.name}</li>
            </Paper>
          </Box>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
