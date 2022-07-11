import { setClassToUnActive } from './setValue.helpers';
import { renderValue } from './renderValue.helper';

export const restart = (
  percentTipButtons,
  percentOfTip,
  billValue,
  numberOfPeople,
  inputCustomPercent,
  numberOfPeopleElement,
  billAmountElement,
  totalAmount
) => {
  setClassToUnActive(percentTipButtons);
  percentTipButtons[2].classList.add('active');
  percentOfTip = 15;
  billValue = 1;
  numberOfPeople = 1;
  inputCustomPercent.value = '';
  numberOfPeopleElement.value = '1';
  billAmountElement.value = '1';
  renderValue(percentOfTip, numberOfPeople, billValue, totalAmount);
};
