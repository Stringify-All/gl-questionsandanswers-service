CREATE DATABASE IF NOT EXISTS product_questions

CREATE TABLE "questions"
(
 "question_id"          integer NOT NULL,
 "body"                 text NOT NULL,
 "question_date"        date NOT NULL,
 "asker_name"           text NOT NULL,
 "question_helpfulness" integer NOT NULL,
 "reported"             integer NOT NULL,
 CONSTRAINT "PK_questions" PRIMARY KEY ( "question_id" )
);

CREATE TABLE "photos"
(
 "id"        integer NOT NULL,
 "url"       text NOT NULL,
 "answer_id" integer NOT NULL,
 CONSTRAINT "PK_photos" PRIMARY KEY ( "id" ),
 CONSTRAINT "FK_41" FOREIGN KEY ( "answer_id" ) REFERENCES "answers" ( "answer_id" )
);

CREATE INDEX "fkIdx_41" ON "photos"
(
 "answer_id"
);

CREATE TABLE "answers"
(
 "answer_id"     integer NOT NULL,
 "body"          text NOT NULL,
 "date"          date NOT NULL,
 "answerer_name" text NOT NULL,
 "helpfulness"   integer NOT NULL,
 "question_id"   integer NOT NULL,
 CONSTRAINT "PK_answers" PRIMARY KEY ( "answer_id" ),
 CONSTRAINT "FK_35" FOREIGN KEY ( "question_id" ) REFERENCES "questions" ( "question_id" )
);

CREATE INDEX "fkIdx_35" ON "answers"
(
 "question_id"
);

CREATE TABLE "products"
(
 "product_id"  integer NOT NULL,
 "question_id" integer NOT NULL,
 CONSTRAINT "PK_product" PRIMARY KEY ( "product_id" ),
 CONSTRAINT "FK_38" FOREIGN KEY ( "question_id" ) REFERENCES "questions" ( "question_id" )
);

CREATE INDEX "fkIdx_38" ON "products"
(
 "question_id"
);