CREATE TABLE IF NOT EXISTS word (
    id serial not null,
    "createdDate" timestamp not null default current_timestamp(6),
    "updatedDate" timestamp not null default current_timestamp(6),
    word varchar not null ,
    transcription  varchar,
    meaning varchar,
    comment varchar
);
