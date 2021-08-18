BEGIN;
DROP TABLE IF EXISTS categories, comments, category_post, posts CASCADE;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    color VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    title VARCHAR(250) NOT NULL,
    body TEXT NOT NULL,
    created_at DATE NOT NULL,
    category_id INTEGER REFERENCES categories(id)
);



-- CREATE TABLE category_post (
--     id SERIAL PRIMARY KEY,
--     post_id INTEGER REFERENCES posts(id),
--     category_id INTEGER REFERENCES catgories(id)
-- );

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    body TEXT NOT NULL,
    post_id INTEGER REFERENCES posts(id)
);

INSERT INTO categories (name,color) VALUES 
('wisdom', 'orange'),
('poetry', 'blue'),
('war', 'red'),
('history', 'black');

INSERT INTO posts (username,title, body, created_at,category_id) VALUES 
(
'Nizar Zakout', 
'In the presence of absence',
'He complains of malnutrition, should he stop
taking fish oil? No, but he remembers things that people of his age cannot bear.
He wishes to be a butterfly, do butterflies have memories?
Butterflies are memories for those who master the singing near
the spring of water. Did he sing? He is still young,
so how can he roll his words on a platform of sand?
He complains about the bad of the present, so take him to tomorrow.',
'2020-10-10',
1
),

(
'Abdallah',
'Memory to Forget', 
'"Night descends upon us. We must heed the concerns of those 
who have left us and gone on their own night, 
forgetting or remembering a passage from the farewell sermon."', 
'2021-2-28',
2
);

-- INSERT INTO category_post (post_id, category_id) VALUES 
-- (1,2),
-- (1,4),
-- (2,3);

INSERT INTO comments (username, body, post_id) VALUES
('Fadi', 'Waaaaaaaaw This is amazing words!', 1),
('Mohammed', 'NICE MAN', 1),
('Alaa', 'I like this', 1),
('Hani', 'Waaaaaaaaw This is amazing words!', 2),
('Yasir', 'waw', 2);

COMMIT;