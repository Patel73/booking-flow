export const LOCATIONS = [
  { name: "Andheri, Mumbai", km: 0 },
  { name: "Bandra, Mumbai", km: 12 },
  { name: "Dadar, Mumbai", km: 18 },
  { name: "Borivali, Mumbai", km: 25 },
  { name: "Colaba, Mumbai", km: 35 }
];

export const calculateDistance = (p1, p2) => {
  const loc1 = LOCATIONS.find(l => l.name === p1);
  const loc2 = LOCATIONS.find(l => l.name === p2);
  return Math.abs((loc2?.km || 0) - (loc1?.km || 0)) || 5; 
};