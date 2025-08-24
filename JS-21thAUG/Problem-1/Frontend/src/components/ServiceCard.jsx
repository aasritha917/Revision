import React from "react";


function ServiceCard({ service }) {
return (
<div className="border p-4 rounded-lg shadow-md">
<h2 className="text-lg font-bold">{service.name}</h2>
<p>{service.description}</p>
<p className="text-blue-600 font-semibold">${service.price}</p>
</div>
);
}


export default ServiceCard;