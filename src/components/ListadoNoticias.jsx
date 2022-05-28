import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

  
  const totalPaginas = Math.ceil(totalNoticias / 20);
  

  return (
    <>
      <Typography
        textAlign="center"
        variant="h3"
        component={"h2"}
        marginTop={3}
      >
        Últimas noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginY: 5,
        }}
      >
        <Pagination
          page={pagina}
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
