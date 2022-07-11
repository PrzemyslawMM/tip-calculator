const countTip = (percentOfTip, billValue) => {
  const percentage = percentOfTip / 100;
  return Number((billValue * percentage).toFixed(2));
};

const countTipPerPerson = (numberOfPeople, percentOfTip, billValue) => {
  console.log('test');
  return Number(
    (countTip(percentOfTip, billValue) / numberOfPeople).toFixed(2)
  );
};

export const renderValue = (
  percentOfTip,
  numberOfPeople,
  billValue,
  totalAmount
) => {
  totalAmount[0].innerText = `$${countTipPerPerson(
    numberOfPeople,
    percentOfTip,
    billValue
  )}`;
  totalAmount[1].innerText = `$${countTip(percentOfTip, billValue)}`;
};
