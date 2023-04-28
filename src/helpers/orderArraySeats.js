const orderSeats = (array) => {
  return array.sort((a, b) => {
    const aSeat = String(a.seatNumber);
    const bSeat = String(b.seatNumber);
    return aSeat.localeCompare(bSeat, undefined, { numeric: true, sensitivity: "base" });
  });
};

export default orderSeats;
