export const statusColorPattern={
   "Delivered": "#1b5e20",
    "In Transit": "#6b6b00",
    "Delayed": "#b71c1c",
}
export const statusBackgroundPattern={
   "Delivered": "#C8E6C9",
    "In Transit": "#FFF9C4",
    "Delayed": "#FFCDD2",
}

export const shipmentdetailHeading = [
  { label: "📦 Shipment ID", key: "id" },
  { label: "🧑‍💼 Sender", key: "sender" },
  { label: "🏢 Receiver", key: "receiver" },
  { label: "🚚 From", key: "from", isCombined: true },
  { label: "🚚 Status", key: "status", isStatus: true }
];
export const stepperIconData = [
    { label: "Order Placed", icon: "🖊️" },
    { label: "Dispatched", icon: "📦" },
    { label: "In Transit", icon: "🌎" },
    { label: "Delivered", icon: "✅ " },
    { label: "Delayed", icon: "⏱️" },
  ];