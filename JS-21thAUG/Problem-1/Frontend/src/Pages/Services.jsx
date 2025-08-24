import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";


function Services() {
const [services, setServices] = useState([]);


useEffect(() => {
axios.get("http://localhost:5000/api/services").then((res) => {
setServices(res.data);
});
}, []);


return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{services.map((service) => (
<ServiceCard key={service._id} service={service} />
))}
</div>
);
}


export default Services;