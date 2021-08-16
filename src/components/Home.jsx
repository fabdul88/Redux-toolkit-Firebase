import React, { useEffect } from "react";
import styled from "styled-components";
import { ImgSlider } from "./ImgSlider";
import { Viewers } from "./Viewers";
import { Recommend } from "./Recommend";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movie/movieSlice";
import { NewDisney } from "./NewDisney";
import { Originals } from "./Originals";
import { Trending } from "./Trending";
import { Login } from "./Login";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            <div />;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return userName ? (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  ) : (
    <Login />
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    content: "";
    background: url("/images/home-background.png") center center/ cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
export { Home };
