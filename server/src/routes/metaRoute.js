import config from "../../config.json" assert { type: "json" };

for (let key in config) {
    if (Array.isArray(config[key])) {
        config[key].forEach(item => {
            removeConnectionFields(item); // Remove connection fields for each item
        });
    }
};

export default function metaRoute(req, res) {
    res.send(config);
}

// Function to remove connection fields
function removeConnectionFields(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            removeConnectionFields(obj[key]); // Recursively check nested objects
        } else {
            if (key.startsWith('connection-')) {
                delete obj[key]; // Remove connection fields
            }
        }
    }
}