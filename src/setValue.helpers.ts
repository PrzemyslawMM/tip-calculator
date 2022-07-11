import { renderValue } from './renderValue.helper';

export const setClassToUnActive = (percentTipButtons) => {
  percentTipButtons.forEach((element) => {
    element.classList.remove('active');
    element.classList.add('unactive');
  });
};

export const setPercentOfTipButton = (
  e,
  percentOfTip,
  percentTipButtons,
  numberOfPeople,
  billValue,
  totalAmount
) => {
  percentOfTip = Number(e.target.outerText.slice(0, -1));
  setClassToUnActive(percentTipButtons);
  e.target.classList.add('active');
  renderValue(percentOfTip, numberOfPeople, billValue, totalAmount);
};

export const setPercentOfTipInput = (
  e,
  percentOfTip,
  percentTipButtons,
  numberOfPeople,
  billValue,
  totalAmount
) => {
  percentOfTip = Number(e.target.value);
  setClassToUnActive(percentTipButtons);
  renderValue(percentOfTip, numberOfPeople, billValue, totalAmount);
};

export const setBillValue = (
  e,
  billValue,
  percentOfTip,
  numberOfPeople,
  totalAmount
) => {
  const value = e.target.value.replace(',', '.');
  if (value <= 0) {
    e.target.value = '1';
    billValue = 1;
    return;
  }
  billValue = Number(e.target.value.replace(',', '.'));
  renderValue(percentOfTip, numberOfPeople, billValue, totalAmount);
};

export const setNumberOfPeople = (
  e,
  numberOfPeople,
  percentOfTip,
  billValue,
  totalAmount
) => {
  const {
    target: { value },
  } = e;
  numberOfPeople = parseInt(value);
  renderValue(percentOfTip, numberOfPeople, billValue, totalAmount);
};
