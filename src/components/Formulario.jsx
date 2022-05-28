import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import { CATEGORIAS } from "../static";

const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select label="Categoria" onChange={handleChangeCategoria} value={ categoria }>
          <MenuItem>Seleccione la categoria</MenuItem>
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>

      </FormControl>
    </form>
  );
};

export default Formulario;
