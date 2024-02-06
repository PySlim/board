import {Migration} from "../connectors/migrators";


export const up: Migration = async (params) => {
    return params.context.query(`SET check_function_bodies = false
;

CREATE TABLE BOARD(
  ID serial NOT NULL,
  TITLE varchar(200) NOT NULL,
  COLOR varchar(50) NOT NULL,
  STATUS boolean NOT NULL,
  CREATED timestamp NOT NULL,
  UPDATED timestamp NOT NULL,
  USERS_ID integer NOT NULL,
  CONSTRAINT BOARD_pkey PRIMARY KEY(ID)
);

COMMENT ON TABLE BOARD IS 'Conjunto de pizarras que puede tener un usuario';

CREATE TABLE CARD(
  ID serial NOT NULL,
  TITLE varchar(250) NOT NULL,
  BODY varchar(500) NOT NULL,
  PREVIEW integer,
  NEXT integer,
  CREATED timestamp NOT NULL,
  UPDATED timestamp NOT NULL,
  LIST_ID integer NOT NULL,
  CONSTRAINT CARD_pkey PRIMARY KEY(ID)
);

COMMENT ON TABLE CARD IS 'Agrupa todas las card que puede tener una lista';

CREATE TABLE LIST(
  ID serial NOT NULL,
  TITLE varchar(200) NOT NULL,
  STATUS boolean NOT NULL,
  CREATED timestamp NOT NULL,
  UPDATED timestamp NOT NULL,
  BOARD_ID integer NOT NULL,
  CONSTRAINT LIST_pkey PRIMARY KEY(ID)
);

COMMENT ON TABLE LIST IS
  'Agrupa el cojunto de listas que puede tener un usuario';

CREATE TABLE USERS(
  ID serial NOT NULL,
  NAME varchar(100) NOT NULL,
  EMAIL varchar(200) NOT NULL,
  PASSWORD varchar(200) NOT NULL,
  STATUS boolean NOT NULL,
  CREATED timestamp NOT NULL,
  UPDATED timestamp NOT NULL,
  CONSTRAINT USERS_pkey PRIMARY KEY(ID)
);

COMMENT ON TABLE USERS IS 'Conjunto de usuarios de la  aplicación board';

ALTER TABLE BOARD
  ADD CONSTRAINT BOARD_USERS_ID_fkey
    FOREIGN KEY (USERS_ID) REFERENCES USERS (ID);

ALTER TABLE LIST
  ADD CONSTRAINT LIST_BOARD_ID_fkey
    FOREIGN KEY (BOARD_ID) REFERENCES BOARD (ID);

ALTER TABLE CARD
  ADD CONSTRAINT CARD_LIST_ID_fkey
    FOREIGN KEY (LIST_ID) REFERENCES LIST (ID);
`);
};
export const down: Migration = async (params) => {
    return params.context.query(`RAISE EXCEPTION 'down migration not implemented'`);
};
