export const SQL_DETAILS_ESPECIFICS_CAMARA = {
    CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO:"SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS,dp.name_department, \
    jsonb_object(array['idDepartment',dp.id_department,'nameDepartment',dp.name_department]::TEXT[]) AS department \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
    WHERE vs.code_role=2 AND dp.id_department=$1 AND vs.code_district=1	\
    GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district , dp.name_department\
    ORDER BY sum(vs.number_votes) DESC",

    CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO:"SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS,dp.name_department,\
    jsonb_object(array['idDepartment',dp.id_department,'nameDepartment',dp.name_department]::TEXT[]) AS department \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
    WHERE vs.code_role=2 AND dp.id_department=$1 AND vs.code_district=4	\
    GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district , dp.name_department\
    ORDER BY sum(vs.number_votes) DESC",
    
    CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO:"SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS,dp.name_department,\
    jsonb_object(array['idDepartment',dp.id_department,'nameDepartment',dp.name_department]::TEXT[]) AS department \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
    WHERE vs.code_role=2 AND dp.id_department=$1 AND vs.code_district=5	\
    GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district , dp.name_department\
    ORDER BY sum(vs.number_votes) DESC",

    CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO_MUNICIPIO:"SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS,dp.name_department, mu.name_municipality, \
    jsonb_object(array['idDepartment',dp.id_department,'nameDepartment',dp.name_department]::TEXT[]) AS department, \
    jsonb_object(array['idMunicipality',mu.id_municipality,'nameMunicipality',mu.name_municipality]::TEXT[]) AS municipality \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
    WHERE vs.code_role=2 AND dp.id_department=$1 AND mu.id_municipality=$2 AND vs.code_district=1	\
    GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district , dp.name_department, mu.name_municipality,dp.id_department, mu.id_municipality \
    ORDER BY sum(vs.number_votes) DESC",

    CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO_MUNICIPIO:"SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS,dp.name_department, mu.name_municipality, \
    jsonb_object(array['idDepartment',dp.id_department,'nameDepartment',dp.name_department]::TEXT[]) AS department, \
    jsonb_object(array['idMunicipality',mu.id_municipality,'nameMunicipality',mu.name_municipality]::TEXT[]) AS municipality \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
    WHERE vs.code_role=2 AND dp.id_department=$1 AND mu.id_municipality=$2 AND vs.code_district=4	\
    GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district , dp.name_department, mu.name_municipality,dp.id_department, mu.id_municipality \
    ORDER BY sum(vs.number_votes) DESC",

    CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO_MUNICIPIO:"SELECT vs.candidate_name,vs.description_politicparty,vs.description_role,vs.description_district,sum(vs.number_votes) as VOTOS,dp.name_department, mu.name_municipality \
    jsonb_object(array['idDepartment',dp.id_department,'nameDepartment',dp.name_department]::TEXT[]) AS department, \
    jsonb_object(array['idMunicipality',mu.id_municipality,'nameMunicipality',mu.name_municipality]::TEXT[]) AS municipality, \
    FROM votes vs \
    INNER JOIN department dp ON dp.id_department = vs.id_department \
    INNER JOIN municipality mu ON mu.id_municipality = vs.id_municipality \
    WHERE vs.code_role=2 AND dp.id_department=$1 AND mu.id_municipality=$2 AND vs.code_district=5	\
    GROUP BY vs.candidate_name,vs.description_role,vs.description_politicparty, vs.description_district , dp.name_department, mu.name_municipality, dp.id_department, mu.id_municipality \
    ORDER BY sum(vs.number_votes) DESC",

    
    CIRCUNCRIPCION_EN_EL_EXTERIOR_CAMARA:'',
    CURULES_DE_PAZ_CAMARA:'',
}