CREATE TABLE outcome_mapping (
    code INTEGER PRIMARY KEY,
    outcome TEXT NOT NULL
);

CREATE TABLE servus_checks (
    id TEXT PRIMARY KEY,    
    service_name TEXT NOT NULL,
    method TEXT NOT NULL,
    response_time_ms INTEGER,
    check_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    outcome INTEGER NOT NULL,
    FOREIGN KEY (outcome) REFERENCES outcome_mapping(code),
    CHECK (outcome >= 1 AND outcome <= 4) -- Adding a check constraint to ensure outcome values are within the range of 1 to 4
);