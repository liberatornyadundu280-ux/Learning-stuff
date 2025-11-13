-- DROP TABLE suppliers CASCADE CONSTRAINTS;
CREATE TABLE suppliers (
    supplier_id VARCHAR(10) PRIMARY KEY,
    supplier_name VARCHAR(50),
    supplier_location VARCHAR(50)
);

INSERT INTO suppliers (supplier_id, supplier_name, supplier_location)
VALUES
('s1', 'CompanyX', 'Delhi'),
('s2', 'CompanyY', 'Mumbai');


-- DROP TABLE projects CASCADE CONSTRAINTS;
CREATE TABLE projects (
    project_id VARCHAR(10) PRIMARY KEY,
    project_name VARCHAR(100),
    dead_line DATE
);

INSERT INTO projects (project_id, project_name, dead_line)
VALUES
('j1', 'Houses for Poor', TO_DATE('2025-12-26', 'YYYY-MM-DD')),
('j2', 'Assembly Building', TO_DATE('2026-06-17', 'YYYY-MM-DD'));


-- DROP TABLE products CASCADE CONSTRAINTS;
CREATE TABLE products (
    product_id VARCHAR(10) PRIMARY KEY,
    product_name VARCHAR(50)
);

INSERT INTO products (product_id, product_name)
VALUES
('p1', 'Cement'),
('p2', 'Bricks');


-- Mapping table
-- DROP TABLE supplier_product_project CASCADE CONSTRAINTS;
CREATE TABLE supplier_product_project (
    s_id VARCHAR(10),
    p_id VARCHAR(10),
    pro_id VARCHAR(10),
    PRIMARY KEY (s_id, p_id, pro_id),
    FOREIGN KEY (s_id) REFERENCES suppliers(supplier_id),
    FOREIGN KEY (p_id) REFERENCES products(product_id),
    FOREIGN KEY (pro_id) REFERENCES projects(project_id)
);

-- Insert data into supplier_product_project
INSERT INTO supplier_product_project (s_id, p_id, pro_id)
VALUES
('s1', 'p1', 'j2'),
('s1', 'p1', 'j1'),
('s1', 'p2', 'j1'),
('s2', 'p1', 'j1');

SELECT * FROM supplier_product_project;
