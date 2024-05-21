export function changeDay(day, date, condition, image, min, max) {
  const changeDate = document.querySelector(`.forecast__day-${day}-date`);
  const changeCondition = document.querySelector(
    `.forecast__day-${day}-condition`,
  );
  const changeImage = document.querySelector(`.forecast__day-${day}-image`);
  const changeMin = document.querySelector(`.forecast__day-${day}-min`);
  const changeMax = document.querySelector(`.forecast__day-${day}-max`);
  changeDate.innerHTML = date;
  changeCondition.innerHTML = condition;
  changeImage.src = image;
  changeMin.innerHTML = min;
  changeMax.innerHTML = max;
}
