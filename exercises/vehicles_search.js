let vehicles = [
    {
      color: "Silver",
      type: "Minivan",
      registrationState: "CA",
      licenseNo: "ABC-101",
      registrationExpires: new Date("3-10-2022"),
      capacity: 7
    },
    {
      color: "Red",
      type: "Pickup Truck",
      registrationState: "TX",
      licenseNo: "A1D-2NC",
      registrationExpires: new Date("8-31-2023"),
      capacity: 3
    },
    {
      color: "White",
      type: "Pickup Truck",
      registrationState: "TX",
      licenseNo: "A22-X00",
      registrationExpires: new Date("9-30-2023"),
      capacity: 6
    },
    {
      color: "Red",
      type: "Car",
      registrationState: "CA",
      licenseNo: "ABC-222",
      registrationExpires: new Date("12-10-2022"),
      capacity: 5
    },
    {
      color: "Black",
      type: "SUV",
      registrationState: "CA",
      licenseNo: "EEE-222",
      registrationExpires: new Date("12-10-2021"),
      capacity: 7
    },
    {
      color: "Red",
      type: "SUV",
      registrationState: "TX",
      licenseNo: "ZZ2-101",
      registrationExpires: new Date("12-30-2022"),
      capacity: 5
    },
    {
      color: "White",
      type: "Pickup Truck",
      registrationState: "TX",
      licenseNo: "CAC-7YT",
      registrationExpires: new Date("1-31-2023"),
      capacity: 5
    },
    {
      color: "White",
      type: "Pickup Truck",
      registrationState: "CA",
      licenseNo: "123-ABC",
      registrationExpires: new Date("3-31-2023"),
      capacity: 5
    }
  ];
  
  // Function to find vehicles that are RED
  function findRedVehicles(vehicles) {
    return vehicles.filter((vehicle) => vehicle.color.toLowerCase() === "red");
  }
  
  // Function to find vehicles with expired registrations
  function findVehiclesWithExpiredRegistrations(vehicles) {
    const currentDate = new Date();
    return vehicles.filter((vehicle) => vehicle.registrationExpires < currentDate);
  }
  
  // Function to find vehicles that hold at least 6 people
  function findVehiclesWithCapacityAtLeastSix(vehicles) {
    return vehicles.filter((vehicle) => vehicle.capacity >= 6);
  }
  
  // Function to find vehicles with license plates ending with "222"
  function findVehiclesWithLicenseEndingWith222(vehicles) {
    return vehicles.filter((vehicle) => vehicle.licenseNo.endsWith("222"));
  }
  
  // Usage
  const redVehicles = findRedVehicles(vehicles);
  const vehiclesWithExpiredRegistrations = findVehiclesWithExpiredRegistrations(vehicles);
  const vehiclesWithCapacityAtLeastSix = findVehiclesWithCapacityAtLeastSix(vehicles);
  const vehiclesWithLicenseEndingWith222 = findVehiclesWithLicenseEndingWith222(vehicles);
  
  console.log("Red Vehicles:", redVehicles);
  console.log("Vehicles with Expired Registrations:", vehiclesWithExpiredRegistrations);
  console.log("Vehicles with Capacity of at Least 6 People:", vehiclesWithCapacityAtLeastSix);
  console.log("Vehicles with License Plates Ending with '222':", vehiclesWithLicenseEndingWith222);
  