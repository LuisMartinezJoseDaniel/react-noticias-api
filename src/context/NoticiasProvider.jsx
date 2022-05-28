import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("technology");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarApiNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const {
        data: { articles, totalResults },
      } = await axios( url );
      
      setNoticias(articles);
      setTotalNoticias( totalResults );
      setPagina( 1 );
    };

    consultarApiNoticias();
  }, [categoria] );
  
  useEffect(() => {
    const consultarApiNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const {
        data: { articles, totalResults },
      } = await axios( url );
      
      setNoticias(articles);
      setTotalNoticias(totalResults);
    };

    consultarApiNoticias();
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e,valorPagina) => {
    setPagina(valorPagina)
  }
  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
