import { ArrowDownward, ArrowUpward, People } from "@mui/icons-material";
import { Button, IconButton, Box } from "@mui/material";
import { height } from "@mui/system";
import BoxBtns from "components/BoxBtns";
import FloorPersons from "components/FloorPersons";
import Person from "components/Persons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  setDownToFloorThree,
  setFloor,
  setPeopleToFloorFive,
  setPeopleToFloorFour,
  setPeopleToFloorOne,
  setPeopleToFloorSix,
  setPeopleToFloorThree,
  setPeopleToFloorTwo,
  setUpToFloorThree,
} from "redux/slices/elevatorSlice";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";
import { random } from "utility/functions";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const elevator = useAppSelector((state) => state.elevator);
  const dispatch = useAppDispatch();

  const getRandomPeople = () =>
    Array.from({ length: random(1, 7) }, (v, i) => ({
      ancho: random(1, 5),
      alto: random(7, 25),
      peso: random(70, 90),
    }));

  const managePeople = (persons: Array<any>) => {
    if (persons.length > 0) {
      const people = [...persons];
      let ascensorPersons: Array<any> = [];
      let peso = ascensorPersons
        .map((i: any) => i.peso)
        .reduce((p, c) => p + c, 0);
      for (const i in persons) {
        peso = ascensorPersons
          .map((i: any) => i.peso)
          .reduce((p, c) => p + c, 0);
        if (peso + persons[i].peso < 100) {
          ascensorPersons.push(persons[i]);
          people?.splice(Number(i), 1);
        }
      }
      return {
        ascensor: ascensorPersons,
        seQueda: people,
      };
    }
  };

  useEffect(() => {
    dispatch(setPeopleToFloorTwo({ people: getRandomPeople() }));
    dispatch(setPeopleToFloorThree({ people: getRandomPeople() }));
    dispatch(setPeopleToFloorFour({ people: getRandomPeople() }));
    dispatch(setPeopleToFloorFive({ people: getRandomPeople() }));
    dispatch(setPeopleToFloorSix({ people: getRandomPeople() }));
  }, []);

  useEffect(() => {
    managePeople(elevator.six.people);
  }, [elevator]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Manejo de procesadores | Ascensor</title>
        <meta
          name="description"
          content="Proyecto final de sistemas operativos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ position: "relative" }}>
        <Image
          src="/img/edificio-de-oficinas.png"
          width={700}
          height={700}
          layout="fixed"
          alt="edificio"
        />
        <div
          style={{
            background: "red",
            width: 47.1,
            height: 47.1,
            position: "absolute",
            top: 110,
            left: 317,
            transform: `translate(10px,${
              0 + (6 - elevator.currentFloor) * 94.1
            }px)`,
            transition: "all ease 2s",
            display: "flex",
            gap: "5px",
            justifyContent: "flex-end",
            alignItems: "baseline",
          }}
        >
          {elevator.six.people.map((i, index) => (
            <Person key={index} width={i.ancho} height={i.alto} />
          ))}
        </div>
        <FloorPersons floor={6}>
          {elevator.six.people.map((i, index) => (
            <Person key={index} width={i.ancho} height={i.alto} />
          ))}
        </FloorPersons>
        <FloorPersons floor={5}>
          {elevator.five.people.map((i, index) => (
            <Person key={index} width={i.ancho} height={i.alto} />
          ))}
        </FloorPersons>
        <FloorPersons floor={4}>
          {elevator.four.people.map((i, index) => (
            <Person key={index} width={i.ancho} height={i.alto} />
          ))}
        </FloorPersons>
        <FloorPersons floor={3}>
          {elevator.three.people.map((i, index) => (
            <Person key={index} width={i.ancho} height={i.alto} />
          ))}
        </FloorPersons>
        <FloorPersons floor={2}>
          {elevator.two.people.map((i, index) => (
            <Person key={index} width={i.ancho} height={i.alto} />
          ))}
        </FloorPersons>
        <BoxBtns
          disabledUp={true}
          top={110}
          upOnClick={() => {}}
          downOnClick={() => {}}
          isSelectedDown={elevator.six.down}
          isSelectedUp={elevator.six.up}
        />
        <BoxBtns
          top={210}
          upOnClick={() => {}}
          downOnClick={() => {}}
          isSelectedDown={elevator.five.down}
          isSelectedUp={elevator.five.up}
        />
        <BoxBtns
          top={300}
          upOnClick={() => {}}
          downOnClick={() => {}}
          isSelectedDown={elevator.four.down}
          isSelectedUp={elevator.four.up}
        />
        <BoxBtns
          top={400}
          upOnClick={() => dispatch(setUpToFloorThree(!elevator.three.up))}
          downOnClick={() =>
            dispatch(setDownToFloorThree(!elevator.three.down))
          }
          isSelectedDown={elevator.three.down}
          isSelectedUp={elevator.three.up}
        />
        <BoxBtns
          top={500}
          upOnClick={() => {}}
          downOnClick={() => {}}
          isSelectedDown={elevator.two.down}
          isSelectedUp={elevator.two.up}
        />
        <BoxBtns
          top={600}
          disabledDown={true}
          upOnClick={() => {}}
          downOnClick={() => {}}
          isSelectedDown={elevator.one.down}
          isSelectedUp={elevator.one.up}
        />
      </div>
      <Button
        onClick={() =>
          elevator.currentFloor !== 6 &&
          dispatch(setFloor(elevator.currentFloor + 1))
        }
      >
        subir
      </Button>
      <Button
        onClick={() =>
          elevator.currentFloor !== 1 &&
          dispatch(setFloor(elevator.currentFloor + 1))
        }
      >
        bajar
      </Button>

      <footer className={styles.footer}>
        <a
          href="https://github.com/bue221"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho en colombia 🖤 (bue221)
        </a>
      </footer>
    </div>
  );
};

export default Home;
