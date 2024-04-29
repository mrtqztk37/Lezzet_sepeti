import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataByRestId } from "../../redux/actions/producktActions";
import ProdDetail from "./ProdDetail";
import RestDetail from "./RestDetail";

const Restaurant = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataByRestId(id));
  }, []);

  return (
    <div>
      <div className="shadow">
        <Container>
          <RestDetail />
        </Container>
      </div>
      <Container>
        <ProdDetail />
      </Container>
    </div>
  );
};

export default Restaurant;
