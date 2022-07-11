import { renderValue } from './renderValue.helper';
import {
  setBillValue,
  setClassToUnActive,
  setNumberOfPeople,
  setPercentOfTipButton,
  setPercentOfTipInput,
} from './setValue.helpers';
import { restart } from './restart.helper';

const billAmountElement: HTMLInputElement =
  document.querySelector('#bill_number');
const resetButton: HTMLButtonElement = document.querySelector('.reset_button');
const numberOfPeopleElement: HTMLInputElement =
  document.querySelector('#amount_of_people');
// eslint-disable-next-line no-undef
const percentTipButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll('.tip_grid button');
const inputCustomPercent: HTMLInputElement =
  document.querySelector('.custom_button');
// eslint-disable-next-line no-undef
const totalAmount: NodeListOf<HTMLParagraphElement> =
  document.querySelectorAll('.amount');

let percentOfTip: number = 15;
let billValue: number = 1;
let numberOfPeople: number = 1;

billAmountElement.addEventListener('input', (e) =>
  setBillValue(e, billValue, percentOfTip, numberOfPeople, totalAmount)
);
percentTipButtons.forEach((element) => {
  element.addEventListener('click', (e) =>
    setPercentOfTipButton(
      e,
      percentOfTip,
      percentTipButtons,
      numberOfPeople,
      billValue,
      totalAmount
    )
  );
});
inputCustomPercent.addEventListener('input', (e) =>
  setPercentOfTipInput(
    e,
    percentOfTip,
    percentTipButtons,
    numberOfPeople,
    billValue,
    totalAmount
  )
);
numberOfPeopleElement.addEventListener('input', (e) =>
  setNumberOfPeople(e, numberOfPeople, percentOfTip, billValue, totalAmount)
);
resetButton.addEventListener('click', () =>
  restart(
    percentTipButtons,
    percentOfTip,
    billValue,
    numberOfPeople,
    inputCustomPercent,
    numberOfPeopleElement,
    billAmountElement,
    totalAmount
  )
);

renderValue(percentOfTip, numberOfPeople, billValue, totalAmount);
