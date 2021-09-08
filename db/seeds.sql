USE employees_db

INSERT INTO department 
(department_name)
VALUES
    ('HR'),
    ('Sales'),
    ('Ecommerce'),
    ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Manager', 70000, 1),
    ('Payroll', 40000, 1),
    ('Accounting', 50000, 1),
    ('Manager', 65000, 2),
    ('Head Salesperson', 55000, 2),
    ('Salesperson', 50000, 2),
    
    ('Developer', 85000, 3),
    ('Digital Merchandiser', 65000, 3),
    ('Manager', 50000, 4),
    ('Customer Service Supervisor', 40000, 4),
    ('Customer Service Rep', 30000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jessie', 'Williams', 1, NULL),
    ('Jaden', 'Marting', 2, 1),
    ('Jason', 'Clarke', 3, NULL),
    ('Aaron', 'Ducey', 4, 3),
    ('Julie', 'Mainzer', 5, NULL),
    ('Jin', 'Cha', 6, 5)