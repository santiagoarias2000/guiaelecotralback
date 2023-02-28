export const SQL_MUNICIPIO = {
  LIST_MUNICIPIO:
    "SELECT mu.id_municipality,mu.name_municipality, mu.name_municipality \
    FROM municipality mu \
    INNER JOIN department dp ON dp.id_department = mu.id_department \
    WHERE dp.id_department=$1 \
    ORDER BY mu.name_municipality ASC",
};
