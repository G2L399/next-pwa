"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import axios from "axios";

interface Outlet {
  id_outlet: string;
  name: string;
  latitude: number;
  longitude: number;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -7.779756932063459,
  lng: 110.37802644732686,
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [outlets, setOutlets] = useState<Outlet[]>([]);

  useEffect(() => {
    const fetchOutlets = async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
      console.log("nigger", BASE_URL);
      const url = `${BASE_URL}/outlets`; // Update to call the API route
      console.log("Fetching from URL:", url);

      try {
        const response = await axios.get<Outlet[]>(url);
        console.log(...response.data);

        setOutlets([...response.data]);
      } catch (error) {
        console.error("Error fetching outlets:", error);
      }
    };

    fetchOutlets();
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {outlets.map((outlet) => (
        <Marker
          key={outlet.id_outlet}
          position={{ lat: outlet.latitude, lng: outlet.longitude }}
          title={outlet.name}
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
