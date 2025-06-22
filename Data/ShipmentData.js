export const ShipmentData = [
  {
    id: "SIP01",
    sender: "Kush Gupta",
    receiver: "Alock CH",
    origin: "America",
    destination: "India",
    date: "2025-06-20",
    status: "In Transit",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-18 11:00 AM",
        location: "America",
        info: "Order placed and confirmed by sender"
      },
      {
        status: "Dispatched",
        date: "2025-06-19 01:00 PM",
        location: "America Facility",
        info: "Package handed over to dispatch center"
      },
      {
        status: "In Transit",
        date: "2025-06-20 09:00 AM",
        location: "Overseas",
        info: "Shipment is moving towards destination"
      }
    ]
  },
  {
    id: "SIP02",
    sender: "Sachin",
    receiver: "Antoine",
    origin: "Agra",
    destination: "Mumbai",
    date: "2025-06-19",
    status: "Delivered",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-17 10:00 AM",
        location: "Agra",
        info: "Order placed successfully"
      },
      {
        status: "Dispatched",
        date: "2025-06-17 02:00 PM",
        location: "Agra Warehouse",
        info: "Shipment left the origin facility"
      },
      {
        status: "In Transit",
        date: "2025-06-18 08:00 AM",
        location: "Agra Highway",
        info: "Package is on its way"
      },
      {
        status: "Delivered",
        date: "2025-06-19 01:00 PM",
        location: "Mumbai",
        info: "Package delivered to the recipient"
      }
    ]
  },
  {
    id: "SIP03",
    sender: "Karan",
    receiver: "Nitin",
    origin: "Lucknow",
    destination: "Kerla",
    date: "2025-06-19",
    status: "Delayed",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-17 09:00 AM",
        location: "Lucknow",
        info: "Order successfully initiated"
      },
      {
        status: "Dispatched",
        date: "2025-06-17 01:00 PM",
        location: "Lucknow Center",
        info: "Package sent to transit facility"
      },
      {
        status: "In Transit",
        date: "2025-06-18 04:00 PM",
        location: "Bhopal",
        info: "Shipment is en route"
      },
      {
        status: "Delayed",
        date: "2025-06-19 09:00 AM",
        location: "Kerla Border",
        info: "Unexpected delay in reaching destination"
      }
    ]
  },
  {
    id: "SIP04",
    sender: "Amazone",
    receiver: "TCS",
    origin: "New York",
    destination: "Dubai",
    date: "2025-06-20",
    status: "Delivered",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-18 08:00 AM",
        location: "New York",
        info: "Order received by Amazon system"
      },
      {
        status: "Dispatched",
        date: "2025-06-18 06:00 PM",
        location: "NY Port",
        info: "Package shipped from NY port"
      },
      {
        status: "In Transit",
        date: "2025-06-19 02:00 PM",
        location: "Overseas",
        info: "Package traveling over sea to Dubai"
      },
      {
        status: "Delivered",
        date: "2025-06-20 01:00 PM",
        location: "Dubai",
        info: "Package delivered successfully in Dubai"
      }
    ]
  },
  {
    id: "SIP05",
    sender: "Vivo",
    receiver: "Microsoft",
    origin: "India",
    destination: "China",
    date: "2025-06-13",
    status: "Delayed",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-10 09:00 AM",
        location: "India",
        info: "Order placed by Vivo HQ"
      },
      {
        status: "Dispatched",
        date: "2025-06-11 11:00 AM",
        location: "Warehouse 23",
        info: "Package moved to international depot"
      },
      {
        status: "In Transit",
        date: "2025-06-12 02:00 PM",
        location: "Cargo Plane",
        info: "Package currently in air transit"
      },
      {
        status: "Delayed",
        date: "2025-06-13 10:00 AM",
        location: "Shanghai Port",
        info: "Customs clearance delayed the shipment"
      }
    ]
  },
  {
    id: "SIP06",
    sender: "DSL",
    receiver: "Amit",
    origin: "Indore",
    destination: "Banglore",
    date: "2025-06-13",
    status: "In Transit",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-11 10:00 AM",
        location: "Indore",
        info: "DSL created the shipment"
      },
      {
        status: "Dispatched",
        date: "2025-06-12 03:00 PM",
        location: "Indore Warehouse",
        info: "Package handed to transporter"
      },
      {
        status: "In Transit",
        date: "2025-06-13 09:00 AM",
        location: "On Road",
        info: "In transit to Bangalore"
      }
    ]
  },
  {
    id: "SIP07",
    sender: "Prashnat",
    receiver: "Prince",
    origin: "Mathura",
    destination: "Hyderabad",
    date: "2025-06-20",
    status: "Delayed",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-18 09:00 AM",
        location: "Mathura",
        info: "Order request logged"
      },
      {
        status: "Dispatched",
        date: "2025-06-18 02:00 PM",
        location: "Agra Center",
        info: "Shipped to hub from Mathura"
      },
      {
        status: "In Transit",
        date: "2025-06-19 01:00 PM",
        location: "Nagpur",
        info: "Package in route to South Zone"
      },
      {
        status: "Delayed",
        date: "2025-06-20 08:00 AM",
        location: "Hyderabad Border",
        info: "Heavy rain caused delivery delay"
      }
    ]
  },
  {
    id: "SIP08",
    sender: "Flipcart",
    receiver: "Ansh Cop",
    origin: "Indore",
    destination: "Banglore",
    date: "2025-06-20",
    status: "In Transit",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-18 08:30 AM",
        location: "Indore",
        info: "Order confirmed from Flipcart"
      },
      {
        status: "Dispatched",
        date: "2025-06-19 11:00 AM",
        location: "Indore Sorting Center",
        info: "Package scanned at sorting center"
      },
      {
        status: "In Transit",
        date: "2025-06-20 07:00 AM",
        location: "Enroute",
        info: "Moving toward Bangalore"
      }
    ]
  },
  {
    id: "SIP09",
    sender: "Samsung",
    receiver: "Prince",
    origin: "Mathura",
    destination: "Hyderabad",
    date: "2025-06-13",
    status: "Delivered",
    trackHistory: [
      {
        status: "Order Placed",
        date: "2025-06-11 09:00 AM",
        location: "Mathura",
        info: "Samsung created the shipment request"
      },
      {
        status: "Dispatched",
        date: "2025-06-12 10:00 AM",
        location: "Delhi Hub",
        info: "Package left from NCR"
      },
      {
        status: "In Transit",
        date: "2025-06-12 06:00 PM",
        location: "Bhopal",
        info: "Reached central India"
      },
      {
        status: "Delivered",
        date: "2025-06-13 01:00 PM",
        location: "Hyderabad",
        info: "Final delivery completed successfully"
      }
    ]
  }
];
