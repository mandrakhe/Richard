IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'areas')
BEGIN
    CREATE TABLE areas (
        id INT NOT NULL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL
    );
END;


IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'roles')
BEGIN
    CREATE TABLE roles (
        id INT NOT NULL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL
    );
END;


IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'empleados')
BEGIN
    CREATE TABLE empleados (
        id INT NOT NULL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        sexo CHAR(1) NOT NULL,
        area_id INT NOT NULL,
        boletin INT NOT NULL,
        description TEXT NOT NULL,
        FOREIGN KEY (area_id) REFERENCES areas(id)
    );
END;


IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'empleado_rol')
BEGIN
    CREATE TABLE empleado_rol (
        empleado_id INT NOT NULL,
        rol_id INT NOT NULL,
        PRIMARY KEY (empleado_id, rol_id),
        FOREIGN KEY (empleado_id) REFERENCES empleados(id),
        FOREIGN KEY (rol_id) REFERENCES roles(id)
    );
END;